const prompt = require('prompt-sync')();

let A = parseInt(prompt("Digite um número: "));

let antecessor = A - 1;
console.log("O antecessor do número é : " + antecessor)

let sucessor = A + 1;
console.log("O sucessor do número é: " + sucessor)