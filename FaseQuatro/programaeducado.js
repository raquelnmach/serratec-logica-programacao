/* 11.	O programa "Educado" irá perguntar o seu nome, 
e também como você gostaria de ser chamado. Depois disso, uma saudação para você aparece na tela. */

const prompt = require("prompt-sync")();

console.log("Qual é o seu nome? ");

var nome = prompt();

console.log("Como você gostaria de ser chamado? ");

var apelido = prompt();

console.log("Olá, " + apelido + " seja Bem Vindo(a)!");