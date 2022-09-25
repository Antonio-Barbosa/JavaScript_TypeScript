let varA = 'A'; //B
let varB = 'B';//C
let varC = 'C';//A
//assim
//[varA,varB,varC]=[varB,varC,varA]
//ou assim
const guarda = varA
varA = varB
varB = varC
varC = guarda



console.log(varA, varB, varC);