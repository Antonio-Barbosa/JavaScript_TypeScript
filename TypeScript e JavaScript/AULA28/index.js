
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix

// const data = new Date(2019, 3, 20, 15, 14, 27, 1000);

// const data = new Date('2020-04-20 20:20:20')

// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Mili Segundo', data.getMilliseconds());
// console.log('Dia da Semana', data.getDay());
// console.log(data.toString());

function zeroAEsquerda(num) {

    return num >= 10 ? num : `0${num}`

}

function formataData(data) {

    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);