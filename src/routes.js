const routes = require("express").Router();
const SessionController = require("./app/controllers/SessionController");


routes.post("/sessions", SessionController.store);

// Definicão de rotas
module.exports = routes;