/*  11.	Para ajudar a criança que ainda não sabe contar “ímpar par”, 
o programa pergunta até qual número ela quer contar, e quais ela quer ver (pares ou ímpares).*/


const prompt = require("prompt-sync")();

console.log("Até qual número você deseja contar? ");
let numero = prompt();

console.log("Você deseja ver os números pares ou os ímpares da contagem? ( Pares - P | ímpares - I )");
let paresouimpares = prompt();

for (let i = 0; i <= numero; i++){
    if ((paresouimpares == "P") && (i % 2 == 0)){
        console.log("Números pares: " + i);
    } else {
        if ((paresouimpares == "I") && ( i % 2 != 0))
            console.log("Números ímpares: " + i);
    } 
}
  