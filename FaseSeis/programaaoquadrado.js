/* 8.	O programa “ao quadrado” imprime os quadrados dos números de um a nove, separando cada expressão em uma linha.
1 ^ 2 = 1
2 ^ 2 = 4
…
 */

const prompt = require("prompt-sync")();

for (i = 1; i <= 9; i++){
    let quadrado = Math.pow(i,2);
    console.log(i + "^" + "2" + " = " + quadrado);
}