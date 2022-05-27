// Adcionar a lista
const textoDigitado = document.getElementById('texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const li = listaTarefas.childNodes;
const limpa = document.querySelector('#remover-finalizados');
const removeSelect = document.getElementById('remover-selecionado');

function adcionarNaLista() {
  const linha = document.createElement('li');
  if (textoDigitado.value !== '') {
    listaTarefas.appendChild(linha);
    linha.innerText = textoDigitado.value;
    textoDigitado.value = '';
    linha.addEventListener('click', selecionaItem);
    linha.addEventListener('dblclick', riscar);
  }
  linha.classList.add('itemLista');
}
btnAdd.addEventListener('click', adcionarNaLista);

// Selecionar itens na lista
function selecionaItem(event) {
  limparCor();
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.classList.add('select');
}

function limparCor() {
  const limpa = document.querySelectorAll('.itemLista');
  for (let i = 0; i < limpa.length; i += 1) {
    limpa[i].style.backgroundColor = 'white';
    limpa[i].classList.remove('select');
  }
}

// Tarefas Realizadas
// Recebi a ajuda da Luá na para entender melhor como funcionam os métodos do classList
function riscar(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
  // event.target.classList.toggle('completed');
}

// Limpa tudo
// Luá e Imar me ajudaram aqui a entender como funciona o for de trás pra frente
const btnApagar = document.getElementById('apaga-tudo');
btnApagar.addEventListener('click', apagar);

function apagar() {
  for (let i = li.length - 1; i >= 0; i -= 1) {
    li[i].remove();
  }
  localStorage.removeItem('listaDeTarefas', listaTarefas.innerHTML);
}

limpa.addEventListener('click', removeFinalizado);
// Remove os Finalizados

function removeFinalizado() {
  const riscados = document.querySelectorAll('.completed');
  for (let i = 0; i < riscados.length; i += 1) {
    riscados[i].remove();
  }
}

// Salvar Tarefas
// Ajustar edição de elementos salvos no localStorage
const salvar = document.getElementById('salvar-tarefas');
salvar.addEventListener('click', salvarTarefas);

function salvarTarefas() {
  localStorage.setItem('listaDeTarefas', listaTarefas.innerHTML);
}

window.onload = function () {
  listaTarefas.innerHTML = localStorage.getItem('listaDeTarefas');
  for (let i = 0; i < listaTarefas.childNodes.length; i += 1) {
    listaTarefas.childNodes[i].addEventListener('click', selecionaItem);
    listaTarefas.childNodes[i].addEventListener('dblclick', riscar);
  }
};

// Move para Cima
// Recebi ajuda da Sheila Nakashima que me apresentou o funcionamento do after e before
const cima = document.querySelector('#mover-cima');
cima.addEventListener('click', moverCima);

function moverCima() {
  for (let i = 1; i < li.length; i += 1) {
    if (li[i].classList.contains('select')) {
      li[i].after(li[i - 1]);
    }
  }
}

// Move para Baixo
const baixo = document.querySelector('#mover-baixo');
baixo.addEventListener('click', moverBaixo);

function moverBaixo() {
  for (let i = li.length - 2; i >= 0; i -= 1) {
    if (li[i].classList.contains('select')) {
      li[i].before(li[i + 1]);
    }
  }
}

// Remove selecionado
removeSelect.addEventListener('click', removeSelecao);

function removeSelecao() {
  const selecionado = document.querySelector('.select');
  selecionado.remove();
}
