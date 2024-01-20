require('dotenv').config();

const express = require('express'); // Importo o express
const app = express(); // Inicializo ele

const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING )
    .then(() => {
        console.log('Banco de dados conectado');
        app.emit('pronto')
    })
    .catch(e => console.log(e));

const routes = require('./routes')
const path = require('path')
const { middlewareGlobal } = require('./src/middlewares/middleware') //Para usar meu middleware de forma global, uso no meu server

app.use(express.urlencoded({ extended: true })) // Fazendo isso, pego as informações enviadas pelo post
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(middlewareGlobal)
app.use(routes)

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Server rodando')
    });
})



