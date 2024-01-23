exports.middlewareGlobal = (req, resp, next) => {

    // Se eu quero injetar uma váriavel em todas as rotas, e mais fácil jogar em todas as rotas com locals, no meu middleware, do que ir uma por uma
    // Se criar um locals no homeController por exemplo, a váriavel só vai estar naquela rota
    resp.locals.umaVariavelLocal = 'Este é o valor da várival local.'
    next()
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