const Login = require('../models/LoginModel')

exports.index = (req, resp) => {
    resp.render('login')
    return;
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
        return res.render('404');
    }


}
