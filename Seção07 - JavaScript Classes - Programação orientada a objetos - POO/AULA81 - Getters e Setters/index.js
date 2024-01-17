const _velocidade = Symbol('velocidade') // Fazendo isso protejo meu valor, deixo ela privada

class Carro {
    constructor(nome, [_velocidade]) {
        this.nome = nome;
        this[_velocidade] = 0; // Passo entre colchetes
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for (let i = 0; i < +200; i++) {
    c1.acelerar();
}
console.log(c1);
