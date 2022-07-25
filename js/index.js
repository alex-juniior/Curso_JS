/*
JSON.parse() -> Converte texto no padrão JSON em objetos
JSON.stingify() -> Converte objetos em texto padrão JSON
*/

//Objeto
/*
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ["1.6", "1.4", "1.0"]
}
//Converteu para texto JSON
let texto = JSON.stringify(carro);

//Colocou o texto no HTML
document.getElementById('area').innerHTML = texto;

//Converteu o texto em objeto 
let obj = JSON.parse(texto);

//Pegou valor do objeto
console.log(obj.motor[2]);
*/