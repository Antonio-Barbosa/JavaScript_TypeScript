import validator from 'validator'

export default class Login {

    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]')
        const senhaInput = el.querySelector('input[name="senha"]')

        let error = false;

        // Validação
        // O email precisa ser válido e senha
        if (!validator.isEmail(emailInput.value) || senhaInput.value.length < 3 || senhaInput.value.length >= 50){
            alert('Email inválido e senha precisa ter entre 3 e 50 caracteres. ');
            error = true
        }

       

        if(!error) el.submit();

    }
}