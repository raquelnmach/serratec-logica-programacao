/* 18.	O “Sistema do IPVA” avisa ao contribuinte o mês de pagamento do tributo, de acordo com o final da placa do carro. 
O motorista irá digitar a placa do carro com 4 dígitos inteiros. A resposta do programa será o dígito final da placa. 
Como informativo, após a resposta, será impressa a tabela completa com os meses de pagamento.
Digite a placa do carro: 1234
Seu carro é final 4. Confira a tabela de pagamentos:
Final 1, 2, 3, 4 e 5 - Pagamento em janeiro
Final 6, 7, 8, 9 e 0 - Pagamento em fevereiro
*/

const prompt = require("prompt-sync")();

console.log("Digite a placa do carro: ");
let placa = prompt();

let digitofinal = placa.substr(3);

console.log("Seu carro é final " + digitofinal);

console.log("Final 1,2,3,4 e 5 - Pagamento em Janeiro");
console.log("Final 6,7,8,9 e 0 - Pagamento em Fevereiro");