/*"E então um milagre aconteceu e em uma linda sexta-feira, o nosso bebê nasceu.
Uau! Que incrível, nossa família cresceu! Somos papais de primeira viagem!
Mas espera um pouco aí, o que eu faço agora? Que choro é esse?
O que ela está fazendo?
Será que é: fome, sono, desconforto ou dor?
Você consegue me ajudar? Socorro!!"
Crie um programa que ajude esses papais de primeira viagem a identificar o que o bebê precisa através do seu choro. 
Caso o bebê tenha um choro diferente dos especificados, 
diga que o choro não foi reconhecido e que os papais precisam levar o bebê ao médico. 

Dica:
Choro de desconforto = "Éh" -> Verificar a fralda, frio ou calor.
Choro de fome = "Néh" ou "Nhé" -> Mamadeira ou Amamentar
Choro de sono = "Own" ou "Au ou "Ai" -> Colocar para dormir 
Choro de dor = "Unhé" + careta -> Pediatra e medicação*/

const prompt = require("prompt-sync")();

console.log(" == PROGRAMA DO BEBÊ == ")
console.log("Digite qual desses números corresponde ao choro do seu bebê: ");
console.log("1. Éh ");
console.log("2. Néh ");
console.log("3. Nhé ");
console.log("4. Own ");
console.log("5. Au ");
console.log("6. Ai ");
console.log("7. Unhé ");

var choro = prompt("");

switch (choro) {
    case "1" :
        console.log("Seu bebê está desconfortável. Verifique a fralda e a roupa pois ele pode estar com frio ou calor!");
        break;
    case "2": 
    case "3":
        console.log("Seu bebê está precisando ser alimentado. Você pode dar a mamadeira ou amamentá-lo!");
        break;
    case "4" :
    case "5" :
    case "6" :
        console.log("Seu bebê está com sono! Coloque-o para dormir. zzZZzz ");
        break;
    case "7":
        var checaCareta = prompt("Ele também está fazendo careta? (S ou N) ")
        if (checaCareta == "S"){
            console.log("Parece que seu bebê está com dor. Talvez ele precise de medicação. Ligue para o Pediatra!");
        } else {
            console.log("Não reconheço esse choro. Por favor, ligue para o Pediatra!");
        }
        break;
    default: 
        if ((choro != "1") || (choro != "2") || (choro != "3") || (choro != "4") || (choro != "5")|| (choro != "6")|| (choro != "7"))
        console.log("Digite um número de choro válido!"); 
        else 
        console.log("Não reconheço esse choro. Por favor, ligue para o Pediatra!");
}                        

/*
if (choro == "1") 
        console.log("Seu bebê está desconfortável. Verifique a fralda e a roupa pois ele pode estar com frio ou calor!");
else     
    if ((choro == "2") || (choro == "3"))
        console.log("Seu bebê está precisando ser alimentado. Você pode dar a mamadeira ou amamentá-lo!");
    else    
    if ((choro == "4")|| (choro == "5") || (choro == "6"))
        console.log("Seu bebê está com sono! Coloque-o para dormir. zzZZzz ");
    else    
    if (choro == "7"){
        var careta = prompt("Ele está fazendo careta? (S ou N) ");
        if (careta == "S"){
            console.log("Parece que seu bebê está com dor. Talvez ele precise de medicação. Ligue para o Pediatra!");
        } else {
            console.log("Não reconheço esse choro. Por favor, ligue para o Pediatra!");
        }
    }
if ((choro != "1") || (choro != "2") || (choro != "3") || (choro != "4") || (choro != "5")|| (choro != "6")|| (choro != "7"))
    console.log("Digite um número de choro válido!"); 
*/

