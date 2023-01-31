// Valor por referencia, ou seja, se atribuir um array a uma nome variável, oq for modificada em uma reflete na outra

//                 0           1          2        3
const nomes = ['Antonio', 'Marcelo', 'Raquel', 'Silva'];
const novo = nomes
const novo2 = [...nomes] // Estou cópiando tudo de um Array para um novo endereço na memória, agora ambos são arrays independentes (spread operator)
nomes[2] = 'João';
delete nomes[0]; // Deleto um nome sem mexer no indice, ou seja deixo um espaço vazio no array
novo.push('Danilo')
novo2.push('Raimundo')// Adiciono no final do array
console.log(nomes);
console.log(novo);
console.log(novo2);
console.log(nomes.length); // Vejo o tamanho do array
const removidos = nomes.pop();// Removo o ultimo elemento do Array,  e posso guardar os nomes removidos em uma variável
console.log(removidos);
const removidos2 = novo2.shift();// Removo o primeiro elemento do Array,  e posso guardar os nomes removidos em uma variável
console.log(removidos2);
nomes.unshift('Qualquer') // Adiciona no começo do array, porém perdemos perfomance em arreays grandes, pois preciso deslocar os elementos para direita
const novo3 = novo2.slice(1, 3) // Fatio meu array, ponho o indice que quero começar e onde desejo parar +1, ou seja, quero parar no indice 4, ponho 5.


const nome = 'Antonio Marcelo Brito Barbosa'
const nomes2 = nome.split(' ') // Separo meu array por algum caracter, aqui está sendo por espaço , transformando em um array
console.log(nomes2);
const nome1 = nomes2.join(' ');// Tranformo um array em uma string, dentro do parenteses ponho o separador da string, no caso um espaço
console.log(nome1);
// Funciona para strings, Objetos, Funções, Números
// const nomes = new Array ('Antonio', 'Marcelo', 'Raquel', 'Silva');