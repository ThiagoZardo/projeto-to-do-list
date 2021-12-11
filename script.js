//Adcionar a lista
let textoDigitado = document.getElementById('texto-tarefa');
let btnAdd = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let li = listaTarefas.childNodes;

function adcionarNaLista(){
    var linha = document.createElement('li');
    if(textoDigitado.value !== ''){
        listaTarefas.appendChild(linha);
        linha.innerText = textoDigitado.value;
        textoDigitado.value = '';
        linha.addEventListener('click', selecionaItem);
        linha.addEventListener('dblclick', riscar);     
    };
    linha.classList.add('itemLista');      
};
btnAdd.addEventListener('click', adcionarNaLista);


//Selecionar itens na lista
function selecionaItem(event){
    limparCor();
    event.target.style.backgroundColor = 'rgb(128,128,128)';;
}

function limparCor(){
    let limpa = document.querySelectorAll('.itemLista');
    for(let i = 0; i < limpa.length; i+=1){
        limpa[i].style.backgroundColor = 'white';
    }
}

//Tarefas Realizadas
function riscar(event){
    if(event.target.classList.contains('completed')){
        event.target.classList.remove('completed');
    }else{
        event.target.classList.add('completed');
    }
    //event.target.classList.toggle('completed');
}

//Limpa tudo
let btnApagar = document.getElementById('apaga-tudo');
btnApagar.addEventListener('click',apagar)

function apagar(){
    for(let i = li.length-1; i >= 0; i -= 1){
        li[i].remove();
    }
}
