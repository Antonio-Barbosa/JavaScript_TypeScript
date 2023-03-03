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

// esperaAi('Fase I', rand(0, 3))
// .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase II', rand(0, 3));
// })
// .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase III', rand (0, 3));
// })
// .then(valor => {
//     console.log(valor);
// })
// .catch(e => console.log(e));

async function executa() {
    try {
        const fase1 = await esperaAi('Fase I', rand(0, 3));
        console.log(fase1);
        const fase2 = await esperaAi(2, rand(0, 3)); // Linha do  erro, vai pro catch
        console.log(fase2);
        const fase3 = await esperaAi('Fase III', rand(0, 3));
        console.log(fase3);
    } catch (error) {
        console.log(error);
    }


}
executa();

/*
Promise tem 3 estados

Pending -> pendente
fullfilled -> resolvida
rejected -> rejeitada

*/
