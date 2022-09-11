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
};

module.exports = PsicologosController;