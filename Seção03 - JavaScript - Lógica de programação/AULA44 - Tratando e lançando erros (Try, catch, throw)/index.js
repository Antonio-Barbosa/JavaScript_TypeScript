function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números!!'); // Lançando o erro
    }
    return x + y
}

try { // Capturando o erro , se acontecer algo de errado aqui
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (err) { // O erro e capturado aqui.
    // console.log(err);
    console.log('Algo mais amigável para o usuário.');
}
// try {
//     console.log(naoExisto);
// } catch (err) {
//     console.log('Essa váriavel não existe.');
// }