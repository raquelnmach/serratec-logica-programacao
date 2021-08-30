/* 
9.	Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.
Tabuada de: 7
7 x 1 = 7
7 x 2 = 14
…
 */

const prompt = require("prompt-sync")();

console.log("Escolha um número: ");
let numero = prompt();

console.log("Tabuada de: " + numero);

for (i = 1; i <= 10; i++){
    tabuada = numero * i;
    console.log(numero + " x " + i + " = " + tabuada);
}
