
// Para importar uso require
// Posso chamar minha const de qualquer coisa

const mod1 = require('./mod1');

// Usando . consigo importar um objeto especifico dentro do modulo
const mod2 = require('./mod1').falaNome;

// Por ser um obj, posso imporat atraves da desestruturação

const { nome, sobrenome, falaNome } = require('./mod1')
const { Pessoa } = require("./class1");

// Quando vou importar modulos que são instalados, por exemplo o Axios, não passo o caminho e sim o nome do pacote
const axios = require('axios')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch( e => console.log(e))

const p1 = new Pessoa('Class Pessoa')
console.log(p1);

console.log(nome);
console.log(sobrenome);

console.log(mod1);
console.log(mod1.falaNome());