var numeroColetado = document.getElementById("numeroAtual");
var numeroAtual = 0;

function incrementar(){
    numeroAtual ++;
    numeroColetado.innerHTML = numeroAtual;
}

function decrementar(){
    numeroAtual --;
    numeroColetado.innerHTML = numeroAtual;
}