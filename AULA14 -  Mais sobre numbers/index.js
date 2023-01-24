//IEEE 754-2008
let num0=0.7;
let num=0.1;
 num0 += num;//0.8
 num0 += num;//0.9
 num0 += num;//1.0

//para conseguir arrendondar o número
 num0= parseFloat(num0.toFixed(2));
 num0= Number(num0.toFixed(2));
 console.log(num0);
 console.log(Number.isInteger(num0));



let num1= 10;
let num2=2.5;
//num1= num1.toString();
// console.log(num1.toString() + num2);
//console.log(num1.toString(16)); Consigo vê as vesões binárias hexadecimais etc;
// console.log(num1.toFixed(2)); Consigo falar quantas casas decimais quero que apareça.
// console.log(Number.isInteger(num1)); olhar se o numero é um inteiro


