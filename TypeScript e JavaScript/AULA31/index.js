const verdadeira = true;

//Let tem escopo de bloco {.... bloco }
// Var só tem escopo de função

let nome = 'Luiz' // criando
var nome2 = 'Luiz'

var nome2 = 'Otávio' // Redeclarando
if (verdadeira){
    let nome = 'Otavio' // criando
    var nome2 = 'Antonio' // Redeclarando
    console.log(nome, nome2);    

    if (verdadeira){
        let nome = 'Outra coisa'
        var nome2 = 'Raquel' // Redeclarando
        console.log('OK');
        
        console.log(nome, nome2);
    }
}

console.log(nome, nome2); // Let pega do escopo global já o Var vai se Redeclarando.
