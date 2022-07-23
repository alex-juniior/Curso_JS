const lista = ["arroz", "feijão", "macarrão", "leite"];
console.log(lista[0]);

const lista1 = [];
lista1[0] = "arroz";
lista1[1] = "feijão";
lista1[2] = "macarrão";
lista1[3] = "leite";

//obter valor posição do array
let x = lista1[3];
//alert(x);

//alterar valor, aponta posição -> valor
lista1[0] = "café";
//alert(lista1[0]);

//Mostrando array completo
//console.log(lista1)


const pessoa = ["Dimitri", "Teixeira", 30]; //array

//alert(pessoa.length); //3, tamanho do array

//Pegar ultimo valor de uma array, tamanho total "length", tira -1 item
//alert(pessoa[pessoa.length - 1]);

//acrescenta item no final do array
pessoa.push("Professor");
console.log(pessoa);

//verificar se a variavel é uma matriz "true or false"
//alert(Array.isArray(pessoa));

//métodos de arrays
//remover ultimo item matriz "pop"
pessoa.pop();

//adicionando item matriz "push"
pessoa.push("Novo")
document.getElementById("teste").innerHTML = pessoa;

//removendo primeiro item da matriz "shift"
pessoa.shift();

//adicionando item em primeiro "unshift"
pessoa.unshift("Alex");


//apagar item com delete, apaga mas não muda posição fica undefined
delete pessoa[0];


// indica posição que quer colocar/ se vai ser deletado ou não/ valores acrescentados 
pessoa.splice(1, 0, "Item adiciona1", "item adicionado2");
//document.getElementById("teste").innerHTML = pessoa;
//document.getElementById("teste").innerHTML = pessoa.join(" - ");

const list3 = ["arroz", "feijão", "leite", "macarrão"];
const list4 = ["suco", "refrigerante", "carne"];

//criação nova matriz, juntando as matrizes
const superLista = list3.concat(list4);
//document.getElementById("teste").innerHTML = superLista;

const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona",
    "Neymar", "Messi", "Cristiano Ronaldo", "Vampeta", "Dimitri"];

//cortar a matriz a partir de tal posição
//const craques = jogadores.slice(2);

//cortando de tal a tal 
//const craques = jogadores.slice(2, 6);

//deixando em ordem alfabetica "sort"
//const jogOrdem = jogadores.sort();

//mostrando em ordem decrescente 
//jogadores.sort();
//jogadores.reverse();
//document.getElementById("teste").innerHTML = jogadores;


const numeros = [40, 100, 1, 5, 25, 19];
//ordena por ordem de texto "alfabética"
//numeros.sort();
//usa-se função para ordenação em ordem númerica b-a decrescente
numeros.sort(function (a, b) { return a - b });

const maior20 = numeros.filter(filtragem);
document.getElementById("teste").innerHTML = maior20;

//document.getElementById("teste").innerHTML = maiorNumero(numeros);
//document.getElementById("teste").innerHTML = menorNumero(numeros);


//mostrando maior número de um array
function maiorNumero(array) {
    return Math.max.apply(null, array);
}

//mostrando menor número de um array
function menorNumero(array) {
    return Math.min.apply(null, array);
}

//mostrando números maior que 20
function filtragem(value, index, array) {
    return value > 20;
}