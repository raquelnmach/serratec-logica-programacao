/*
## Descrição:
Limpar a casa. Crie um programa que mostre se o cômodo da casa que você escolher está limpo ou se ele tem que ser limpo. Você deve ter a entrada com os cômodos da casa, e criar um sistema que indique se o cômodo esta limpo ou não, exibindo uma mensagem no console para cada cômodo que for da sua escolha.
*/

var prompt = require('prompt-sync')();

var comodo = [];
comodo[0] = "quarto";
comodo[1] = "sala";
comodo[2] = "banheiro";
comodo[3] = "cozinha";

console.log(comodo)
var pergunta = prompt("Qual comodo deseja verificar? ");

if (pergunta == comodo[0]){
console.log("O " + pergunta + " está limpo. ");
}
else if  (pergunta == comodo[1]){
    console.log("A " + pergunta + " está limpa. ");
}
    else if (pergunta == comodo[2]){
        console.log("O " + pergunta + " está limpo. ");
    }
        else if(pergunta == comodo[3]){
            console.log("A " + pergunta + " não está limpa. ");
            } else {
                console.log("O " + pergunta + " não está limpo.")
            }
         
            



