/* Um dia Adrian foi jogar D&D (Dungeons & Dragons) na casa de um amigo porém Adrian esqueceu seus dados, 
que são essenciais para o desenrolar do jogo. 
Adrian agora precisa criar um programa(DiceRoll) para rolar os dados do jogo, sendo eles :
"d4"(dado de quatro lados),
"d6"(dado de seis lados),
"d8"(dado de oito lados),"d10"(dado de dez lados),
"d12"(dado de doze lados,
"d20"(dado de vinte lados).
Logo após o programa dar a resposta, 
ele deve perguntar se Adrian quer rodar outro dado ou não. Executando assim o código novamente.
 */

const prompt = require("prompt-sync")();

do {
    console.log("Qual dado você deseja jogar?")
    console.log("Digite seu código");
    console.log("d4 | d6 | d8 | d12 | d20");
    
    var dadoEscolhido = prompt("");
    var rolaDado = true;

    if (dadoEscolhido == "d4") {
            var dadoQuatro = Math.floor(Math.random() * 5 + 1);
            console.log("O número do dado rolado é: " + dadoQuatro)
            console.log("-");
            var rolaDadodeNovo = prompt("Deseja rodar o dado novamente? (S ou N)");
            if (rolaDadodeNovo == "S")
                rolaDado = true;            
            else 
                break;           
        } else {
        if (dadoEscolhido == "d6"){
            var dadoSeis = Math.floor(Math.random() * 7 + 1);
            console.log("O número do dado rolado é: " + dadoSeis)
            console.log("-");
            var rolaDadodeNovo = prompt("Deseja rodar o dado novamente? (S ou N)");
            if (rolaDadodeNovo == "S")
                rolaDado = true;
            else
                break;
        } else {
            if (dadoEscolhido == "d8"){
                var dadoOito = Math.floor(Math.random() * 9 + 1);
                console.log("O número do dado rolado é: " + dadoOito)
                console.log("-");
                var rolaDadodeNovo = prompt("Deseja rodar o dado novamente? (S ou N)");
                if (rolaDadodeNovo == "S")
                    rolaDado = true;            
                else
                    break;
            } else {
                if (dadoEscolhido == "d12") {
                    var dadoDoze = Math.floor(Math.random() * 13 + 1);
                    console.log("O número do dado rolado é: " + dadoDoze)
                    console.log("-");
                    var rolaDadodeNovo = prompt("Deseja rodar o dado novamente? (S ou N)");
                    if (rolaDadodeNovo == "S")
                        rolaDado = true;            
                    else
                        break;
                } else {
                    if (dadoEscolhido == "d20"){
                        var dadoVinte = Math.floor(Math.random() * 21 + 1);
                        console.log("O número do dado rolado é: " + dadoVinte)
                        console.log("-");
                        var rolaDadodeNovo = prompt("Deseja rodar o dado novamente? (S ou N)");
                        if (rolaDadodeNovo == "S")
                            rolaDado = true;            
                        else
                            break;
                        
                    }
                }
            }
        }
    } 
} while(rolaDado = true);



//console.log("Deseja rodar o dado novamente? ");