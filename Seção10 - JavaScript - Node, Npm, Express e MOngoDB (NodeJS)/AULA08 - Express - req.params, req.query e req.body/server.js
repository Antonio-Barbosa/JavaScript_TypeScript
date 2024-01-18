const express = require('express'); // Importo o express
const app = express(); // Inicializo ele

app.use(express.urlencoded({extended:true})) // Fazendo isso, pego as informações enviadas pelo post

app.get('/', (req, resp) => {
    resp.send(`
        <form action="/" method = "POST">
            Nome: <input type= "text" name="nome">
            <button>Enviar formulario</button>
        </form>
    `);
});

// Para pegar algum parametro pela rota, colo : e o nome do parametro, por exemplo id
// Se eu por uma interrogação depois do parametro, indica que essa rota pode ou não receber um parametro
// Posso por mais de um parametro na rota, so por / e o prossimo parametro

app.get('/testes/:id?', (req, resp) => {
    console.log(req.params); // req.params pego os parametros mandados na url

/* 
Posso mandar querys pela url tbm, depois da / coloco uma interrogação para a primeira
de pois usando & para separar as proximas querys.

EX: localhosto/teste/?nome=Antonio&Sobrenome=Marcelo
*/ 
    console.log(req.query ); // Aqui consilgo logar as querys
    resp.send(req.params.id)
})

app.post('/',(req, resp) => {

    console.log(req.body); // Quando envio o formulário, todas as informações vem pelo body

    // Esse body.nome foi é o nome dado ao input
    resp.send(`O que vc me enviou foi: ${req.body.nome}`)
});


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Server rodando')
});


