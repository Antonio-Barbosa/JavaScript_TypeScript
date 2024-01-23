require('dotenv').config(); // Váriaveis de ambiente contidas no arquivo .env

const express = require('express'); // Importo o express
const app = express(); // Inicializo ele
const mongoose = require('mongoose')
// Conexão base de dados, além do mongoose modelar os dados da nossa base de dados
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Banco de dados conectado');
        app.emit('pronto') // Quando estiver conectado, ele envia esse sinal, a partir deste evento, inicio meu server
    })
    .catch(e => console.log(e));

const session = require('express-session'); // Para indentificar navegador do cliente, e toda vez que ele conectar no navegador ele vai mandar este cookie, nosso servidor checa.
const MongoStore = require('connect-mongo'); // Onde salvo minhas sessões
const flash = require('connect-flash'); // Mensagens auto-destrutivas, assim que lê uma vez, elas somem. OBS: Essas msgs são salvas em sessões.
const routes = require('./routes'); // As rotas da nossa aplicação.
const path = require('path'); // Para usar caminhos dos arquivos
const helmet = require('helmet'); // Uma recomendação do próprio express para segurança
const csrf = require('csurf'); // Crio tokens para formularios, isso faz com que nenhum site ou aplicativo externo envie formularios na nossa aplicação.
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware') //Para usar meu middleware de forma global, uso no meu server

app.use(helmet());
app.use(express.urlencoded({ extended: true })) // Fazendo isso, pego as informações enviadas pelo post
app.use(express.json()); // Para pegar arquivos em json
app.use(express.static(path.resolve(__dirname, 'public')));

// Aqui configuro as minhas sessions
const sessionOpitions = session({
    secret: 'antonio',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    // Falo pro cookie quanto tempo quero salvar meus dados, agora consigo salvar o que eu quiser durante minha seção pela req
    // Olhar exemplos na homeController
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,  // Isso da 7 dias em milesimos de segundo
        httpOnly: true
    }
})

app.use(sessionOpitions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); // Arquivos que renderizamos na tela.
app.set('view engine', 'ejs'); // A engine que estamos usando para as views

app.use(csrf());
// Nossos middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Server rodando')
    });
})



