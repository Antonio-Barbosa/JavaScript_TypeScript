exports.middlewareGlobal = (req, resp, next) => {

    resp.locals.errors = req.flash('errors')
    resp.locals.success = req.flash('success')
    resp.locals.user = req.session.user;
    next();

}

exports.checkCsrfError = (err, req, resp, next) => {
    if (err) {
        return resp.render('404');
    }
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.loginRequired = (req, resp, next) => {

    if (!req.session.user) {
        req.flash('errors', 'Você presisa fazer login.');
        req.session.save(() => {
            resp.redirect('/');
        })
        return;
    };

    next();
}