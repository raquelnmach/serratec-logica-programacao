/*19.	O sistema “Betmais” organiza as apostas de seus amigos. 
Você irá solicitar no grupo do Discord, ou whatsapp, que cada amigo lhe fale um número entre 1 e 10. 
Quando você receber todos os números, então irá criar uma variável e atribuir nela os valores, digitando na seguinte ordem: 
Os pares são somados, os ímpares subtraídos. 
O programa irá imprimir o resultado, para você repassar aos amigos. */

var prompt = require("prompt-sync")();

var resultado = 2 - 5 - 1 - 3 + 6 - 7 - 9 + 10 + 4 + 8;

console.log("O resultado do sistema Betmais de apostas é:" + resultado);