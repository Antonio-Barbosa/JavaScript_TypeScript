
const mongoose = require('mongoose');
const validator = require('validator')

const ContatoSchema = new mongoose.Schema({

    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now }

});

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.prototype.register = async function () {
    this.valida();

    if (this.errors.length > 0) return;

    this.contato = await ContatoModel.create(this.body);
}

Contato.prototype.valida = function () {

    this.cleanUp()
    // Validação
    // O email precisa ser válido
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido.');
    if (!this.body.nome) this.errors.push('O nome é um campo obrigatório.');
    if (!this.body.email && !this.body.telefone) this.errors.push('É preciso cadastrar pelo menos um contato.');

}

Contato.prototype.cleanUp = function () { // Vou garantir que tudo no meu body é uma string        

    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = {  // Garanto que meu obj tem paenas os campos que eu quero
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone
    };

}

Contato.prototype.edit = async function (id) {
    if (typeof id !== 'string') return;
    this.valida();
    if (this.errors.length > 0) return;

    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });

}

// Metodos estáticos
Contato.buscaPorId = async function (id) {
    if (typeof id !== 'string') return;
    const contato = await ContatoModel.findById(id);
    return contato;
}

Contato.buscaContatos = async function () {
    const contatos = await ContatoModel.find().sort({ criadoEm: -1 }); //Ordenalos em ordem decrescente, de acordo com a data de criação
    return contatos;
}

Contato.delete = async function (id) {
    if (typeof id !== 'string') return;
    const contato = await ContatoModel.findByIdAndDelete({ _id: id })
    return contato;
}

const ContatoModel = mongoose.model('Contato', ContatoSchema);

module.exports = Contato;