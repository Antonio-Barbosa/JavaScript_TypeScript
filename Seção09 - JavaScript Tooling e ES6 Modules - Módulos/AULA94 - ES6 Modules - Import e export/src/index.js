
// Usando as consigo renomear o nome da variável
// O primeiro fora das chaves, são o padrão "Default", só posso ter um por modulo
import sobrenome, { nome2, soma, idade } from "./modulo1";
//Importo tudo que está sendo importado do meu pacote
import * as MeuModulo from "./modulo1"



console.log(nome2);
console.log(sobrenome);
console.log(soma(5, 10));