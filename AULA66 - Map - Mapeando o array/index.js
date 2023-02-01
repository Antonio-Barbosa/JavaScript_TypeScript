// A função map, funciona por referencia, ou seja, tudo que altero usando ela, vai afetar meu obj original

//Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

//Para cada elemento
// Retorne apenas uma string cm o nome da pessoa
// Remova apenas a chave 'nome' do obj
// Adicione uma chave id em cada obj
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

const nomeDaPessoa = pessoas.map((valor) => {
    return valor.nome
})
console.log(nomeDaPessoa);

const foraNome = pessoas.map((valor) => {
    return {idade: valor.idade};
})
console.log(foraNome);

const adicionaId = pessoas.map((valor, indice) => {
    const newObj = {...valor}; // Crio uma cópia do obj original, assim mantenho meu obj original intacto
    valor.ID = indice + 1
    return valor;
})

console.log(adicionaId);
