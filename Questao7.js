//fiz outro pra ter certeza

const prompt = require('prompt-sync')();

let valor1 = prompt("Digite seu valor (true/false) ").toLowerCase();
let valor2 = prompt("Digite seu valor (true/false) ").toLowerCase(); 
let valoresiguais = valor1 === valor2;
let valoresDiferentes = valor1 != valor2;

if (valoresiguais) {
    console.log("Os valores são iguais? "+ valoresiguais);   
}else {
    console.log("Os valores são diferentes? "+ valoresDiferentes);
}





