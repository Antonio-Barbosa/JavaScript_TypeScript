//Declaração de função (Function hoisting)
//Posso chamar ela antes de declarar
function falaOi() {
    console.log('Fala oi.');
}

// First-class objects (Objetos de primeira classe)
// Function expression (Jogo uma função em uma constante)

const souUmaFuncao = function () {
    console.log('Sou uma função');
}

function executaFuncao(funcao) {
    console.log('Vou executar fua função abaixo: ');
    funcao();
} //executaFuncao(souUmaFuncao);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma Arrow function.');
}  //funcaoArrow();

// Dentro de um obj posso ter uma função
const obj = {
    falar: function () {
        console.log('Estou falando....');
    }
}
obj.falar();