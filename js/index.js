const lista = ["arroz", "feijão", "macarrão", "leite"];
console.log(lista[0]);

const lista1 = [];
lista1[0] = "arroz";
lista1[1] = "feijão";
lista1[2] = "macarrão";
lista1[3] = "leite";

//obter valor posição do array
let x = lista1[3];
alert(x);

//alterar valor, aponta posição -> valor
lista1[0] = "café";
alert(lista1[0]);

//Mostrando array completo
//console.log(lista1)


const pessoa = ["Dimitri", "Teixeira", 30]; //array

alert(pessoa.length); //3, tamanho do array

//Pegar ultimo valor de uma array, tamanho total "length", tira -1 item
alert(pessoa[pessoa.length - 1]);

//acrescenta item no final do array
pessoa.push("Professor");
console.log(pessoa);

//verificar se a variavel é uma matriz "true or false"
alert(Array.isArray(pessoa));








