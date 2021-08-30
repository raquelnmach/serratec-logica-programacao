/* 12.O “cara ou coroa estatístico” vai jogar a moeda mil vezes, 
e depois demonstrar percentualmente as aparições de caras ou coroas.
Pesquise sobre a função de números aleatórios, para sortear um número e usá-lo como sendo a resposta da moeda.
 */

const prompt = require("prompt-sync")();

var cara = 0;
var coroa = 0;

for(i = 0; i < 1000; i++){
    
    let caraoucoroa = Math.floor(Math.random() * 2);

    if (caraoucoroa == 0){
            console.log("Deu cara!");
            cara++;
    } else {     
        if (caraoucoroa == 1){
            console.log("Deu coroa!");
            coroa++;
        }
    }
}

let percCara = cara / 10;
let percCoroa = coroa / 10;

console.log("O percentual de vezes que deu cara foi de: " + percCara + "%");
console.log("O percentual de vezes que deu coroa foi de: " + percCoroa + "%"); 