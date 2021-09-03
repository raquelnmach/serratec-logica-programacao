/* 14.	O “gerador de tabela verdade” solicita ao aluno de programação qual operador lógico quer visualizar (e, ou), 
e depois imprime na tela a tabela verdade montada em um laço. */

const prompt = require("prompt-sync")();

console.log("De qual operador lógico você deseja visualizar a Tabela Verdade? E ou OU");
let operador = prompt();

switch (operador){
    case "E":
        console.log("p ^ q");
        console.log("true ^ true = true");
        console.log("true ^ false = false");
        console.log("false ^ true = false");
        console.log("false ^ false = false");
    case "OU":
        console.log("p v q");
        console.log("true v true = true");
        console.log("true v false = true");
        console.log("false ^ true = true");
        console.log("false ^ false = false");
    break;
    default:
        console.log("Digite um operador válido!");
}