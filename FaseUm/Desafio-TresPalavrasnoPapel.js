/*
18.	Um amigo meu disse que consegue escrever três palavras diferentes sem tirar a caneta do papel. 
No caso do nosso programa, o comando de escrita só pode ser chamado uma vez, 
porém as três mensagens devem ser separadas no console.
*/

const prompt = require("prompt-sync")();

var palavraString = prompt("Digite três palavras diferentes separadas por vírgula.");

var resultadoEspaco = palavraString.split(",", 3);

console.log(resultadoEspaco);




