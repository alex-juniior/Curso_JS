function soma(valor1, valor2) {
    return valor1 + valor2;
}

function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}

let total = realParaDolar(10, 5.09);
alert(total);
document.getElementById("texto").innerHTML = soma(10, 200);

function paraCelsius(valorFahrenheit) {
    return (5 / 9) * (valorFahrenheit - 32);
}

let x = paraCelsius(77);
alert(" A temperatura é de " + x + " graus celsius!");