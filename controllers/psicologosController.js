const Psicologos = require ("../models/Psicologos");
const bcrypt = require('bcrypt');

const PsicologosController = {
    listAll : async (req, res) =>{
        const psicologos = await Psicologos.findAll();
        return res.status(200).json(psicologos);
    },
    createPsicologos : async (req, res) => {
        const {nome, email, senha, apresentacao} = req.body;     // id_psicologo é auto increment no banco de dados. Não é necessário tê-lo aqui.

        newPassword = bcrypt.hashSync(senha, 10);

        const newPsicologo = await Psicologos.create({
            nome, 
            email, 
            senha: newPassword,
            apresentacao
        });
        return res.status(201).json(newPsicologo);
    },
    NullReferenceException: (id) => {this.id = id},

    getPsicologo : async (req,res)=>{
        const {id} = req.params;
        const psicologoID = await Psicologos.findByPk(id);
        if (psicologoID == true){
            return res.status(200).json(psicologoID)
        }else {
            res.status(404).json("Psicólogo: "+ id+ " não encontrado.")  
        }   
    },
    delPsicologo: async(req,res) =>{
        const {id} = req.params;
        const psicologoID = await Psicologos.findByPk(id);
        psicologoID.destroy();
        res.status(204).json(psicologoID);
    },
    attPsicologo: async (req,res) => {
        const {id} = req.params;
        const {id_psicologo, nome, email, senha, apresentacao} = req.body;
        
        psicologoAtt = await Psicologos.update(
            {
                id_psicologo, 
                nome,
                email, 
                senha, 
                apresentacao
            },
            {
                where: {
                    id_psicologo: id
                },
            }
        );
        res.status(200).json("Psicologo atualizado com sucesso.")
    }
};

module.exports = PsicologosController;