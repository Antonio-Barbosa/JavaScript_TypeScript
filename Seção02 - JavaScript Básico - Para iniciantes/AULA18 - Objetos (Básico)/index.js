const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }  

}

pessoa1.fala()


// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// }

// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25)
// const pessoa2 = criaPessoa('Luiz', 'Otavio', 25)
// const pessoa3 = criaPessoa('Luiz', 'Otavio', 25)

// console.log(pessoa1, pessoa2, pessoa3);

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// }

// const pessoa2 = {
//     nome: 'Antonio',
//     sobrenome: 'Miranda',
//     idade: 25
// }

// console.log(pessoa1.nome);
