function listaDeTarefas(){
    const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

//Função cujo a finalidade e criar os elementos da lista
function criaLi() {
    const li = document.createElement('li');
    return li;
}

// Função feita para limpar o input e voltar o curso após a tarefa ser criada
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

//Função feita para criar botão de apagar para cada serviço(li).
function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar);
}

// Função cuja unico trabalho e adicionar os elementos criados na função criaLi na lista (ul)
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li)
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

//Função feita para salvar as tarefas 
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

// Reconhecento a teclar enter e criando a tarefa
inputTarefa.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        if (!inputTarefa.value) {
            return alert('Não tem tarefa a ser adicionada.')
        }
        criaTarefa(inputTarefa.value)
    }
})

//Enviando a tarefa quando clicado no btn
btnTarefa.addEventListener('click', function (event) {
    if (!inputTarefa.value) {
        return alert('Não tem tarefa a ser adicionada.')
    }
    criaTarefa(inputTarefa.value)
});

//Apaganto tarefa após ser adicionada
document.addEventListener('click', function (event) {
    const el = event.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

//Função que vai lê as tarefas salvas e vai jogar devolta na web
function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
};
adicionaTarefasSalvas();
}

listaDeTarefas();

