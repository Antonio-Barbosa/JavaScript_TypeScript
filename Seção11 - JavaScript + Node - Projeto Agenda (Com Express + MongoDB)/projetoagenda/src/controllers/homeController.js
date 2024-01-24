const Contato = require('../models/ContatoModel')

exports.index = async (req, resp) => {

    const contatos = await Contato.buscaContatos();
    return resp.render('index', { contatos })
}

