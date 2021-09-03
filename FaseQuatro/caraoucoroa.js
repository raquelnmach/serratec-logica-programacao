/* 17.	O programa “Cara ou coroa” irá funcionar assim: O sistema irá solicitar um número, 
o jogador irá digitar o valor que preferir. O programa então irá exibir uma resposta em texto fixo, 
onde a única variável é o resultado da moeda. 
Para “jogar a moeda”, considere o número digitado: Sendo par é cara, sendo ímpar é coroa. 

Como está sua sorte?
Jogue a moeda (digite qualquer número): 3
Veja o resultado abaixo: sendo 0 é cara, 1 é coroa:
O sorteio deu 1!

*/

const prompt = require("prompt-sync")();

console.log("Como está a sua sorte?");
console.log("Jogue a moeda (digite qualquer número): ");

let numero = prompt();
console.log("Veja o resultado abaixo: sendo 0 é cara, 1 é coroa")


if (numero%2 == 0){
    var moeda = "0";
    console.log("O sorteio deu: " + moeda + "!");
} else {
    moeda = "1";
    console.log("O sorteio deu: " + moeda + "!");
}