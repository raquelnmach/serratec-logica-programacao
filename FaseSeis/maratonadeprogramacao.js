/* 14.	Na "Maratona de programação", as duas equipes locais com mais pontos serão classificadas para a etapa nacional. 
O sistema da competição irá ler o nome e a pontuação de cada time, 
e depois de todas as entradas, imprimir o “Pódio”. Após a última equipe, vem um nome vazio.*/

const prompt = require("prompt-sync")();

let nome = [];
let pontuacao = [];
let aux = 0;
let aux2 = 0;

do {
     
    console.log("Digite o nome da Equipe: ");
    nome.push(prompt());
        
    console.log("Qual foi a sua pontuação na competição? ");
    pontuacao.push(prompt(""));
    
    resposta = console.log("Deseja inserir mais alguma equipe? ");
    desejaInserir = prompt();

} while (desejaInserir == "S")

posicoesPontuacao = pontuacao.length;

for ( var i = 0; i < posicoesPontuacao; i++){
    for (var j = i + 1; j < posicoesPontuacao; j++){
        if (pontuacao[i] < pontuacao[j]){
            aux = pontuacao[i];
            pontuacao[i] = pontuacao[j];
            pontuacao[j] = aux;

            aux2 = nome[i];
            nome[i] = nome[j];
            nome[j] = aux2;
        } 
    } 
} 

if (desejaInserir == "N"){
    console.log("O pódio dos classificados é: ");
    for (i=0;i<nome.length;i++){
        console.log(i+1 + "." + nome[i] + " - " + pontuacao[i] + "\n");
    }
}
