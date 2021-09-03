/* 15.	O restaurante "Self-Service" precisa de um programa para imprimir as etiquetas de "comanda" na pesagem dos pratos. 
O operador da balança irá digitar no programa o preço do quilo e o total em gramas do prato. 
Considere que o prato vazio pesa 465 gramas (tara), e que a entrada sempre será maior que a tara.
A etiqueta irá conter o nome do restaurante, a tara do prato, o preço de 100 gramas, o peso apenas da refeição e o valor a pagar. */

const prompt = require("prompt-sync")();

console.log("Qual é o preço do quilo? ");
let precoKg = prompt();

console.log("Qual é o total em gramas do prato? ");
let gramasPrato = prompt();

let tara = 465;

let precoCemGramas = precoKg / 10;

let pesoRefeicao = gramasPrato - tara;

let valorapagar = (precoKg/1000) * gramasPrato;

console.log("Nome do Restaurante: ");
console.log("Tara do prato: " + tara + " gramas");
console.log("Preço por 100 gramas: " + precoCemGramas) + " gramas";
console.log("Peso da refeição: " + pesoRefeicao + " gramas");
console.log("Valor total a pagar: " + "R$" + valorapagar.toFixed(2));