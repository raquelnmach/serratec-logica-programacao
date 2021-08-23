var prompt = require("prompt-sync")();
/*
var nome = prompt("Qual é o seu nome? ");
console.log("Olá, seu nome é:",nome);

console.log("linha1\nlinha2");
*/

var A = prompt("Possui habilitação A? Digite S ou N:");
var B = prompt("Possui habilitação B? Digite S ou N:");
var C = prompt("Possui habilitação C? Digite S ou N:");

var motoca = (A == "s") || (A == "S") || (A == "Sim");
var carro = (B == "s") || (B == "S") || (B == "Sim");
var vuc = (C == "s") || (C == "S") || (C == "Sim");

var resposta = motoca && carro && vuc;

if (resposta = true)
    console.log(resposta);


