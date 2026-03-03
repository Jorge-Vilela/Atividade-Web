const prompt = require('prompt-sync')();

const salarioMinimo = 1525.00;

let salario = Number(prompt("Digite o seu salário: "));

let salariosDele = salario / salarioMinimo;

console.log("Você ganha o equivalente em salários Minímos: " + salariosDele);