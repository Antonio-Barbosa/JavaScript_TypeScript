// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce((acumulador, valor) => { // Além do valor, indice e o próprio array o reduce tem um acumulador
    acumulador += valor
    return acumulador
}, 0); // Esse valor, é o valor que quero que inicie meu acumulador
// console.log(total);

const numerosPares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    // valor % 8 === 0 Posso vê os multiplos de qualquer número
    return acumulador;
}, []); // Posso transformar meu acumulador em arrays ou objs
// console.log(numerosPares);

const numerosDobrados = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2)
    return acumulador
}, []);

// console.log(numerosDobrados);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 100 }
]

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(maisVelha);