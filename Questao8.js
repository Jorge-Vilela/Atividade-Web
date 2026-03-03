const prompt = require('prompt-sync')();

let A = parseInt(prompt("Digite um valor: "));
let B = parseInt(prompt("Digite outro valor: "));
let C = parseInt(prompt("Digite mais outro valor: "));

console.log("Os valores em ordem decrescente são: ")

if (A >= B && A >= C) {
    if (B >= C) 
        console.log(A, B, C);
        else console.log(A, C, B);
}
else if (B >= A && B >= C) {
    if (A >= C);
        console.log( B, A, C);
}
else {
    if (A >= B );
        console.log(C, B, A);
}