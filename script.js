let btnAdd = document.getElementById('criar-tarefa');
let textoDigitado = document.getElementById('texto-tarefa');
function adcionarNaLista(){

    let linha = document.createElement('li');
    if(textoDigitado.value !== ''){
        document.querySelector('ol').appendChild(linha);
        linha.innerText = textoDigitado.value;
        textoDigitado.value = '';
    }    
}

btnAdd.addEventListener('click', adcionarNaLista);