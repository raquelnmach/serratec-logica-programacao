/* 14.	Na "Maratona de programação", as duas equipes locais com mais pontos serão classificadas para a etapa nacional. 
O sistema da competição irá ler o nome e a pontuação de cada time, 
e depois de todas as entradas, imprimir o “Pódio”. Após a última equipe, vem um nome vazio.*/

const prompt = require("prompt-sync")();

let nome = [];
let pontuacao = [];
let i = 0;
let j = 0;
let aux1 = 0;
let aux2 = 0;

console.log("Digite o nome da Equipe: ");
nome.push(prompt());
    
console.log("Qual foi a sua pontuação na competição? ");
pontuacao.push(prompt());

let resposta = console.log("Deseja inserir mais alguma equipe? ");
let desejaInserir = prompt();

do {
     
    console.log("Digite o nome da Equipe: ");
    nome.push(prompt());
        
    console.log("Qual foi a sua pontuação na competição? ");
    pontuacao.push(prompt());
    
    resposta = console.log("Deseja inserir mais alguma equipe? ");
    desejaInserir = prompt();

    for (i = 0; i < pontuacao.length; i++){
       for (j = i + 1; j < pontuacao.length; j++){
                if (pontuacao[i] > pontuacao[j]){
                    aux1 = pontuacao[i];
                    pontuacao[i] = pontuacao[j];
                    pontuacao[j] = aux1;
                                         
                }    
            }
            if (desejaInserir == "N"){
                nome.push("");
                pontuacao.push("");
                console.log(nome.length);
                console.log(pontuacao.length);
                for(i = 0;i <= nome.length; i++)   
                    console.log("O pódio de vencedores é: ");
                    console.log(nome + "\n" + pontuacao);
            break;
        }
    } 
} while (desejaInserir == "S")

//console.log(nome.length);
//console.log(pontuacao.length);