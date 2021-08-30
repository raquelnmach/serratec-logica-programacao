/**12.Na “soma de dígitos”, o programa mostra a soma dos algarismos do número inteiro.
Seu número: 2021
A soma é 5
 */

const prompt = require("prompt-sync")();

console.log("Digite um número inteiro: ")
let numero = prompt();

let resto = 0;
let soma = 0;


while (numero > 0) {

    resto = numero % 10
    numero = parseInt(numero / 10);
    soma = soma + resto;

}

console.log("A soma dos números é: ", soma);
