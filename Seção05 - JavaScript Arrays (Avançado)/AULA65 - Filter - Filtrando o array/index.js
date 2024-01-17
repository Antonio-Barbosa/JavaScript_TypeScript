// filter -> Sempre retorna um array com a mesma quantidade de elementos ou menos.
// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const maiorQue10 = []

// Minha solução
for (let num of numeros) {
    if (num > 10) maiorQue10.push(num)
}
console.log(maiorQue10);

//Solução com filter
const numerosFiltrados = numeros.filter((valor) => {// Posso passar o indice e o array como argumentos da função
    return valor > 10;
})
console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoasComNomeGrande = pessoas.filter((valor) => {
    return valor.nome.length >= 5
})
console.log(pessoasComNomeGrande);

const pessoasVelhas = pessoas.filter(valor => valor.idade > 50)
console.log(pessoasVelhas);

const terminaComA = pessoas.filter(valor => valor.nome.slice(-1) === 'a') // Maneira reduzida de fazer uma arrow function
console.log(terminaComA);