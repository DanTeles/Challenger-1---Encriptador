/*
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

var input1 = document.querySelector('#encriptador');

var botao_encriptar = document.querySelector('#botao1');

var resultado = document.querySelector('#resultado');

var form = document.querySelector('.formulario');

botao_encriptar.addEventListener('click', function(event){
    event.preventDefault();

    resultado.textContent = encriptar(input1.value);

    form.reset();
})

copiar();


function encriptar(texto_input1) {
    var texto_input1 = input1.value.toLowerCase();

    var cripto = texto_input1.replace(/e/g, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    return cripto;
}

function copiar(){
    document.getElementById('copiar').addEventListener('click', function(){
        document.getElementById('resultado').select();
        document.execCommand('copy');

        form.reset();
    })
}

