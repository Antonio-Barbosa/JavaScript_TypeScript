
exports.paginaInicial = (req, resp) => {
    resp.send(resp.render('index'));
}

exports.trataPost = (req, resp) => {
    resp.send('Ei, sou sua nova rota de post.')
}