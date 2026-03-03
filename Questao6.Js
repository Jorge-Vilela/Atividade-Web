const prompt = require('prompt-sync')();

let valor = Number(prompt("Digite um valor qualquer: "));

let valorReajuste = valor * 1.05;

console.log("O valor Reajustado é : " + valorReajuste);