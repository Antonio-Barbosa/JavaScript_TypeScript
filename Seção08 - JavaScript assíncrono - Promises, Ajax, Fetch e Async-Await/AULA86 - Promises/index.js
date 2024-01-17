function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE')


        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });

}

esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Eitaaaa', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return resposta + ' Vai para o outro THEN'
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('ERRO', e);
    });


console.log('Isso vai ser exibido primeiro, por que as Promise são executadas em paralelo');
