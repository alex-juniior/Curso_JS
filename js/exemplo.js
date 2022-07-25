
function buscarCep() {
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {
        //document.getElementById('texto').innerHTML = this.responseText;

        //Transforma o texto em objeto
        let obj = JSON.parse(this.responseText);
        //Pega valores desejados
        let rua = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML = "Logradouro: " + rua +
            "</br> Cidade: " + cidade + "</br> Estado: " + estado;

    }
}
