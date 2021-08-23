/*16.O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário 
são mais inteligentes que os demais.

Mês do seu nascimento: 01
Dia do aniversário: 25
Você é inteligente? True!
 */

const prompt = require("prompt-sync")();

var mesNascimento = prompt("Mês do seu nascimento: ");
var diaAniversario = prompt("Dia do aniversário: ");

if((mesNascimento == 01 && diaAniversario >= 21 && diaAniversario <= 31) || ((mesNascimento == 02) && (diaAniversario >= 1 || diaAniversario <= 18)))
    console.log("Você é inteligente? True!");
else
    console.log("Você é inteligente? False!");
