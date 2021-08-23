/*1.A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, 
onde o dígito final do documento será utilizado para permitir a entrada nas lojas. 
CPF final “par” somente pode sair nos dias pares, e de igual modo, 
o dia ímpar é destinado aos documentos ímpares.
Dia (hoje): 16
CPF (após o hífen): 41
Autorizado a entrar na loja? False
 */

const prompt = require("prompt-sync")();

var entradaDia = prompt("Que dia é hoje? ");
var entradacpf = prompt("Qual é o seu CPF? (com pontos e hífen) ");

var cpfAposHifen = entradacpf.substr(12);
var numFinalCpf = entradacpf.substr(13);
var testaCpfPar = false;

testaCpfPar = (numFinalCpf == "0" || numFinalCpf == "2" || numFinalCpf == "4" || numFinalCpf == "6" || numFinalCpf == "8") && (entradaDia%2 == 0)
testaCpfImpar = (numFinalCpf == "1" || numFinalCpf == "3" || numFinalCpf == "5" || numFinalCpf == "7" || numFinalCpf == "9") && (entradaDia%2 == 1);

console.log("Dia (hoje): " + entradaDia);
console.log("CPF (após o hífen): " + cpfAposHifen);

if(testaCpfPar || testaCpfImpar)
    console.log("Autorizado a entrar na loja? True");
else 
    console.log("Autorizado a entrar na loja? False");

