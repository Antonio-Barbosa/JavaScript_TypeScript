const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const GeraMaiuscula = () => String.fromCharCode(rand(65, 91));
const GeraMinuscula = () => String.fromCharCode(rand(97, 123));
const GeraNumero = () => String.fromCharCode(rand(48, 58));
const simbulos = ',.;~^[]{}!@#$%*()_+-=';
const GeraSimbulo = () => simbulos[rand(0, simbulos.length)];


export default function GeraSenha(qtd, maiusculas, minusculas, numeros, simbulos) {

    const senhaArrays = [];
    qtd = Number(qtd)

    for (let i = 0; i < qtd; i++) {
        maiusculas && senhaArrays.push(GeraMaiuscula());
        minusculas && senhaArrays.push(GeraMinuscula());
        numeros && senhaArrays.push(GeraNumero());
        simbulos && senhaArrays.push(GeraSimbulo());
    }
    return senhaArrays.join('').slice(0, qtd)
}
