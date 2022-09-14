const Pacientes = require ("../models/Pacientes");
const PacientesController = {
    listAll : async (req,res) =>{
        const pacientes = await Pacientes.findAll();
        return res.json(pacientes);
    },
    createPacientes : async (req, res) => {
        const {id_paciente, nome, email, idade} = req.body;

        const newPaciente = await Pacientes.create({
            id_paciente, 
            nome,
            email, 
            idade
        });
        return res.status(201).json(newPaciente);
    },
    getPaciente : async (req,res)=>{
        try{
            const {id} = req.params;
            const pacienteID = await Pacientes.findByPk(id);
            if (pacienteID != null){
                return res.status(200).json(pacienteID)
                
            }else {
                res.status(404).json("Paciente "+ id+ " não encontrado.")
            }
            }catch (e) {
                throw e;
            }
    },
    delPaciente: async(req,res) =>{
        const {id} = req.params;
        const pacienteID = await Pacientes.findByPk(id);
        pacienteID.destroy();
        res.status(204).json(pacienteID);
    },
    attPaciente: async (req,res) => {
        const {id} = req.params;
        const {id_paciente, nome, email, idade} = req.body;
        
        pacientesAtt = await Pacientes.update(
            {
                id_paciente, 
                nome,
                email, 
                idade
            },
            {
                where: {
                    id_paciente: id
                },
            }
        );
        res.json ("Paciente atualizado com sucesso.")
    }
};

module.exports = PacientesController;