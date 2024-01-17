//Quando uma função está dentro de um obj, chamamos ela de método.
// A palavra this se refere a quem chamar o obj.

//Isso é uma factory function (Função fábrica)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function (assunto) {
            return `${nome} está ${assunto} ${this.peso}`// Como peso está fora da função fala, preciso usar o this.
        },
        altura: altura,
        peso: peso,
        //Getter
        get imc() { // Ao por get, imc deixa de ser usado como função, agora uso como atributo.
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
const p2 = criaPessoa('Antonio', 'Marcelo', 1.8, 90);
p1.nomeCompleto = 'Antonio Marcelo Brito Barbosa'
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);



// console.log(p1.fala('Flanto sobre js'), `Seu IMC é ${p1.imc()}`);
// console.log(p2.fala('Flanto sobre js'), `Seu IMC é ${p2.imc}`); // Não uso parenteses no imc.
