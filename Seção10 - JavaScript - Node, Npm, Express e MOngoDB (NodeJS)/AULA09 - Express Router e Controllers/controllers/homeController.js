
exports.paginaInicial = (req, resp) => {
    resp.send(`
        <form action="/" method = "POST">
            Nome: <input type= "text" name="nome">
            <button>Enviar formulario</button>
        </form>
    `);
}

exports.trataPost = (req, resp) => {
    resp.send('Ei, sou sua nova rota de post.')
}