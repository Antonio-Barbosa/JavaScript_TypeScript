// Posso exportar na hora da criação (Funciona para funções, classes e variaveis)
export const nome = 'Antonio';
const sobrenome = "Miranda";
const idade = 30;


// Só posso ter um export default por módulo
 function soma(x, y) {
    return x + y;
}

// Posso renomear minha váriavel ou função no momento da exportação
// Posso exportar como default direto na importação em uma função expecifica 
export { nome as nome2, sobrenome as default, idade, soma };