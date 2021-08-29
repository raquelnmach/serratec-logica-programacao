/*8.	O abecedário da Xuxa agora segue cantando a definição musical até que a criança decida parar de ouvir, pressionando o zero. */

const prompt = require("prompt-sync")();

//console.log("Deseja parar de ouvir a música? Pressione 0 ");
//var desejaOuvir = prompt("");
var musicaTocando = true;

do {

    console.log("A de amor\n" +
    "B de baixinho\n" +
    "C de coração\n" +
    "D de docinho\n" +
    "E de escola\n" +
    "F de feijão\n" +
    "G de gente\n" +
    "H de humano\n" +
    "I de igualdade\n" +
    "J, juventude\n" +
    "L, liberdade\n" +
    "M, molecagem\n" +
    "N, natureza\n" +
    "O, obrigado\n" +
    "P, proteção\n" +
    "Q de quero-quernno\n" +
    "R de riacho\n" +
    "S, saudade\n" +
    "T de terra\n" +
    "U de universo\n" +
    "V de vitória\n" +
    "X, o que que é?\n" +
    "É Xuxa\n" +
    "E Z é zum-zum-zum-zum-zum\n" +
    "Vamos cantar\n" +
    "Vamos brincar\n" +
    "Alegria pra valer\n" +
    "O abecedário da Xuxa\n" +
    "Vamos aprender, yeah, yeah, yeah\n" +
    "Vamos cantar\n" +
    "Vamos brincar\n" +
    "Alegria pra valer\n" +
    "O abecedário da Xuxa\n" +
    "Vamos aprender\n" +
    "A de amor\n" +
    "B de baixinho\n" +
    "C de coração\n" +
    "D de docinho\n" +
    "E de escola\n" +
    "F de feijão\n" +
    "G de gente\n" +
    "H de humano\n" +
    "I de igualdade\n" +
    "J, juventude\n" +
    "L, liberdade\n" +
    "M, molecagem\n" +
    "N, natureza\n" +
    "O, obrigado\n" +
    "P, proteção\n" +
    "Q de quero-quero\n" +
    "R de riacho\n" +
    "S, saudade\n" +
    "T de terra\n" +
    "U de universo\n" +
    "V de vitória\n" +
    "X, o que que é?\n" +
    "É Xuxa\n" +
    "E Z é zum-zum-zum-zum-zum\n" +
    "Vamos cantar\n" +
    "Vamos brincar\n" +
    "Alegria pra valer\n" +
    "O abecedário da Xuxa\n" +
    "Vamos aprender, yeah, yeah, yeah\n" +
    "Vamos cantar\n" +
    "Vamos brincar\n" +
    "Alegria pra valer\n" +
    "O abecedário da Xuxa\n" +
    "Vamos aprender, yeah, yeah, yeah\n" +
    "Vamos cantar\n" +
    "Vamos brincar\n" +
    "Alegria pra valer\n" +
    "O abecedário da Xuxa\n" +
    "Vamos aprender, yeah, yeah, yeah\n" +
    "Vamos cantar\n" +
    "Vamos brincar\n" +
    "Alegria pra valer\n" +
    "O abecedário da Xuxa");
    console.log("Testando")
    console.log("Se deseja parar de ouvir a música: Pressione 0 ");    
    var desejaOuvir = prompt("");
    if (desejaOuvir == "0")
     break;    
} while (musicaTocando)
