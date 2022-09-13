const { Atendimentos, Pacientes, Psicologos} = require ("../models");

const AtendimentosController = {
    listAll : async (req,res) =>{
        const atendimentos = await Atendimentos.findAll();
        return res.json(atendimentos);
    },
    createAtendimento : async (req, res) => {
        const {id_atendimento, data_atendimento, observacao, fk_psicologo, fk_paciente} = req.body;

        const newAtendimento = await Atendimentos.create({
            id_atendimento, data_atendimento, observacao, fk_psicologo, fk_paciente,
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
    },
    attAtendimento: async (req,res) => {
        const {id} = req.params;
        const {id_atendimento, data_atendimento, observacao, fk_psicologo, fk_paciente} = req.body;
        
        atendimentoAtt = await Atendimentos.update(
            {
                id_atendimento,
                data_atendimento,
                observacao,
                fk_psicologo,
                fk_paciente
            },
            {
                where: {
                    id_atendimento: id
                },
            }
        );
        res.json ("Atendimento atualizado com sucesso.")
    }
    
};
module.exports = AtendimentosController;