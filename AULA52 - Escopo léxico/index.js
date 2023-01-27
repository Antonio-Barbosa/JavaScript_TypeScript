// A função conhece o local onde ela foi declarada, tudo que está declara dentro dela
// E reconhece os vizinhos dela e lembra quem eram, sempre de dentro para fora.

const nome = 'Luiz';
 
function falaNome() {
    const nome = 'Otávio' // Se a função encontra a variável dentro dela, ela não procura mais, case não ache, ela procura nos vizinhos
    console.log(nome);
}
 function usaFalaNome() {
    falaNome();
 }

 usaFalaNome();