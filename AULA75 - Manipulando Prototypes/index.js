// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype
};

// new Object -> Object.prototype
const objB = {
    chaveB: 'B'
    //__proto__: objA
};
const objC = {
    chaveC: 'C'
    //__proto__: objB
};


// Consigo adicionar prototypes nos meu objetos, no caso objB recebe ObjA como proto
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

// Agora consigo acessar as chaves de onjA, pelo objB

// console.log(objB.chaveA);
// console.log(objC.chaveA);
// console.log(objA.chaveC);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
    // Agora crio meus metódos usando prototype
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camisa', 50);
p1.desconto(10)
p1.aumento(20)

const p2 = {
    nome: 'Caneca',
    preco: 15
};
// Para reaproveitar as funções criadas no Produto
Object.setPrototypeOf(p2, Produto.prototype)
p2.desconto(10)
p2.aumento(20)

console.log(p1);
console.log(p2);

const valor = 100;
// Já crio o obj com o prototype de Produto, se quiser posso configurar as chaves
const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
        preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: valor
    }
});
p3.aumento(10)
console.log(p3);
