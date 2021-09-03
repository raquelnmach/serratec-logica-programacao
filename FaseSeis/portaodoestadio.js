/* 6.No sistema “Portão do estádio” a entrada dos torcedores é controlada de forma organizada e pacífica. 
O sistema solicita o número do bilhete e direciona o torcedor para a arquibancada. 
Contudo, se algum mal intencionado furar a fila (indicado por um bilhete com número negativo), 
a entrada por aquele portão é fechada em definitivo, e todos precisarão ser encaminhados para outro portão.
*/

const prompt = require("prompt-sync")();

let bilhete = true;

do {
    console.log("Digite o número do bilhete: ");
    numeroBilhete = prompt();
    if (numeroBilhete >= 0){
        console.log("Você pode seguir para a arquibancada!");
    continue
    }    
    if (numeroBilhete < 0){
        console.log("Todos deverão seguir para outro portão!");
        break;
    }
} while (bilhete) 