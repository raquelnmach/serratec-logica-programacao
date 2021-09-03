/* 14.	O programa “Financeira” irá solicitar que o cliente digite seu nome, empresa e função, 
além do valor do empréstimo que deseja contratar. Então será calculado 86% do valor desejado como crédito disponível. 
A resposta ao cliente deve seguir o exemplo abaixo.
Para escrever as mensagens, utilize variáveis com concatenação de strings.
O valor será escrito separadamente (no console.log).
Senhor Moisés, você está com sorte! Pela sua função de Programador, e sua excelente relação com a empresa onde trabalha (Serratec),
foi aprovado um crédito em sua conta corrente de R$ 200.00
*/ 

const prompt = require("prompt-sync")();

console.log("Digite seu nome: ");
let nome = prompt();

console.log("Empresa onde trabalha: ");
let empresa = prompt();

console.log("Qual é a sua função? ");
let funcao = prompt();

console.log("Qual o valor do empréstimo que você deseja contratar? ");
let valorEmprestimo = prompt();

let calculaEmprestimo = parseFloat((valorEmprestimo) * 0.86);

console.log("Senhor" + " " + nome + " você está com sorte! Pela sua função de " + funcao + ", " + "e sua excelente relação com a empresa onde trabalha " + "(" + empresa + ")" + " foi aprovado um crédito em sua conta corrente de R$" + calculaEmprestimo);