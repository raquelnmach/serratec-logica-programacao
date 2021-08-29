/* 10.	O “cara ou coroa gentil” irá perguntar sua escolha e depois fica jogando a moeda até que ela caia do jeito que você queria! 
Cada jogada será exibida no console. */

const prompt = require("prompt-sync")();

console.log("Qual será a sua escolha?");
console.log("Cara = 0 ou Coroa = 1 ?");

let escolha = prompt();

for (i = 1; i < 5 ; i++){
    
    let moeda = Math.floor(Math.random() * 2);
    console.log("Jogando...");
    console.log("O resultado da moeda foi " + moeda);
    
    do {
        if (moeda == escolha){
            console.log("O resultado da moeda foi " + moeda + "Você conseguiu!");
            break;
        } else {
                if (moeda != escolha){
                    console.log("Jogando de Novo...");
                    moeda = Math.floor(Math.random() * 2);
                    console.log(moeda);
                    console.log("Você conseguiu!");
                    break;
                }
            }  
    } while(escolha)
 break;
}


