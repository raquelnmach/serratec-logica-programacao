/*12.Dois amigos vão utilizar o programa “Maioral”. 
Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. 
Vamos saber quem digitou o número maior, pelos resultados na tela.
== Maioral ==
  Player 1: 7
  Player 2: 8
: Resultados :
  Player 1 venceu? False
  Player 2 venceu? True
  Houve empate? False
 */

const prompt = require("prompt-sync")();

console.log(" == Maioral ==");

var playerUm = prompt("Digite um número inteiro:");
var playerDois = prompt("Digite um número inteiro:");

console.log(" Resultados: ");

var valorMaior = true;

var resultadoTouFum = valorMaior == playerUm > playerDois;
var resultadoTouFdois = valorMaior == playerDois > playerUm;
var empate = valorMaior == (playerUm == playerDois);

console.log(" Player 1 venceu? " + resultadoTouFum);
console.log(" Player 2 venceu? " + resultadoTouFdois);
console.log(" Houve empate? " + empate);

