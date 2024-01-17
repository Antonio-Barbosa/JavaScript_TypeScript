const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Com for of
for (valor of a1) {
    // console.log(valor);
}

// Com forEach
let total = 0
a1.forEach((valor, indice, array) => { // Posso passar o valor , o indice e o próprio array
    // console.log(valor, indice, array);
    total += valor
})
console.log(total);