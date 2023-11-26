const { Router } = require("express");

const users = require("./users.route");

//Incluir rotas aqui

const routes = Router();

routes.use('/users', users);

module.exports = routes;