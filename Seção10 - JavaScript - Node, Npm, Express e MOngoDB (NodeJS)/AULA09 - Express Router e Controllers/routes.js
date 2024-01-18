const express = require('express')
const route = express.Router(); // Aqui uso o Router do próprio express
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')


/*
Agora crio um arquivo controller, onde nele vai estar separado tudo que preciso 
para uma detarminada página, lá faço a função que preciso, por exemplo um get ou post,
e importo no meu arquivo de rotas. 
*/
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)

//Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;
