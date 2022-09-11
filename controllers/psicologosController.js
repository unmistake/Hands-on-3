const Psicologos = require ("../models/Psicologos");
const PsicologosController = {
    listAll : async (req,res) =>{
        const psicologos = await Psicologos.findAll();
        return res.json(psicologos);
    },
    createPsicologos : async (req, res) => {
        const {psicologo} = req.body;

        const newPsicologo = await Psicologos.create({
            psicologo,
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
};

module.exports = PsicologosController;