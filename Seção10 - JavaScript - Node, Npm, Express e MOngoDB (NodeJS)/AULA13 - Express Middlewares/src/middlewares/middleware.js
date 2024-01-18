exports.middlewareGlobal = (req, resp, next) => {
    console.log();
    //Consigo fazer middleware a parte de coisas especificas que vão acontecer no lado do cliente
    // Por exemplo, vai passar na middleware quando o cliente for enviado no form
    if (req.body.cliente) {
        console.log('Vi que vc postou' + ' ' + req.body.cliente);
    }
    console.log();
    next()
}