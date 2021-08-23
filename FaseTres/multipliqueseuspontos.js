/*26.O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”.
O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor.
Digite seus cupons: 12
Seus cupons agora valem 36 pontos!
 */

var prompt = require("prompt-sync")();

var lerNumCupons = prompt("Digite seus cupons:");

var multCupons = lerNumCupons * 3;

console.log("Seus cupons agora valem " + multCupons + " pontos!");