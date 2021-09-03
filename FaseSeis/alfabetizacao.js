/* 7.Na “alfabetização”, a criança digita uma consoante e o sistema enumera as sílabas que podem ser formadas. 
Serão exibidas 3 linhas em sequência numerada, com a consoante escolhida e as posteriores. Ao passar por uma vogal, 
porém, não podem ser formadas sílabas.
Consoante: C

Sílabas com C: 1. CA CE CI CO CU
Sílabas com D: 2. DA DE DI DO DU
Sílabas com E: é vogal
Sílabas com F: 3. FA FE FI FO FU
*/

const prompt = require("prompt-sync")();

let alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

console.log("Digite uma consoante: ");
let consoante = prompt();
let aux = 0;

// Varre o vetor alfabeto procurando a consoante digitada
for (i = 0; i <= 25; i++){
    if (alfabeto[i] == consoante){ // Testa a consoante digitada com a consoante no vetor alfabeto
        console.log("Consoante: " + consoante);
        aux++; // inicia a contagem das linhas numeradas
        console.log("Sílabas com " + consoante + " " + aux + "." + " " + consoante + "A" + " " + consoante + "E" + " " + consoante + "I" + " " + consoante + "O" + " " + consoante + "U");
        //A partir da posição da consoante escolhida no vetor alfabeto, seleciona as próximas 3 letras testando se é vogal ou não
        for (j = i + 1 ; j <= i + 3; j++) {
            aux++; // continua a contagem das linhas numeradas
            if (alfabeto[j] == "A" || alfabeto[j] == "E" || alfabeto[j] == "I" || alfabeto[j] == "O" || alfabeto[j] == "U"){
                aux--; // decresce uma posição na lista pois não é contabilizada a vogal
                console.log("Sílabas com " + alfabeto[j] + ": " + "é vogal");
                continue;
            } else {
                console.log("Sílabas com " + alfabeto[j] + " " + aux + "." + " " + alfabeto[j] + "A" + " " + alfabeto[j] + "E" + " " + alfabeto[j] + "I" + " " + alfabeto[j] + "O" + " " + alfabeto[j] + "U");
            }
        } 
    }
}

  

