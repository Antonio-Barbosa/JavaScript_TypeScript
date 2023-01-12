/*
Primitivos (imutáveis)- string, number,
undefined , null , bigint, symbol. -- Valores são cópiados

Referência (Mútavel) - Array, object , function. -- Passamos por referência

*/

let a = [1,2,3]
let b= a
console.log(a,b);

a.push(4)
console.log(a,b);

b.pop()
console.log(a,b);

let b2= [...a] //Copio os valores de a para dentro de b2