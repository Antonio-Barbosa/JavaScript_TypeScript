const express = require('express'); // Importo o express
const app = express(); // Inicializo ele


// Na web trabalhamos com requisição e resposta, ou seja o cliente faz a requisição e o servidor responde

app.get('/', (req, resp) => {
    resp.send(`
        <form action="/" method = "POST">
            Nome: <input type= "text" name="nome">
            <button>Enviar formulario</button>
        </form>
    `);
});

app.post('/',(req, resp) => {
    resp.send('Recebi o formulário!')
});


app.get('/contato',(req, resp) => {
    resp.send('Obrigado por entrar em contato com a gente.')
})

// Falo a porta que o express deve ouvir
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Server rodando')
});


