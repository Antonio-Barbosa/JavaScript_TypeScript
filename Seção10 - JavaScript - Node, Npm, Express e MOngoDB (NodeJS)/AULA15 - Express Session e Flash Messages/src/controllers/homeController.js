const HomeModel = require('../models/HomeModel')

exports.paginaInicial = (req, resp) => {

    // Um exemplo de como posso salvar informações ma session
    // Para acessar estas informações só preciso usar req.session.usuario
    //req.session.usuario = {nome: 'luiz', logado: true}

    // Primeiro parametro é por onde eu acesso, e o segundo é a mensagem
    // OBS: Após essas mengagens serem exibidas, elas sumiram
    // req.flash('info',"Ola mundo!")
    // req.flash('error',"Erro")
    // req.flash('sucsses',"Deu bom")

    //Para acessar minhas mensagens
    console.log(req.flash('error'), req.flash('sucsses'))

    resp.render('index');
    return;
}

exports.trataPost = (req, resp) => {
    resp.send(req.body)
}