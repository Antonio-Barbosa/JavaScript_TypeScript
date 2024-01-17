
const cachorro = require('./mod');

const cachorrinho = new cachorro('Milu')

cachorrinho.latir()

//Tenho duas váriaveis dentro do modulo, consigo pegar o camido do arquivo e da pasta

console.log(__filename);
console.log(__dirname);

//Quando não sei o SO que meu servidor vai rodar, uso o path, ele vai buscar o caminho de acordo com o SO
const path = require('path')

// Se eu por virgula e dois pontos depois do __dirname, vou mudando o caminho
console.log(path.resolve(__dirname, '..'));
