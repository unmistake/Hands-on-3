const express = require ('express');
const {hasConnection} = require ("../database")
const routes = require('../routes');
const app = express ();

//hasConnection();
app.use(express.json());
app.use(routes);

app.listen (3300, () => console.log("Servidor rodando na porta 3300."));
