const Pacientes = require ("../models/Pacientes");
const PacientesController = {
    listAll : async (req,res) =>{
        const pacientes = await Pacientes.findAll();
        return res.json(pacientes);
    },
    createPacientes : async (req, res) => {
        const {paciente} = req.body;

        const newPaciente = await Pacientes.create({
            paciente,
        });
        return res.status(201).json(newPaciente);
    },
    getPaciente : async (req,res)=>{
        const {id} = req.params;

        const pacienteID = await Pacientes.findByPk(id);
        return res.json(pacienteID)
    },
    delPaciente: async(req,res) =>{
        const {id} = req.params;
        const pacienteID = await Pacientes.findByPk(id);
        pacienteID.destroy();
        res.status(204).json(pacienteID);
    },
};

module.exports = PacientesController;