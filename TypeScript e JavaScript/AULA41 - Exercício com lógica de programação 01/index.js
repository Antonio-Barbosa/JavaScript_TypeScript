// Escreva uma função que receba 2 números e retorne o maior deles

function maiorNumero(num1, num2) {

    if (num1 > num2) {
        return `O número um é maior !! ${num1}`
    }
        return `O número dois é maior !! ${num2}`

}

const maiorNumero2 = (x, y) => { // arrow function
    return x > y ? x : y; // função ternaria
}

console.log(maiorNumero(40, 100));

console.log(maiorNumero2(40, 100));