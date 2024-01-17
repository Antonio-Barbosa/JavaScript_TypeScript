// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar valores
// -> Reduzir tudo (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]


// Minha solução
const numPares = numeros.filter((valor) => valor % 2 === 0);
console.log(numPares);

const dobrarValores = numPares.map((valor) => valor * 2);
console.log(dobrarValores);

const reduzirTudo = dobrarValores.reduce((acumulador, valor) =>{
    acumulador += valor
    return acumulador
}, 0);
console.log(reduzirTudo);

//Solução do professor
const numerosPares = numeros.filter((valor) => {
    return valor % 2 ===0;
}).map((valor) => {
    return valor * 2;
}).reduce((acumulador, valor) => {
    return acumulador + valor
});

console.log(numerosPares);