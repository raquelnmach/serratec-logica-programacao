/*13.	O programa "Ryuju Okada" escreve na tela o resultado das expressões abaixo:
a.	2 + 3 - 5 * 8 - 4 + 354 - 521 + 7 * 66
b.	2 + 7 * (14 - 21) + 28 * 3 * 42 + 740 - (156 + 4 + 40) * 9
 */

var prompt = require("prompt-sync")();

var resultadoExpa = 2 + 3 - 5 * 8 - 4 + 354 - 521 + 7 * 66;
var resultadoExpb = 2 + 7 * (14 - 21) + 28 * 3 * 42 + 740 - (156 + 4 + 40) * 9;

console.log("a. " + resultadoExpa);
console.log("b. " + resultadoExpb);