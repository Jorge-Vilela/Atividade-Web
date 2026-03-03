const prompt = require('prompt-sync')();

let A = parseInt(prompt("Digite um número: "));
let B = parseInt(prompt("Digite outro número: "))

let C;

if (A == B) {
    C = A + B;
    console.log("Os números são iguais então a soma é: " + C);
} else {
    C = A * B;
    console.log("Os números são diferentes então a multiplicação é: " + C)
}
console.log("C é igual a: " + C);