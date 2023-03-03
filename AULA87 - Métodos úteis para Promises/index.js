function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('BAD VALUE');
            return;
        }
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}
// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 2', 1000)
];

Promise.all(promises) // Espera todas as promises serem resolvidas para depois me dar o retorno
.then((valor) => {
    console.log(valor);
})
.catch(e => {
    console.log(e);
})

Promise.race(promises) // Race sempre entrega o primeiro valor
.then((valor) => {
    console.log(valor);
})
.catch(e => {
    console.log(e);
})

function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Página em cache'); // Se por resolve ele vai ir pro then, se por reject vai pro catch
    } else {
        return esperaAi('Baixei a página', 3000);
    }

}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e))
