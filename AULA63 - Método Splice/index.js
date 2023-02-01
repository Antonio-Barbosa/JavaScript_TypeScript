//               -5       -4       -3          -2        -1      
//                0        1        2           3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice atual, delete, elementos para adicionar todos separados por virgula EX: , elem1, elem2, .... )
// Simuler a função pop (remover o ultimo indice)
// Guarda os removidos em um array
const removidos = nomes.splice(-1, 1); // Removo os elementos
const adicionados = nomes.splice(3, 0, 'Antonio'); // Estou adicionando um novo elemento

// console.log(nomes, removidos);

// Simulando o shift
const removidos1 = nomes.splice(0, 1);
// console.log(nomes , removidos1);

// Adicionando varios elementos
nomes.splice(nomes.length, 0, 'Raquel', 'Joyce', 'Raimundo');
console.log(nomes);



