/*18.Na gincana de arrecadação de alimentos, as equipes A e B têm uma semana para formar uma pilha com as doações. 
Sendo que a empresa irá dobrar a quantidade de quilos de feijão arrecadados.
Ganha um ponto extra a equipe cuja quantidade de pacotes permitir a montagem de kits com 3 alimentos. 
O programa “Gincana” irá apurar as quantidades recolhidas e exibir o nome da equipe vencedora.
: Equipe A
Pacotes: 37
Feijão: 7
: Equipe B
Pacotes: 21
Feijão: 15
[Apuração]
Equipe A: 51
Equipe B: 52
E a vencedora é: Equipe B!
*/

const prompt = require("prompt-sync")();

console.log(": Equipe A");
var pacotesA = prompt("Qual é a quantidade de Pacotes arrecadados? ");
var feijaoA = prompt("Qual é a quantidade de Feijão arrecadados? ");

console.log(": Equipe B");
var pacotesB = prompt("Qual é a quantidade de Pacotes arrecadados? ");
var feijaoB = prompt("Qual é a quantidade de Feijão arrecadados? ");


if(parseInt(pacotesA) % 3 == 0)
    var pontoextraA = 1;
else
    var pontoextraA = 0;

if(parseInt(pacotesB) % 3 == 0)
    var pontoextraB = 1;
else
    var pontoextraB = 0;        


var pontosEquipeA = parseInt(pacotesA) + parseInt(feijaoA * 2) + pontoextraA;    
console.log("Equipe A: " + pontosEquipeA);

var pontosEquipeB = parseInt(pacotesB) + parseInt(feijaoB * 2) + pontoextraB;    
console.log("Equipe B: " + pontosEquipeB);

if(pontosEquipeA>pontosEquipeB)
    console.log("E a vencedora é: Equipe A!")
else
    console.log("E a vencedora é: Equipe B!")


