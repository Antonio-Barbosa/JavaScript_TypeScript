
const path = require('path'); // CommonJS

// Preciso exportar para conseguir usalo

module.exports = { 

  //Modos que estou usando, tenho duas opções "development ou production"
  mode: 'production',
  //Arquivo de entrada
  entry: './src/index.js',
  // Passo o caminho de onde quero ser criado o bundle.js
  output: {
    //Caminho
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    // Nome do arquivo a ser criado
    filename: 'bundle.js'
  },

  //Usando o babel
  module: {
    // Passo as regras a serem usadas
    rules: [{
      // Tiro oq não quero, ou seja, oq o webpack não leia
      exclude: /node_modules/,
      //Qual o arquivo que vai ser analisado, e feito o arquivo bundle a partir deste
      test: /\.js$/,
      // Qual dependencia será usada
      use: {
        // Usando babel-loader
        loader: 'babel-loader',
        options: {
          // Qual presets
          presets: ['@babel/env']
        }
      }
    }]
  },
  // Faz um mapeamento (Mapea os erros nos arquivos originais, não no bundle)
  devtool: 'source-map'
};
