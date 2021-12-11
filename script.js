//Adcionar a lista
let textoDigitado = document.getElementById('texto-tarefa');
let btnAdd = document.getElementById('criar-tarefa');


function adcionarNaLista(){
    var linha = document.createElement('li');
    if(textoDigitado.value !== ''){
        document.querySelector('ol').appendChild(linha);
        linha.innerText = textoDigitado.value;
        textoDigitado.value = '';
        linha.addEventListener('click', selecionaItem);        
    };
    linha.classList.add('list-item');      
};
btnAdd.addEventListener('click', adcionarNaLista);

//Selecionar itens na lista
//
function selecionaItem(event){
    limparCor();
    event.target.style.backgroundColor = 'rgb(128,128,128)';;
}


function limparCor(){
    let limpa = document.querySelectorAll('.list-item');
    for(let i = 0; i < limpa.length; i+=1){
        limpa[i].style.backgroundColor = 'white';
    }
    
}