const { Router } = require("express");

const users = require("./users.routes");
const notes = require("./notes.routes");

//Incluir rotas aqui

const routes = Router();

routes.use('/users', users);
routes.use('/notes', notes);

module.exports = routes;