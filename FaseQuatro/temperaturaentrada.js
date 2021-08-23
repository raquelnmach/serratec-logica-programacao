/* 13.Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. 
Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.

Digite a temperatura: 36.9
Usa máscara (S ou N): N
Autorizar a entrada? False
*/

const prompt = require("prompt-sync")();

var lerTemperatura = prompt("Digite a temperatura: ");
var usaMascara = prompt("Usa máscara (S ou N): ");
var autorizaEntrada = true;


if (lerTemperatura < 37.5 && usaMascara == "S")
    console.log("Autorizar a entrada? True");
else
    console.log("Autorizar a entrada? False");
