/*14.É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, 
ou a pessoa do sexo masculino a partir dos 18 anos. 
Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual.
Sexo: Feminino
Ano de nascimento: 1999
Cidadão emancipado? True
*/

const prompt = require("prompt-sync")();

var sexo = prompt("Qual é o seu sexo? (Feminino ou Masculino)");
var anoNasc = prompt("Em que ano você nasceu?");

var calculoIdade = 2021 - anoNasc;

if((calculoIdade>=21) || (sexo="Masculino" && calculoIdade >= 18))
    console.log("Cidadão emancipado? True");    
else
    console.log("Cidadão emancipado? False");    
