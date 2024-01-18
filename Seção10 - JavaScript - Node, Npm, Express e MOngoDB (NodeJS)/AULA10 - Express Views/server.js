const express = require('express'); // Importo o express
const app = express(); // Inicializo ele
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({ extended: true })) // Fazendo isso, pego as informações enviadas pelo post
app.use(routes)

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Server rodando')
});


