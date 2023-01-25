
function relogio() {
    const relogio = document.querySelector('.relogio');
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000); // Multiplico por 1000 por que o js recebe em milisegundos
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC' // Zero a hora criada pelo Date
        });
    }

    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos)
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const elemento = e.target;
        console.log(elemento);
        if (elemento.classList.contains('zerar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'
            segundos = 0;
        }

        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            iniciaRelogio()
        }

        if (elemento.classList.contains('pausar')) {
            relogio.classList.add('pausado')
            clearInterval(timer)
        }
    })
}

relogio();

// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');

// iniciar.addEventListener('click', function (event) {
//     relogio.classList.remove('pausado')
//     clearInterval(timer)
//     iniciaRelogio()
// })
// pausar.addEventListener('click', function (event) {
//     relogio.classList.add('pausado')
//     clearInterval(timer)
// })
// zerar.addEventListener('click', function (event) {
//     relogio.classList.remove('pausado')
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00'
//     segundos = 0;
// })