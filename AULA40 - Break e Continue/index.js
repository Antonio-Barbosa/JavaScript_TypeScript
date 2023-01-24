const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Continue continua para a proxima interação
//Break para a intereção

for (let numero of numeros) {

    if (numero === 2 || numero === 5) {
        console.log('Pulei ...');
        continue;
    }

    if (numero === 7) {
        console.log('Parei!!');
        break;
    }

    console.log(numero);

}