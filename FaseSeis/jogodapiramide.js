/* 9.	O jogo “pirâmiDe” solicita a altura da pirâmide, e imprime uma divertida pirâmide de letras D no console.
PirâmiDe: 4
D
DD
DDD
DDDD
*/

const prompt = require("prompt-sync")();

console.log("Qual será a altura da pirâmide? ");
let altura = prompt();

console.log("Pirâmide: " + altura);

for (i = 0; i <= altura; i++){
    var d = "D".repeat(i);
    console.log(d);
}


/* 
var a = 'Hell';
var b = 'o';
a = a.concat(b);
console.log(a); */