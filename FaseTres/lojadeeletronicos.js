/*22.Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, 
pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. 
Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 
3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra. */

var prompt = require("prompt-sync")();

var valJogos = 345.00;
var valVG = 1545.00;
var totalCompra = valJogos + valVG;
var pagTresVezes = totalCompra / 3;
var pagCincoVezes = totalCompra / 5;
var pagDezVezes = ((totalCompra * 0.015) + totalCompra) / 10;

console.log("As opções de pagamento através de parcelamento são: ")
console.log("Parcelamento em 3x sem juros: " + pagTresVezes);
console.log("Parcelamento em 5x sem juros: " + pagCincoVezes);
console.log("Parcelamento em 10x com juros de 1,5%: " + pagDezVezes);