
const alunos=['Maria','João','Luiz','Jorge','Raquel'];

console.log(alunos.length);

alunos.push('Otavio') // Adiciona no fim
alunos.unshift('Antonio')// Adiciona no começo
alunos.pop(); //remove do final
const removido = alunos.pop(); // Salvo os removidos em uma variável
alunos.shift(); // Remove o primeiro elemento
delete alunos[1]; // Deleto o aluno sem deletar seu indice, ou seja fica um lugar vazio
console.log(alunos.slice(0 , 3)); // Pego uma fatia do array
console.log(alunos.slice(0 , -1)); // Pego uma fatia do array




console.log(alunos);
console.log(`Removido:  ${removido}`);

alunos.forEach(aluno =>{
    console.log(aluno);    
});

