/* 4.No programa “Conto nos dedos”, a criança diz até qual número quer contar, e os números aparecem na tela em sequência. 
Ela vai experimentar vários números, até que digite um zero para parar de contar. */

const prompt = require("prompt-sync")();

console.log("Qual número você quer contar? ");

let numero = prompt();
let contagem = 0;

do{
    for (var i = 0; i <= numero; i++){
        contagem = numero - i;
        console.log(contagem);
    }
    break;
} while (numero != 0)