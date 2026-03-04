//não sei se era pra fazer assim ai fiz de outra forma
const prompt = require('prompt-sync')();

console.log("---CADASTRO DE USUÁRIO---");
let nome = String(prompt("Digite seu nome: "));
let sobrenome = String(prompt("Digite seu sobrenome: "));
let email = String(prompt("Digite seu e-mail: "));
console.log("Agora cadastre sua senha!");


let senha = String(prompt("Digite sua senha: "));
let confirmaSenha = String(prompt("Confirme sua senha: "));

let senhaTamanho = (senha.length >= 8);
let senhaigual = senha === confirmaSenha;
let senhaCerta = senhaTamanho && senhaigual;

if (senhaCerta) {
    console.log("Sua senha está INCORRETA? "+ senhaCerta);
}
else{
    console.log("Sua senha está CORRETA? "+ senhaCerta);
    console.log("Para resolver isso, basta refazer o cadastro e sua senha deve ter 8 digitos e serem iguais!");
}