const Atendimentos = require ("../models/Atendimentos");
const AtendimentosController = {
    listAll : async (req,res) =>{
        const atendimentos = await Atendimentos.findAll();
        return res.json(atendimentos);
    },
    createAtendimento : async (req, res) => {
        const {atendimento} = req.body;

        const newAtendimento = await Atendimentos.create({
            atendimento,
        });
        return res.status(201).json(newAtendimento);
    },
};

module.exports = AtendimentosController;