/*15.	A “continha oposta” lê um número e mostra seu valor negativo. */

var prompt = require("prompt-sync")();

var numero = prompt("Digite um número:");

var numeroNeg = -numero;

console.log("O valor negativo do número digitado é: " + numeroNeg);