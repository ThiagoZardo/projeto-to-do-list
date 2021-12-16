//Adcionar a lista
let textoDigitado = document.getElementById('texto-tarefa');
let btnAdd = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let li = listaTarefas.childNodes;
let limpa = document.querySelector('#remover-finalizados');
let removeSelect = document.getElementById('remover-selecionado') ;



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
    event.target.style.backgroundColor = 'rgb(128,128,128)';
    event.target.classList.add('select')
}

function limparCor(){
    let limpa = document.querySelectorAll('.itemLista');
    for(let i = 0; i < limpa.length; i+=1){
        limpa[i].style.backgroundColor = 'white';
        limpa[i].classList.remove('select');
    }
}

//Tarefas Realizadas
//Recebi a ajuda da Luá na para entender melhor como funcionam os métodos do classList
function riscar(event){
    if(event.target.classList.contains('completed')){
        event.target.classList.remove('completed');
    }else{
        event.target.classList.add('completed');
    }
    //event.target.classList.toggle('completed');
}

//Limpa tudo
//Luá e Imar me ajudaram aqui a entender como funciona o for de trás pra frente
let btnApagar = document.getElementById('apaga-tudo');
btnApagar.addEventListener('click',apagar)

function apagar(){
    for(let i = li.length-1; i >= 0; i -= 1){
        li[i].remove();
    }
    localStorage.removeItem('listaDeTarefas', listaTarefas.innerHTML);
}


limpa.addEventListener('click',removeFinalizado);
//Remove os Finalizados

function removeFinalizado(){
    let riscados = document.querySelectorAll('.completed')
    for(let i = 0; i < riscados.length; i += 1){
        riscados[i].remove();
    }
}


//Salvar Tarefas
//Ajustar edição de elementos salvos no localStorage
let salvar = document.getElementById('salvar-tarefas');
salvar.addEventListener('click', salvarTarefas);

function salvarTarefas(){
    localStorage.setItem('listaDeTarefas', listaTarefas.innerHTML);
}

window.onload = function(){
    listaTarefas.innerHTML = localStorage.getItem('listaDeTarefas');
    for(let i = 0; i < listaTarefas.childNodes.length; i+=1){
        listaTarefas.childNodes[i].addEventListener('click', selecionaItem);
        listaTarefas.childNodes[i].addEventListener('dblclick', riscar);
    }
}


//Move para Cima e para Baixo em construção
let cima = document.querySelector('#mover-cima');
cima.addEventListener('click',moverCima);
let moveUp = document.querySelector('.itemLista');

function moverCima(event){
    
    for(let i = 0; i < document.querySelector('.itemLista').length; i+=1){
        moveUp[i].previousElementSibling;
    }
}




//Remove selecionado
removeSelect.addEventListener('click', removeSelecao);

function removeSelecao(){
        
    let selecionado = document.querySelector('.select')
    selecionado.remove();
     
}



















