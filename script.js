//Adcionar a lista
let btnAdd = document.getElementById('criar-tarefa');
let textoDigitado = document.getElementById('texto-tarefa');
function adcionarNaLista(){
    let linha = document.createElement('li');
    if(textoDigitado.value !== ''){
        document.querySelector('ol').appendChild(linha);
        linha.innerText = textoDigitado.value;
        textoDigitado.value = '';
        linha.addEventListener('click', selecionaItem);
    }      
}
btnAdd.addEventListener('click', adcionarNaLista);


//Selecionar itens na lista
   
function selecionaItem(event){
    event.target.style.backgroundColor = 'rgb(128,128,128)';
}    


