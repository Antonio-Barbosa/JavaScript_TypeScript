import GeraSenha from "./Geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const qtqCaracteres = document.querySelector('.qtq-caracteres')
const chkMaiusculas = document.querySelector('.chk-maiusculas')
const chkMinusculas = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbulos = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gerar-senha')


export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    })
};

function gera() {
    const senha = GeraSenha(
        qtqCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbulos.checked
    )

    return senha || "Nada selecionado";
}