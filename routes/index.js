const express = require('express');
const AtendimentosController = require('../controllers/atendimentosController');
const PacientesController = require('../controllers/pacientesController');
const PsicologosController = require('../controllers/psicologosController');
const routes = express.Router();

routes.get("/pacientes", PacientesController.listAll);
routes.post("/pacientes", PacientesController.createPacientes);
routes.get("/atendimento", AtendimentosController.listAll);
routes.post("/atendimento", AtendimentosController.createAtendimento);
routes.get("/psicologos", PsicologosController.listAll);
routes.post("/psicologos", PsicologosController.createPsicologos);

module.exports = routes;