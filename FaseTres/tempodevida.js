/*12.	O programa “Tempo de vida” irá imprimir a soma das idades de todos os colegas do seu squad. 
Pergunte a cada um a idade e não esqueça a sua! 
Depois faça a atribuição da expressão que você montou em uma variável inteira. */

var prompt = require("prompt-sync")();

var idadeAdrian = 18;
var idadeRaquel = 32;
var idadeMarcos = 25;
var idadePedro = 34;
var idadeRodrigo = 31;
var idadeAngelita = 45;

var somaIdadesColSquad = idadeAdrian + idadeAngelita + idadeMarcos + idadePedro + idadeRaquel + idadeRodrigo;

console.log("A soma das idades de todos os colegas de squad é: " + somaIdadesColSquad);