// setInterval vai configurar um intervalo de tempo para que alguma função seja executada.

function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
console.log(mostraHora());


const timer = setInterval(() => {
    console.log(mostraHora());
}, 1000) // Passo o nome da função e depois o tempo do intervalo em milisegundos.

setTimeout(() => {
    clearInterval(timer);
}, 10000); // Só executa uma vez

setTimeout(() => {
    console.log('Olá mundo!');
}, 11000);