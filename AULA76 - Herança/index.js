// Produto -> aumento, desconto
// Camisate, caneca

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // Fazendo isso eu linkei as funções.
    this.cor = cor;
};
Camiseta.prototype = Object.create(Produto.prototype); //Passei o prototype do produto para Camiseta
Camiseta.prototype.constructor = Camiseta; // Refenrencio minha função construtora para Camiseta, antes estava referenciado para Produto

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor
        }
    });
};

const camiseta = new Camiseta('Regata', 10, 'preta');
const caneca = new Caneca('Caneca', 20, 'Porcelana', 10);

caneca.estoque = 100
console.log(caneca, caneca.estoque);
// camiseta.aumento(10);
// console.log(camiseta);

