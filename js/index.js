function eventoClick() {
    alert("Acionou um evento de click!")
    document.body.style.backgroundColor = "yellow";
}

function eventoDblClick() {
    alert("Evento de clique dublo");
}

function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

function mudou() {
    console.log("mudoou");
}

function teclaPressionada() {
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}