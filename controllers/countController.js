
const {Atendimentos, Psicologos, Pacientes} = require ("../models/index");
const countController = {
    countAll : async (req,res) =>{
        const countPsicologos = await Psicologos.count();
        const countAtendimentos = await Atendimentos.count();
        const countPacientes = await Pacientes.count();
        resposta = {"Numero de psicologos:" :countPsicologos, "Numero de pacientes: " :countPacientes, "Numero de atendimentos: " :countAtendimentos};
        respJson = JSON.stringify(resposta);
        res.send(respJson)
    }
}

module.exports = countController;