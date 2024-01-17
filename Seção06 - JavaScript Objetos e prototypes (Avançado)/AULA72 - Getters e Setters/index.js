// Getters para obter aquele valor
// Setters para setar, configurar aquele determinado valor

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    //               This referece ao objeto 
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Faz ser exibido a chave
        configurable: true, // Posso apagar ou reconfigurar a chave
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if ( typeof valor !== 'number'){
                throw new TypeError ('Not string');
            }
            estoquePrivado = valor;
        }
    })    
}

const p1 = new Produto('Camisa', 20, 3);
console.log(p1);
p1.estoque = 'cnbyhwcd'
console.log(p1.estoque);