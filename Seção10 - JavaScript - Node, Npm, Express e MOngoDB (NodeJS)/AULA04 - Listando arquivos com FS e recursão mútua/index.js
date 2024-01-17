const fs = require('fs').promises
const path = require('path')

/*
O "fs" em Node.js se refere ao módulo "File System" (Sistema de Arquivos),
 que é uma parte integrante do ambiente Node.js. 
 Esse módulo fornece funcionalidades para interagir com o sistema de arquivos do sistema operacional 
 onde o Node.js está sendo executado.
*/

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname) // Se não receber o caminho pego do diretorio atual
    const files = await fs.readdir(rootDir)
    walk(files, rootDir);
}

async function walk(files, rootDir) {

    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file) //Faço o diretorio do arquivo
        const stats = await fs.stat(fileFullPath);

        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;


        if (stats.isDirectory()) { //Vejo se ele é um diretorio
            readdir(fileFullPath); // Se for um diretorio, entro nele e listo novamente
            continue;
        }

        if (
            !/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)
        ) continue;

        console.log(fileFullPath);
    }

}

readdir('C:/Users/Marcelo/OneDrive - Fatec Centro Paula Souza/Desktop/TypeScript e JavaScript/JavaScript_TypeScript')