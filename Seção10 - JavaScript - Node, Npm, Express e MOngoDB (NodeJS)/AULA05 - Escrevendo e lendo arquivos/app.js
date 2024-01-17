const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require("./modules/escreve")
const ler = require("./modules/ler");


//                PARA ESCREVER ARQUIVOS

// Para escrever arquivos usando fs, passo o caminho do arquivo, o conteúdoe por 
// fim com flag: 'w' eu apago tudo que tem dentro do arquivo caso ele ja exista, e o encoding e o padrão
// Com a flag: 'a' vou fazendo um append

//escrevendo arquivos como txt OBS: Mudo a extenção do arquivo

//const caminhoArquivo = path.resolve(__dirname,"..", 'teste.txt');
//fs.writeFile(caminhoArquivo,'Frase 2\n', {flag: 'a', encoding: 'utf-8'})

// escrevendo arquivos como json OBS: Mudo a extenção do arquivo

//Consigo tambem salvar arquivos como json
// const pessoas = [
//     { nome: 'João' },
//     { nome: 'Maria' },
//     { nome: 'Eduardo' },
//     { nome: 'Marcelo' },
//     { nome: 'Raquel' },
//     { nome: 'Davi' },

// ]

// transformo meu obj em json
// const json = JSON.stringify(pessoas, '', 2);

// escreve(caminhoArquivo,json)


//                  LER O ARQUIVO

async function leArquivo(caminho) {
    const data = await ler(caminho);
    renderizaDados(data)
}

function renderizaDados(dados) {
    dados = JSON.parse(dados); // Faço um json voltar a ser um obj
    dados.forEach(element => {
        console.log(element.nome)
    });
}

leArquivo(caminhoArquivo);

