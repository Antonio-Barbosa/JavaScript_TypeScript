function random (min, max){
    const r = Math.random()* (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);


while (rand !== 10) {// checa a condição e depois executa
    rand = random (min, max)
    console.log(rand);
}

console.log('--------------------------------------------');

do{ // Executa primeiro e depois checa a condição
    rand = random (min, max)
    console.log(rand);
}while (rand !== 10) {
    
}


// const nome = 'Antonio Marcelo'

// let i = 0;

// while (i < nome.length){
//     console.log(nome[i]);
//     i++;
// }

// console.log('Segue a vida ....');