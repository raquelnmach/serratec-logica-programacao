/*
Desafio - Squad 4

Sempre tem aquela pessoa que sonha com algum animal e alguém fala para você jogar.
Como a IA costuma ter a cabeça nas nuvens, ela pode sonhar também com vários animais e diversas vezes. 
Será que o Animal que você sonhou é o mesmo da nossa IA?

Dicas:
• Crie uma função para gerar os números aleatórios.
• Diga sempre qual é o animal sorteado
• Diga se ele acertou ou não
• Dê uma nova chance até ele acertar.
*/

const prompt = require("prompt-sync")();

console.log('Olá. Você já sonhou com animais? Mesmo sendo uma IA, eu penso em vários animais. Será que o animal que você sonhou é o mesmo que o meu?\nAbaixo teremos uma lista numerada de animais. Escolha um número e vamos brincar!\n');
do {
    console.log('Escolha \n1-  🐣  | 2 - 🦅  | 3 - 🐴  |  4 - 🦋 | 5 -  🐶 | \n6 - 🐐  | 7 - 🐏  | 8 - 🐪  | 9 - 🐍  | 10 - 🐰 | \n11 - 🐎 | 12 - 🐘 | 13 - 🐓 | 14 - 🐱 | 15 - 🐊 | \n16 - 🦁 | 17 - 🐒 | 18 - 🐷 | 19 - 🦚 | 20 - 🦃 | \n21 - 🐂 | 22 - 🐯 | 23 - 🐻 | 24 - 🦌 | 25 - 🐄 |\n');
    var numero = prompt();
    var animalSorteado = Math.random() * 25 + 1;
    animalSorteado = Math.floor(animalSorteado);
    switch (animalSorteado) {        
        case 1: resultado = "O animal que eu sonhei foi: 🐣 Avestruz"; break;
        case 2: resultado = "O animal que eu sonhei foi: 🦅 Águia"; break;
        case 3: resultado = "O animal que eu sonhei foi: 🐴 Burro"; break;
        case 4: resultado = "O animal que eu sonhei foi: 🦋 Borboleta"; break;
        case 5: resultado = "O animal que eu sonhei foi: 🐶 Cachorro"; break;
        case 6: resultado = "O animal que eu sonhei foi: 🐐 Cabra"; break;
        case 7: resultado = "O animal que eu sonhei foi: 🐏 Carneiro"; break;
        case 8: resultado = "O animal que eu sonhei foi: 🐪 Camelo"; break;
        case 9: resultado = "O animal que eu sonhei foi: 🐍 Cobra"; break;
        case 10: resultado = "O animal que eu sonhei foi: 🐰 Coelho"; break;
        case 11: resultado = "O animal que eu sonhei foi: 🐎 Cavalo"; break;
        case 12: resultado = "O animal que eu sonhei foi: 🐘 Elefante"; break;
        case 13: resultado = "O animal que eu sonhei foi: 🐓 Galo"; break;
        case 14: resultado = "O animal que eu sonhei foi: 🐱 Gato"; break;
        case 15: resultado = "O animal que eu sonhei foi: 🐊 Jacaré"; break;
        case 16: resultado = "O animal que eu sonhei foi: 🦁 Leão"; break;
        case 17: resultado = "O animal que eu sonhei foi: 🐒 Macaco"; break;
        case 18: resultado = "O animal que eu sonhei foi: 🐷 Porco"; break;
        case 19: resultado = "O animal que eu sonhei foi: 🦚 Pavão"; break;
        case 20: resultado = "O animal que eu sonhei foi: 🦃 Peru"; break;
        case 21: resultado = "O animal que eu sonhei foi: 🐂 Touro"; break;
        case 22: resultado = "O animal que eu sonhei foi: 🐯 Tigre"; break;
        case 23: resultado = "O animal que eu sonhei foi: 🐻 Urso"; break;
        case 24: resultado = "O animal que eu sonhei foi: 🦌 Veado"; break;
        case 25: resultado = "O animal que eu sonhei foi: 🐄 Vaca"; break;
        default: console.log("Não foi informado o número certo. \nDigite um número dentre as opções que apareceram."); break;
        }
    console.log(resultado)

    var teste = (animalSorteado != numero)
    
    if (teste){
        console.log('Não sonhamos com o mesmo bicho!');   
    }
    else {
        console.log("Nossa! Nós sonhamos a mesma coisa!");    
    } 
    
}
while (teste);