let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //D

const letras = ['B', 'C', 'A'];
[a, b, c] = letras;

console.log(a, b, c);

//               0   1   2   3   4   5   6   7   8
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [primeiro, , terceiro, , quarto, ...resto] = numeros;

console.log(primeiro, terceiro, quarto);
console.log(resto);

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const [, [, , seis]] = numeros2
const [lista1, lista2, lista3] = numeros2;

console.log(lista3[2]);
console.log(seis);
console.log(numeros2[1][2]);