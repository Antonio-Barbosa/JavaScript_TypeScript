const express = require('express')
const route = express.Router(); // Aqui uso o Router do próprio express
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')

// Rotas Home
route.get('/', homeController.index);

//Rotas de login
route.get('/login/index', loginController.index);


module.exports = route;
