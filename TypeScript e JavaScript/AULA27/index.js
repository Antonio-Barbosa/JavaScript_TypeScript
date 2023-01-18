/*

? :
(condiçao) ? 'Valor para verdadeiro' : 'Valor para falso'

*/

const pontuacaoUsuario = 999;

// if (pontuacaoUsuario >= 999){
//     console.log('Usuário VIP');
// }else{
//     console.log('Usuário normal');
// }

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usúario VIP' : 'Usúario normal';

const corUsuario = 'Pink'
const corPadrao = corUsuario || 'Preta'
console.log(nivelUsuario, corPadrao);


