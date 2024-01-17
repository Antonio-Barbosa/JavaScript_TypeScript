const fs = require('fs').promises

//Para ler o arquivo, passo o caminho dele e o padrão no caso do exemplo utf-8

module.exports = (caminho) => fs.readFile(caminho, 'utf-8')
