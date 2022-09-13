const {Psicologos} = require ("../models");
const PsicologosController = {
    listAll : async (req,res) =>{
        const psicologos = await Psicologos.findAll();
        return res.json(psicologos);
    },
    createPsicologos : async (req, res) => {
        const {id_psicologo, nome, email, senha, apresentacao} = req.body;

        const newPsicologo = await Psicologos.create({
            id_psicologo, 
            nome,
            email, 
            senha, 
            apresentacao,
        });
        return res.status(201).json(newPsicologo);
    },
    getPsicologo : async (req,res)=>{
        const {id} = req.params;

        const psicologoID = await Psicologos.findByPk(id);
        return res.json(psicologoID)
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
        res.json ("Psicologo atualizado com sucesso.")
    }
};

module.exports = PsicologosController;