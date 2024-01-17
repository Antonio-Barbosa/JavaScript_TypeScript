// Object.assign(des,any)
// Object.getOwnPropertyDescriptor(obj, 'prop')
// Object.keys(retorna as chaves)
// Object.defineProperties(define várias propriedades)
// Object.defineProperty(define uma própriedade)

const produto = { nome: 'Caneca', preco: 1.8 };
const outraCoisa = {
    ...produto,
    material: 'Porcelana'
}; // Esctou criando uma cópia do obj e posso adicionar chaves

const outraCoisa2 = Object.assign({}, produto, { material: 'Plastico' }); // Crio uma cópia, primeiro crio um obj vazio, depois passo o obj a ser cópiado

outraCoisa.nome = 'Copo'

console.log(Object.keys(outraCoisa)); // Vejo as chaves do obj
Object.freeze(outraCoisa2); // Não deixo meu obj ser modificado
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Vejo as própriedades do obj, como ele está configurado
console.log(Object.values(produto)); // Vejo os valores das chaves
console.log(Object.entries(produto)); // Transformo as chaves em um array

console.log('-----------------------------------------');

for ([chave, valor] of Object.entries(outraCoisa2)) {
    console.log(chave, valor);
}
