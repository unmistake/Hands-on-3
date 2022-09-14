const express = require('express');
const AtendimentosController = require('../controllers/atendimentosController');
const countController = require('../controllers/countController');
const PacientesController = require('../controllers/pacientesController');
const PsicologosController = require('../controllers/psicologosController');
const routes = express.Router();

//rota pacientes
routes.get("/pacientes", PacientesController.listAll);
routes.post("/criar/paciente", PacientesController.createPacientes);
routes.get("/listar/paciente/:id", PacientesController.getPaciente);
routes.delete("/deletar/paciente/:id", PacientesController.delPaciente);
routes.put("/atualizar/paciente/:id",PacientesController.attPaciente)


//rota atendimentos
routes.get("/atendimentos", AtendimentosController.listAll);
routes.post("/criar/atendimento", AtendimentosController.createAtendimento);
routes.get("/listar/atendimento/:id", AtendimentosController.getAtendimento);
routes.delete("/deletar/atendimento/:id", AtendimentosController.delAtendimento);
routes.put("/atualizar/atendimento/:id", AtendimentosController.attAtendimento);

//rota psicologos

routes.get("/psicologos", PsicologosController.listAll);
routes.get("/listar/psicologo/:id", PsicologosController.getPsicologo);
routes.post("/criar/psicologo", PsicologosController.createPsicologos);
routes.delete("/deletar/psicologo/:id", PsicologosController.delPsicologo);
routes.put("/atualizar/psicologo/:id", PsicologosController.attPsicologo)

//count
routes.get("/contador", countController.countAll);

module.exports = routes;