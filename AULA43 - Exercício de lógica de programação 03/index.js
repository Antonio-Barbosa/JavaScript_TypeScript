/*
Escreva uma função que recebe um número e 
retorne o seguinte:

Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e 5 = FizzBuzz
Número não é divisivel por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número

*/

function FizzBuzz(x) {
    if (typeof x !== 'number'){
        return x
    } 
    if (x % 3 === 0 && x % 5 === 0) {
        return 'FizzBuzz';
    }
    if (x % 5 === 0) {
        return 'Buzz';
    }
    if (x % 3 === 0) {
        return 'Fizz'   
    }
    return x;

}

console.log(FizzBuzz('A'));

console.log('-------------------------------------');

for (i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i));
}