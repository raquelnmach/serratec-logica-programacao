/*11.	O sistema “Mais que mil” apresenta o resultado da soma dos 4 primeiros múltiplos de 4 acima de mil, 
subtraindo dos 4 primeiros números primos a partir de zero. */

var prompt = require("prompt-sync")();

var numMult1 = 1004;
var numMult2 = 1008;
var numMult3 = 1012;
var numMult4 = 1016;

var somaMult4 = (numMult1 + numMult2 + numMult3 + numMult4);

var numPrimo1 = 2;
var numPrimo2 = 3;
var numPrimo3 = 5;
var numPrimo4 = 7;

var somaNumPrimos = (numPrimo1 + numPrimo2 + numPrimo3 + numPrimo4);

var ResultadoSomaSub = somaMult4 - somaNumPrimos;

console.log(ResultadoSomaSub);