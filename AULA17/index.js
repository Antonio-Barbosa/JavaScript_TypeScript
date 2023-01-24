
const raiz1 = (n) => n ** 0.5 // arrow function



const raiz = function (n) { // função anonima
    return n ** 0.5
};
console.log(raiz(9));

function soma(x = 1, y = 1) { // Quando os valores estiverem vazio eles assumem os que foram atribuídos 

    const resultado = x + y
    return resultado // A partir do momento que chega no return a função sera encerrada
}


// console.log(soma(5, 6));
// console.log(soma(5, 7));
// console.log(soma(5, 8));


// function saudacao(nome) {
//     return `Ola!! ${nome}`;
// }

// const variavel = saudacao ('Luiz');
// console.log(variavel);

// const alunos=['Maria','João','Luiz','Jorge','Raquel']
// alunos.forEach(a => {
//     saudacao(a)
// });