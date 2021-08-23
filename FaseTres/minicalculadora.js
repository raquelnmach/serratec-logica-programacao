/*17.Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de 
soma, subtração, multiplicação e divisão com eles. */

var prompt = require("prompt-sync")();

var numero1 = prompt("Digite um número:");
var numero2 = prompt("Digite outro número:");

var soma = parseInt(numero1) + parseInt(numero2);
var subtracao = numero1 - numero2;
var multiplicacao = numero1 * numero2;
var divisao = numero1 / numero2;

console.log("O resultado da Soma dos números digitados é: " + soma);
console.log("O resultado da Subtração dos números digitados é: " + subtracao);
console.log("O resultado da Multiplicação dos números digitados é: " + multiplicacao);
console.log("O resultado da Divisão dos números digitados é: " + divisao);
