// For in -> lê os indices ou chaves do obj

const pessoa ={
    nome: 'Luiz', // chave
    sobrenome: 'Otavio',
    idade: 30
}

for (chave in pessoa){
    console.log(chave, pessoa[chave]);
}



// const frutas = ['Pera', 'Maçã', 'Uva'];
// for (i = 0; i < frutas.length; i++) {

//     console.log(frutas[i]);

// }