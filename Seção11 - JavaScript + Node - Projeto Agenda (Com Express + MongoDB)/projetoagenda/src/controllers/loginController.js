const Login = require('../models/LoginModel')

exports.index = (req, resp) => {

    if(req.session.user) return resp.render('login-logado')
    return resp.render('login');
};

exports.register = async (req, resp) => {

    try {
        const login = new Login(req.body); // Ao passar req.body, ja instancio meu body para dentro da classe    
        await login.register();

        if (login.errors.length > 0) {

            req.flash('errors', login.errors); // Verifico se tem algum erro
            req.session.save(function () { // Se tiver, salvo a sessão e volto
                return resp.redirect('back')
            });
            return;

        }

        req.flash('success', 'Usuário criado com sucesso.');
        req.session.save(function () {
            return resp.redirect('back')
        });
    } catch (error) {
        console.log(error);
        return resp.render('404');
    }

}

exports.login = async (req, resp) => {

    try {
        const login = new Login(req.body); // Ao passar req.body, ja instancio meu body para dentro da classe    
        await login.Login();

        if (login.errors.length > 0) {

            req.flash('errors', login.errors); // Verifico se tem algum erro
            req.session.save(function () { // Se tiver, salvo a sessão e volto
                return resp.redirect('back')
            });
            return;

        }

        req.flash('success', 'Usuário logado com sucesso.');
        req.session.user = login.user;
        req.session.save(function () {
            return resp.redirect('back')
        });
    } catch (error) {
        console.log(error);
        return resp.render('404');
    }

}

exports.logout = (req, resp) => {
    req.session.destroy();
    resp.redirect('/');
}

