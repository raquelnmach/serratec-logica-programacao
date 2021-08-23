/*27.O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal 
para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida 
a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam 
ser misturados para preenchimento do vasilhame */

var prompt = require("prompt-sync")();

var mlGarrafa = prompt("Qual a capacidade da garrafa em mililitros?");

var calculoVolumeAlcool = (0.7 * mlGarrafa )/0.96;
var calculoVolumeGel = mlGarrafa - calculoVolumeAlcool;

console.log("O volume de alcool a ser misturado é de: " + calculoVolumeAlcool + "\n" + "O volume de gel a ser misturado é de: " + calculoVolumeGel);

//http://www.etepb.com.br/etec/arq_alunos/influenza/material_sobre_higiene_das_maos/resposta_tecnica_sobre_preparacao_de_alcool_70pc.pdf