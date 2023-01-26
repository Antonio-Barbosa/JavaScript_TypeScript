
// Função definida com a palavra function tem um argumento 
// especial chamado (arguments) que salva todos os argumentos enviados.
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total);
    console.log(arguments);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 13);

console.log('-------------------------------------------');

// Se deixar parametros vazios ira setar como undefined
function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}

funcao2(1, 2, 3);

console.log('-------------------------------------------');


// Caso deixe o parametro vazio, consigo setar um valor padrao na variável. (b = 0)
function soma(a, b = 0) {
    console.log(a + b);
}

soma(5)

console.log('-------------------------------------------');


function objFuncao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
objFuncao({ nome: 'Antonio', sobrenome: 'Marcelo', idade: '24' })

console.log('-------------------------------------------');


function arrayFuncao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

arrayFuncao(['Antonio Marcelo', 'Brito', '30 anos']);

console.log('-------------------------------------------');


function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') {
            acumulador += numero
        }
        if (operador === '-') {
            acumulador -= numero
        }
        if (operador === '*') {
            acumulador *= numero
        }
        if (operador === '/') {
            acumulador /= numero
        }       
    }
    console.log(acumulador);
}

conta('/', 1, 20, 30, 40, 50)
