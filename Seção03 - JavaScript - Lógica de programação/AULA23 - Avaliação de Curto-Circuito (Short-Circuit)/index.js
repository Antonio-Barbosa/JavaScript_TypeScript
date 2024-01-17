/* 
&& -> false && true -> false "o valor mesmo"

|| -> 


Qualquer coisa fora desses parâmetros e considerado true em JS
(FALSY
*false
0 
''
""
``
null / undefined
NaN)

*/

// 

console.log(0 || false || null || "Luiz Otavio" || true);

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(corPadrao);

const corUsuario1 = 'Vermelho';
const corPadrao1 = corUsuario1 || 'Preto';

console.log(corPadrao1);


