/*  9.No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao programa, 
    que armazena o valor e solicita a próxima carta. 
    A vitória é do jogador quando a soma das cartas dá exatos vinte e um, 
    ou ganha o carteador quando a soma ultrapassa esse valor.*/

const prompt = require("prompt-sync")();

var sorteio = true;

console.log("Qual carta você escolhe? ");
var cartaEscolhida = prompt("");
    
console.log("Escolha uma carta novamente: ");
var cartaEscolhidaNov = prompt("");
       
var somaCarta = parseInt(cartaEscolhida) + parseInt(cartaEscolhidaNov);
             
if (somaCarta == 21){
    console.log("Parabéns, Você venceu!");
} else {
     if (somaCarta > 21){
        console.log("Carteador diz: Sinto muito, Eu ganhei! =)");
     }
}