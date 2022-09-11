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
};

module.exports = PacientesController;