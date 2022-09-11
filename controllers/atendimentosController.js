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

    getAtendimento : async (req,res)=>{
        const {id} = req.params;

        const atendimentoID = await Atendimentos.findByPk(id);
        return res.json(atendimentoID)
    },
    delAtendimento: async(req,res) =>{
        const {id} = req.params;
        const atendimentoID = await Atendimentos.findByPk(id);
        atendimentoID.destroy();
        res.status(204).json(atendimentoID);
    }
    
};

module.exports = AtendimentosController;