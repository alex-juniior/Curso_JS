//As classes devem ser declaradas antes das chamadas do objeto
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    buzina() {
        return this.modelo + " buzinou: Biiiiiiiiiii"
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013);
//console.log(uno);
//console.log(gol);
//console.log(gol.buzina());
console.log(gol)
gol.ano = 2014;
console.log(gol)

