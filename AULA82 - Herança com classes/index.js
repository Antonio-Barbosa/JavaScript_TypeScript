

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado!`);
            return;
        }

        this.ligado = true;
    }
    desligar() {
        if (!this.ligado) { // Diferente de ligado
            console.log(`${this.nome} já está desligado!`);
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico { // Só de fazer essa linha, essa classe já contem tudo da classe DispositivoEletronico
    constructor(nome, cor, modelo) {
        super(nome); // Uso a palavra super(), chamando a super classe;
        this.cor = cor;
        this.modelo = modelo;
    }

}

class Tablete extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Você alterou o método ligar');
    }

}
const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S');
console.log(s1);

const t1 = new Tablete('iPad', true);
t1.ligar() // Como criei o método ligar dentro da classe Tabelte, ele subscreve o método ligar
console.log(t1);

