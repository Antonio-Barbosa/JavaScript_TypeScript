const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//     titulo: 'Um titulo de teste',
//     descricao: 'Teste'
// }, { timeout: 20000 })
//     .then(dados => console.log(dados))
//     .catch(e => {
//         console.log('Erro ao criar documento:', e);
//         console.log(e.stack); // Adicionando o stack trace para mais detalhes
//     });

const novoDocumento = new HomeModel({
    titulo: 'Um titulo de teste 2',
    descricao: 'Teste'
});

novoDocumento.validate()
    .then(() => {
        return novoDocumento.save();
    })
    .then(dados => console.log(dados))
    .catch(e => console.log(e));



exports.paginaInicial = (req, resp) => {
    resp.render('index');
    return;
}

exports.trataPost = (req, resp) => {
    resp.send(req.body)
}