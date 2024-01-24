const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs') // Usado para fazer um hash na senha do usuário

const LoginSchema = new mongoose.Schema({

    email: { type: String, required: true },
    senha: { type: String, required: true }

});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {

    constructor(body) {
        this.body = body; // Pego os dados vindo do body na página de login
        this.errors = [];
        this.user = null
    }

    async register() {
        this.valida();
        if (this.errors.length > 0) return;

        await this.userExists();

        if (this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync(); // Gero meu salt
        this.body.senha = bcryptjs.hashSync(this.body.senha, salt); // Faço um hash da minha senha

        try {
            this.user = await LoginModel.create(this.body);

        } catch (e) {
            console.log(e);
        }

    }

    async userExists() {
     const user = await LoginModel.findOne({email: this.body.email}); 
     if(user) this.errors.push('Usuário já existe.')
    }
    
    valida() {

        this.cleanUp()
        // Validação
        // O email precisa ser válido
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido.')
        // A senha precisa ter entre 3 e 50 caracteres
        if (this.body.senha.length < 3 || this.body.senha.length >= 50) this.errors.push('A senha precisa ter entre 3 e 50 caracteres.')

    }

    cleanUp() { // Vou garantir que tudo no meu body é uma string        

        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {  // Garanto que meu obj tem paenas os campos que eu quero
            email: this.body.email,
            senha: this.body.senha
        };
    }


}

module.exports = Login;
