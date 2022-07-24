//Manipulando datas em JS

//comando base pegar a data
let data = new Date();
//console.log(date);


//pegar ano atual com 4 digitos
let ano = data.getFullYear();
//console.log(ano);

//pegar mês atual
let mes = data.getMonth();
//console.log(mes);

//mostrar o mês no formato escrito
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);


//pegar dia do mês - 1 até 31
let diaMes = data.getDate();
console.log(diaMes);


//pegar dia semana - 0 até 6
let diaSemana = data.getDay();

const diaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diaEscrito = diaDaSemana[data.getDay()];
console.log(diaEscrito);

//pegar a hora - de 0 até 23
let hora = data.getHours();
//console.log(hora);

//pegar minutos - de 0 a 59
let minuto = data.getMinutes();
//console.log(minuto);

//pegar segundos - 0 a 59
let segundos = data.getSeconds();
//console.log(segundos);

//pegar milesegundos
let milesegundos = data.getMilliseconds();
//console.log(milesegundos);

//Pegar data no padrão brasileiro - dd/mm/yyy
let dataBR = data.toLocaleDateString('pt-BR', { dataStyle: 'short' });
console.log(dataBR);

//Pegar valores separados e juntar
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

//Função adicionar 0 na data quando menor 10
function addZero(x) { return x < 10 ? "0" + x : '' + x; };

let datePadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(datePadraoBR);

//Comparar data - Maior ou Menor. ex: vencimentos
let hoje = new Date();
let vencimento = new Date(2022, 0, 15);

if (hoje > vencimento) {
    console.log("Sua conta está vencida!")
} else {
    console.log("Ainda não Venceu, tudo certo!");
}

//Diferença em dia de duas datas
let dataInicial = new Date();
let dataFinal = new Date(2023, 10, 15);

let diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
let diferecaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferecaDias + " dias");