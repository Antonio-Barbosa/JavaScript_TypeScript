const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

// Atribuição via desestruturação
const { nome: teste, sobrenome, idade, endereco } = pessoa
const { endereco: { rua, numero } } = pessoa;
const {nome , ...resto} = pessoa;

console.log(resto);
console.log(teste, sobrenome, idade);
console.log(endereco);
console.log(rua, numero);
