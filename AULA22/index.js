/*
Operadores lógicos

&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para rettornar true
|| -> OR -> OU 
! -> NOT -> NÃO -> Inverte o valor Ex: (!False === True) (!True === False)

*/

const expressaoEnd = true && true && true;
const expressaoOr = false || true;
console.log(expressaoEnd);
console.log(expressaoOr);

const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';

console.log(vaiLogar);