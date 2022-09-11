const express = require('express');
const AtendimentosController = require('../controllers/atendimentosController');
const PacientesController = require('../controllers/pacientesController');
const PsicologosController = require('../controllers/psicologosController');
const routes = express.Router();

//rota pacientes
routes.get("/pacientes", PacientesController.listAll);
routes.post("/pacientes", PacientesController.createPacientes);
routes.get("/pacientes/:id", PacientesController.getPaciente);
routes.delete("/pacientes/:id", PacientesController.delPaciente);


//rota atendimentos
routes.get("/atendimentos", AtendimentosController.listAll);
routes.post("/atendimentos", AtendimentosController.createAtendimento);
routes.get("/atendimentos/:id", AtendimentosController.getAtendimento);
routes.delete("/atendimentos/:id", AtendimentosController.delAtendimento);


//rota psicologos
routes.get("/psicologos/:id", PsicologosController.getPsicologo);
routes.get("/psicologos", PsicologosController.listAll);
routes.post("/psicologos", PsicologosController.createPsicologos);
routes.delete("/psicologos/:id", PsicologosController.delPsicologo);



module.exports = routes;