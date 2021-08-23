/*15.O programa “Três ângulos” lê os valores dos ângulos de uma forma, 
e escreve se as medidas formam um triângulo válido. */

const prompt = require("prompt-sync")();

var medidaUm = prompt("Qual a medida do primeiro ângulo? ");
var medidaDois = prompt("Qual a medida do segundo ângulo? ");
var medidaTres = prompt("Qual a medida do terceiro ângulo? ");

var calculaMedidasTriangulo = parseInt(medidaUm) + parseInt(medidaDois) + parseInt(medidaTres);

if(calculaMedidasTriangulo == 180)
    console.log("Triângulo válido!");
else
    console.log("Triângulo Inválido!"); 