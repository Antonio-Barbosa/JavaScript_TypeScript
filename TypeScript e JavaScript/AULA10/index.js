/**
 * Aritméticos
 * adição/ concatenação (+)
 * subtração (-)
 * divisão (/)
 * multiplicação(*)
 * potenciação (**)
 * resto da divisão(%)
 */
const num1=10;
const num2=4;
const num3= 10;
console.log((num1+num2)*num3);
console.log(num1 % num2);


const passo=2;
let contador=0;
contador=contador+passo;
console.log(contador);
contador=contador+passo;
console.log(contador);

// ou
contador -= passo;
contador -= passo;
console.log(contador);

//NaN => Not a number
const num=10;
const string= "luiz";
console.log(num*string);

//converter string em numero
/**
 * parseInt(converte para inteiro)
 * parseFloat(converte pata decimais)
 * Number( converte para as duas formas)
 */
const num4=parseInt("5");
const num5=parseFloat("5.2");
const num6=Number("5.20", "5");


