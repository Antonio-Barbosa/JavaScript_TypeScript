import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function(){
    const gera = new GeraCPF()
    const cpfgerado = document.querySelector('.cpf-gerado');
    cpfgerado.innerHTML = gera.geraNovoCPF();
})();