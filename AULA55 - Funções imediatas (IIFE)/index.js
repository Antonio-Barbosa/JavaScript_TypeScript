// IIFE - Immediately invoked function expression

// Minha função será executada imediatamente e nada dela toca o escopo global

(function (idade, peso, altura) {// Posso passar parâmetros dentro da minha função

    const sobrenome = 'Brito';
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }
    function falaNome(){
        console.log(criaNome('Marcelo'));
    }

    falaNome();
    console.log(idade, peso, altura); // Posso usar os parâmetros dentro da função nomalmente.


})(30, 90, 1.8);// Posso passar os argumenos nos parenteses onde estou invocando a função.
 // Preciso envolver minha função anonima dentro de parenteses e por um parenteses vazio no final.

 
/*

MODO DE CONSTRUÇÃO DAS FUNÇÕES IMEDIATAS

(function(){

})();

*/