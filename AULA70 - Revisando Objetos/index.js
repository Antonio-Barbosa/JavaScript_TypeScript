
// '' "" `` String
// [] Array
// 12234  number
// {} obj

// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otavio'
// };

// console.log(pessoa.nome);// Posso acessar o valor por ( . )
// console.log(pessoa['sobrenome']);// Posso acessar por ( [''] )

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';
pessoa1.idade = 30;
pessoa1.falaNome = function () {
    return (`Olá me chamo ${this.nome} ${this.sobrenome}`);
}
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
// delete pessoa1.nome;
// console.log(`${pessoa1.falaNome()} nasci no ano de ${pessoa1.getDataNascimento()}.`);

for (let chave in pessoa1){
    // console.log(chave);
}

// Posso criar moldes para meus objetos
// Usando Factory functions / Constructor functions

function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Antonio', 'Marcelo');
// console.log(p1.nomeCompleto);

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// A palavra new vai criar um obj vazio, pega a plavra this e atrela ela ao objeto
// Ou seja o this sempre vai ser atrelado a nova pessoa, após fazer isso ele faz o return sozinho

const p2 = new Pessoa('Antonio', 'Marcelo');
Object.freeze(p2); // Deixo meu obj travado, ou seja, não posso mudar seus valores
console.log(p2);

