const nome = 'Antonio';
const sobrenome = 'Marcelo';

const falaNome = () => nome + " " + sobrenome;

//Formar de exportar com Module
// Na hora de exportar não preciso usar o nome da váriavel, posso dar qualquer nome

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// Dessa forma seria um atalho, não uso module, ambas as formas tem o mesmo resultado

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

// Quando uso This, ele vai se referir ao proprio modulo, então não preciso usar esports.nome por exemplo
// Não é muito usado mas tambem funciona
this.qualquerCoisa = 'O que eu quiser exportar'

