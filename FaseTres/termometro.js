/*14.	O programa “termômetro” lê uma temperatura em graus Celsius, 
e devolve sua equivalência na escala Fahrenheit. */

var prompt = require("prompt-sync")();

var tempCelsius = prompt("Qual é temperatura em Celsius que você deseja verificar em Fahrenheit?");

// F = C x 1,8 + 32

var tempFah = (tempCelsius * 9/5) + 32;

console.log("A temperatura equivalente na escada Fahrenheit é: " + tempFah);