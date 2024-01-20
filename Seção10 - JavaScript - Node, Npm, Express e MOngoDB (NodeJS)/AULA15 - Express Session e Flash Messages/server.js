require('dotenv').config();

const express = require('express'); // Importo o express
const app = express(); // Inicializo ele
const mongoose = require('mongoose')
// Conexão base de dados
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Banco de dados conectado');
        app.emit('pronto')
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path')
const { middlewareGlobal } = require('./src/middlewares/middleware') //Para usar meu middleware de forma global, uso no meu server

app.use(express.urlencoded({ extended: true })) // Fazendo isso, pego as informações enviadas pelo post
app.use(express.static(path.resolve(__dirname, 'public')));

// Aqui configuro as minhas sessions
const sessionOpitions = session({
    secret: 'antonio',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,

    // Falo pro cookie quanto tempo quero salvar meus dados, agora consigo salvar o que eu quiser durante minha seção pela req
    // Olhar exemplos na homeController
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,  // Isso da 7 dias em milesimos de segundo
        httpOnly: true
    },
    
})

app.use(sessionOpitions);
app.use(flash());


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middlewareGlobal)
app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Server rodando')
    });
})



