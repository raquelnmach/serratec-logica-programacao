/*18.	O sistema “Faço parte” vai te mostrar um histórico da trajetória de nossa cidade.
 O resultado apresentado na tela será: “Teresópolis tem x anos. 
 Desses, foram y antes de mim. Mas nos últimos z anos ela conta comigo!”. 
 Cada letra maiúscula do texto será uma variável, 
 sendo que “x” e “z” são valores fixos, e “y” irá conter uma expressão. */

var prompt = require("prompt-sync")();

var letraT = "Teresópolis";
var letraD = "Desses";
var letraM = "Mas";

var xAnos = 130;
var yAnos = "cento e quinze anos";
var zAnos = 15;

console.log("Teresópolis tem " + xAnos + " anos."+"\n"+"Desses, foram " + yAnos + " antes de mim. Mas nos últimos " + zAnos + " anos ela conta comigo!");
