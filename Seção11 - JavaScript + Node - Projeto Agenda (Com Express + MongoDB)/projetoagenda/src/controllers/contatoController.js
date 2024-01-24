const { async } = require('regenerator-runtime');
const Contato = require('../models/ContatoModel')

exports.index = (req, resp) => {

    resp.render('contato', {
        contato: {}
    });

}

exports.register = async (req, resp) => {

    try {

        const contato = new Contato(req.body);
        await contato.register();

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => resp.redirect('back'))
            return;
        }

        req.flash('success', 'Contato registrado com sucesso.');
        req.session.save(() => resp.redirect(`/contato/index/${contato.contato._id}`))
        return;

    } catch (error) {

        console.log(error);
        return resp.render('404');

    }

}

exports.editIndex = async (req, resp) => {

    if (!req.params.id) return resp.render('404');
    const contato = await Contato.buscaPorId(req.params.id);
    if (!contato) return resp.render('404');
    resp.render('contato', { contato });

}

exports.edit = async (req, resp) => {

    try {
        if (!req.params.id) return resp.render('404');
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => resp.redirect('back'))
            return;
        }

        req.flash('success', 'Contato editado com sucesso.');
        req.session.save(() => resp.redirect(`/contato/index/${contato.contato._id}`))
        return;

    } catch (error) {
        console.log(error);
        return resp.render('404');
    }
}

exports.delete = async (req, resp) => {

    if (!req.params.id) return resp.render('404');
    const contato = await Contato.delete(req.params.id);
    if (!contato) return resp.render('404');

    req.flash('success', 'Contato apagado com sucesso.');
    req.session.save(() => resp.redirect('back'))
    return;
    
};