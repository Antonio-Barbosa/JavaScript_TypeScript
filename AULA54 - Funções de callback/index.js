//Com a função callback, crio uma ordem de execução das funções


function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num)
}

function f1(callback) { // Paaso o parâmetro de callback na função
    setTimeout(function () {
        console.log('f1');
        if (callback) callback(); // Faço um if passando callback
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, rand());
}
function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

//Crei uma ordem de execução callbackHell (Inferno do callback)

f1(function () { // Crio a função callback , e passo a próxima função a ser executada como argumento.
    f2(function () {
        f3(function () {
            console.log('Ola mundo');
        });
    });
});


