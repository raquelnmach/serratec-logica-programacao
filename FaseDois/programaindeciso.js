/*
19.	O programa “indeciso” não sabe bem o número que quer imprimir. 
Por isso, antes de cada dúvida, os números devem ser separados do texto e atribuídos a uma variável inteira.

Quero te contar meu número da sorte! é 13.
Não, espera, é 7.. Ah esse era o da mamãe. O meu é 22.
Já decidi: é 20! Bingo :)
*/

const prompt = require("prompt-sync")();

var numero = "13";
console.log("Quero te contar meu número da sorte! É " + numero + ".");

numero = "7";
var numeroNovo = "22";
console.log("Não, espera, é " + numero + ".." + " Ah esse era o da mamãe. O meu é " + numeroNovo + ".");

numero = "20";
console.log("Já decidi: é " + numero + "!" + " Bingo :)");

