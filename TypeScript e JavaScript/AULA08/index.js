/* Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.925925...
luiz Otávio nasceu em ....*/
const nome='Luiz Otavio';
const sonbreNome='Miranda';
const idade=30;
const peso=84;
const alturaEmM=1.80;
let imc;  //peso/ (altura*altura)
imc= peso/(alturaEmM*alturaEmM)
let anoNascimento;
anoNascimento=2022-idade;


console.log(nome, sonbreNome, 'tem', idade,'anos, pesa', peso,'kg')
console.log('tem', alturaEmM,'e seu IMC é de', imc)
console.log( nome, 'nasceu em'
,anoNascimento);
console.log("---------------------------------------");
//template strings
console.log(`nome ${sonbreNome} tem ${idade} anos pesa ${peso} kg` )
console.log(`tem ${alturaEmM} e seu IMC é de ${imc}`)
console.log( `${nome} nasceu em ${anoNascimento}`);
