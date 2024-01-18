
exports.paginaInicial = (req, resp) => {   
    resp.render('index');
    return;
}

exports.trataPost = (req, resp) => {
    resp.send(req.body)
}