/*21.O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado. */

var prompt = require("prompt-sync")();

var numero = prompt("Digite um número:");

calcNumero = parseInt(numero) ** 2;

console.log("O quadrado de " + numero + " foi " + calcNumero + ".");