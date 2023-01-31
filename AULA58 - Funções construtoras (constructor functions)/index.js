// Função construtura -> Objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new Pessoa)

function Pessoa(nome, sobrenome) {
    // Atributos ou metodos privados;
    const ID = 123456; // Não consigo acessar fora da função
    const metodoInterno = () => {// Não consigo acessar fora da função

    }
    // Atributos ou metodos publicos;
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`Ola sou ${this.nome}`);
    }
}

const p1 = new Pessoa('Antonio', 'Marcelo');
const p2 = new Pessoa('Raquel', 'Silva');

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();
p2.metodo();