// return
// retorna um valor e termina a função

function soma(a, b) {
    return (a + b)
}

function soma2(a, b) {
    console.log(a + b); //Não retorna nada, apenas exibe
}

// document.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'red'; // Não retorna nada, mas executa uma ação
// })

function criaPessoa(nome, sobrenome) {
    return { nome: nome, sobrenome: sobrenome }
}

const p1 = criaPessoa('João', 'Roberto') // Usando função para criar meus objetos
const p2 = { // Criando objetos manualmente , usando função ganho tempo.
    nome: 'João',
    sobrenome: 'Pessoa'
}
console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto; // Estou retornando uma funlção
}
const olaMundo = falaFrase('Olá'); // Vira uma função
console.log(olaMundo('Mundo!'));// olaMundo virou a função interna

//Uma situação que usar essa tecnica vai ser viável;

function criaMultiplicador(multiplicador) {
    // multiplicador
    function multiplicacao(n) {
        return n * multiplicador
    }

    return multiplicacao
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(5));
console.log(quadriplica(10));