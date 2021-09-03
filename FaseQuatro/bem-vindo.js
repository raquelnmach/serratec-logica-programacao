/* 12.	O programa “bem-vindo” pergunta seu nome e sobrenome, e depois gentilmente te cumprimenta.
Qual o seu nome? Moisés
E sobrenome? Baddini
Olá Moisés Baddini, seja bem vindo ao universo da programação!
*/

const prompt = require("prompt-sync")();

console.log("Qual é o seu nome? ");

let nome = prompt();

console.log("Qual é o seu sobrenome? ");

let sobrenome = prompt();

console.log("Olá " + nome + " " + sobrenome + ", " + "seja bem vindo(a) ao universo da programação!");