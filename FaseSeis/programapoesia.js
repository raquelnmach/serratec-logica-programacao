/**7.	No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. 
Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos. */

const prompt = require("prompt-sync")();

function poesia(){
    var poema = console.log("(Amor é fogo que arde sem se ver - Luíz Vaz de Camões)" +
    " \n" + " \n" +
    "Amor é fogo que arde sem se ver,\n" +
    "é ferida que dói, e não se sente;\n" +  
    "é um contentamento descontente,\n" +
    "é dor que desatina sem doer.\n" +
    " \n" +
    "É um não querer mais que bem querer;\n" + 
    "é um andar solitário entre a gente;\n" +
    "é nunca contentar-se de contente;\n" +
    "é um cuidar que ganha em se perder.\n" +
    " \n" +
    "É querer estar preso por vontade;\n" +
    "é servir a quem vence, o vencedor;\n" +
    "é ter com quem nos mata, lealdade.\n" +
    " \n" +
    "Mas como causar pode seu favor\n" +
    "nos corações humanos amizade,\n" +
    "se tão contrário a si é o mesmo Amor.");

    return poema;
}

poesia();
console.log("Deseja apreciar novamente o poema? Digite ( S ou N ): ");
let exibirNovamente = prompt();

do { 
    if (exibirNovamente == "S"){
    poesia();
    console.log("Deseja apreciar novamente o poema? Digite ( S ou N ): ");
    exibirNovamente = prompt();
    } else {
        if (exibirNovamente == "N")
            console.log("Até mais.")
            break;
    }
} while (exibirNovamente)
