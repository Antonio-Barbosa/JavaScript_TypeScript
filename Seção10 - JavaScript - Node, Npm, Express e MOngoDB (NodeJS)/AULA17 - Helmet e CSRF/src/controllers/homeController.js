const HomeModel = require('../models/HomeModel')

exports.paginaInicial = (req, resp) => {

    //Aqui um exemplo de como posso injetar informações para meu front.
    // OBS: vá para o index.ejs para vê como pego as informações por la
    resp.render('index', {
        titulo: 'Este sera o titulo da págima',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
}

exports.trataPost = (req, resp) => {
    resp.send(req.body)
}