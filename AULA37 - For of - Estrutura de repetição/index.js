// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (String , array ou objetos)
//For of - Retorna o valor em si (iteráveis , arrays ou strings)
const nomes = ['Antonio', 'Raquel', 'Ivolanda']

for (valor of nomes) {
    console.log(valor);
}

console.log('--------------------------------');

for (i = 0; i < nomes.length; i++) {
    console.log(i, nomes[i]);
}

console.log('--------------------------------');

for (valor in nomes) {
    console.log(valor, nomes[valor]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome:'Otavio'
}; 
