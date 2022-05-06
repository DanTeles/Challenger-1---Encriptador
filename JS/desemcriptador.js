var botao_desencriptar = document.querySelector('#botao2');

var input2 = document.querySelector('#desencriptador');

botao_desencriptar.addEventListener('click', function(event){
    event.preventDefault();

    resultado.textContent = desencriptar(input1.value);

    form.reset();
})

function desencriptar(texto_input2) {
    var texto_input2 = input2.value;

    var descripto = texto_input2.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    return descripto;
}
