/*
Escreva uma função chamda ePaisagem
que receba dois arguemtnos, largura e altura
de uma imagem (number)
retorne true se a imagem estiver no modo paisagem.

*/

const ePaisagem = (largura, altura) =>{
    return largura > altura ? true : false;
}

console.log(ePaisagem(1080, 1920));