/***A chamada de classe**

Com base nos vetores de alunos e presença, Exibir:

1. A quantidade de alunos
2. Qual o número do aluno “Maria”
3. O total de presentes
4. O nome dos ausentes */

const prompt = require("prompt-sync")();

var alunos = [];
var presenca = [];

alunos[0] = "Ana";
presenca[0] = true;
alunos[1] = "Carolina";
presenca[1] = false;
alunos[2] = "Daiana";
presenca[2] = true;
alunos[3] = "Eliana";
presenca[3] = false;
alunos[4] = "Fernanda";
presenca[4] = true;
alunos[5] = "Raquel";
presenca[5] = true;

var qtde = alunos.length;
console.log("A quantidade de alunos é: " + qtde);

var nome = "Raquel";
var posicaoNome = -1;

for (var i = 0; i < qtde; i++){
    if (alunos[i] == nome)
        cadeira = i;
        
}

if (posicaoNome == -1){
    console.log("Não encontrei o aluno " + nome);
} else {
    console.log("O aluno " + nome + " está na cadeira:" + cadeira);
}

var total = 0;

for (var i = 0; i < presenca.length; i++){
    if (presenca[i]) {
        total++;
       //total = total + i; 
    } else {
        var nomeAusentes = alunos[i];
        console.log("O nome dos ausentes são: " + nomeAusentes)
    }
}

console.log("O total de presente é: " + total);