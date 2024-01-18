const express = require('express'); // Importo o express
const app = express(); // Inicializo ele
const routes = require('./routes')

app.use(express.urlencoded({extended:true})) // Fazendo isso, pego as informações enviadas pelo post
app.use(routes)


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Server rodando')
});


