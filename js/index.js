function ativarContagem() {
    //document.getElementById('tempo').innerHTML = "Começou a contar!"

    //Ativa a função apenas umavez quando der o tempo especificado!
    //tempo = setTimeout(function () {
    //    document.getElementById("tempo").innerHTML = "Executou o setTimeout";
    // }, 5000);

    tempo = setInterval(function () {
        let cronometro = document.getElementById('tempo').innerHTML;
        let soma = parseInt(cronometro) - 1;

        if (soma === 0) {
            document.getElementById('tempo').innerHTML = "Tempo esgotado";
            pararContagem;
        } else {
            document.getElementById('tempo').innerHTML = soma;
        }
    }, 1000)
}
function pararContagem() {
    //clearTimeout(tempo);
    //document.getElementById("tempo").innerHTML = "Parou a contagem";
    clearInterval(tempo);
}

