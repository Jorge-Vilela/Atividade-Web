const prompt = require('prompt-sync')();

let A = Number(prompt("Digite o valor do número A: "));
let B = Number(prompt("Digite o valor do número B: "));
let C = Number(prompt("Digite o valor do número C: "));

let soma = A + B;

console.log("A soma dos números A + B é: " + soma);

if (soma < C){

console.log("A soma dos números A+B é menor que C: ");
}
else if (soma == C){
console.log("A soma dos números A+B é IGUAL a C ");
}
 else {(soma == C)
console.log("A soma dos números A+B é maior que C ");
}