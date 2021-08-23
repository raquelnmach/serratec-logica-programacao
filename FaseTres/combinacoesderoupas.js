/* 24.Jennyffer está preparando as malas para passar o feriado prolongado na casa da sua avó, no interior, 
sem aglomeração. 
Colocou na mala 4 calças e 8 camisetas. 
Quantas combinações, ou, de quantas formas diferentes ela poderá usar essas roupas? */

const prompt = require("prompt-sync")();

var calcas = 4;
var camisetas = 8;

var calculaRoupas = calcas * camisetas; 

console.log("A quantidade de combinações é de: " + calculaRoupas);

