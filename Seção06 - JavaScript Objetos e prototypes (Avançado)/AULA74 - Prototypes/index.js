/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de prótotipo
Protótipo é o termo usado para se referir ao que foi criado peça
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
cria-lo. 

###  IMPORTANTE ###
Quando tentamos acessar u membro de um  objeto, primeiro o motor
do JS vau tentar encontrar este membro no próprio objeto e depois a cadeia
de prótotipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// Toda fução em JS tem um obj chamado prototype, quando usado o prototype, todos os objetos
// que forem instanciados da minha função iram conter as coisas criadas
// Quando tenho métodos que vão ser usados em todos os objetos,
// Crio usando prototype, assim todos os objetos vão compartilhar do mesmo metodo, porém cada um com seus valores 


Pessoa.prototype.estouAqui = 'hahahaha'
Pessoa.prototype.nomeCompleto = function () { // Agora todas as pessoas criadas iram usar esse método, deixando o programa mais eficiente
    return this.nome + ' ' + this.sobrenome;
}

// instância
const pessoa1 = new Pessoa('Luiz', 'Otavio'); // <- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(data);


