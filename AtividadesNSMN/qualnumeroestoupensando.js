/*
"UM DESAFIO" : Tente adivinhar qual o numero de 0 - 20 eu estou pensando?
Você tem três chances para acertar (de 1 - 3). 
Se a pessoa acertar, exibir a mensagem: "Parabéns! Você é esperto."
Se a pessoa errar, exibir a mensagem: "Tente outra vez, você tem mais N chance!".  
Se a pessoa não acertar, o programa fala o numero que eu estava pensando e diz: "Haha, Você Perdeu!
*/

const prompt = require("prompt-sync")();

var numeroPensado = Math.floor(Math.random() * 20 + 1);

console.log("Tente adivinhar: ");
console.log("Qual número estou pensando? ");

var i = 1;

for (i = 1; i < 4; i++) {
    var testaNumero = prompt("");
    var aux = 3 - i;
    if (testaNumero == numeroPensado){
        console.log("Parabéns! Você é esperto!");
        break;
    } else { 
        if (aux != 0)    
            console.log("Tente outra vez, você tem mais " + aux + " chance(s).");
        else    
            console.log("Haha, você perdeu!" + " O número que eu pensei foi: " + numeroPensado);
    }    
}




