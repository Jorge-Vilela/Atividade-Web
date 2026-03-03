const prompt = require('prompt-sync')();

let A = Number(prompt("Digite um número qualquer: "));

let valor = A / 2;

if (valor % 2 === 0 ){
    console.log("O Número é Par! ");

}else {
    console.log("O Número é Ìmpar! ");
}

if (A > 0) {
    console.log("O Número é Positivo! ")

} else if (A == 0) {
    console.log("O número é Zero ( 0 )! ")

} else {
    console.log("O número é Negativo!")
}