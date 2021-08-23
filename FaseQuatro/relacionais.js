/*9.O programa “Relacionais” lê os inteiros A e B. 
Utilizando variáveis booleanas, escreve na tela o resultado de cada operação relacional com os números. */

const prompt = require("prompt-sync")();

var intA = prompt("Digite um número inteiro:");
var intB = prompt("Digite outro número inteiro:");

var soma = parseInt(intA) + parseInt(intB); 
var valSoma = true;

if (valSoma)
    console.log("O valor da Soma dos números digitados é: ", soma);

var subtracao = intA - intB;
var valSubtracao = true;

if(valSubtracao)
    console.log("O valor da Subtração dos números digitados é: " , subtracao);

var multiplicacao = intA * intB;
var valMultiplicacao = true;

if(valMultiplicacao)
    console.log("O valor da Multiplicação dos números digitados é: ", multiplicacao);

var divisao = intA / intB;
var valDivisao = true;

if(valDivisao)
    console.log("O valor da Divisão dos números digitados é: ", divisao);