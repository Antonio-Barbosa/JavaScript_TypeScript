// Uma closure ocorre normalmente quando uma 
// função é declarada dentro do corpo de outra, e a função interior referencia variáveis locais da função exterior. 


//Escopo global
function retornaFuncao(nome) {
    // Escopo da função pai / mãe
    // const nome = 'Luiz'
    return function () {
        //Escopo da função
        return nome
    }
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.log(funcao);
console.dir(funcao2);
