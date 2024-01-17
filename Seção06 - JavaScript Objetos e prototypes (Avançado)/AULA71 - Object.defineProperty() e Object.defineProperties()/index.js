// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;
    // this.estoque = estoque;
    //               This referece ao objeto 
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Faz ser exibido a chave
        value: estoque, // Faz o valor da chave ser exibido
        writable: false, // Diz se esse valor pode ou não ser alterado
        configurable: false // Posso apagar ou reconfigurar a chave
    })
    Object.defineProperties(this,{
        nome: {
            enumerable: true, // Faz ser exibido a chave
            value: nome, // Faz o valor da chave ser exibido
            writable: true, // Diz se esse valor pode ou não ser alterado
            configurable: false // Posso apagar ou reconfigurar a chave
        },
        preco:{
            enumerable: true, // Faz ser exibido a chave
            value: preco, // Faz o valor da chave ser exibido
            writable: true, // Diz se esse valor pode ou não ser alterado
            configurable: false // Posso apagar ou reconfigurar a chave
        }
    })
}

const p1 = new Produto('Camisa', 20, 3);
console.log(p1);
console.log(Object.keys(p1)); // Mostra as chaves do obj