/*Cliente precisa de um programa para obter informações a respeito dos elementos dos seus Axies, 
informando qual elemento possui vantagem ou desvantagem sobre o outro. 
Informações sobre os elementos dos axies : 
("Beast", "Bug" e "Mech) < ("Aquatic", "Bird" e "Dawn") <("Reptile", "Plant" e "Dusk") < ("Beast", "Bug" e "Mech)*/


const prompt = require("prompt-sync")();

console.log("Digite qual elemento deseja saber a respeito: ");
var elemento = prompt();

switch (elemento){
    case "Beast":
    case "Bug":
    case "Mech":
        console.log("Esse elemento possui vantagem contra: Reptile , Plant e Dusk. ");
        console.log("Esse elemento possui desvantagem contra: Aquatic, Bird e Dawn")
        break;
    case "Aquatic":
    case "Bird":
    case "Dawn":
        console.log("Esse elemento possui vantagem contra: Beast, Bug e Mech. ");
        console.log("Esse elemento possui desvantagem contra: Reptile , Plant e Dusk. ")
        break;
    case "Reptille":
    case "Plant":
    case "Dusk":
        console.log("Esse elemento possui vantagem contra: Aquatic, Bird e Dawn. ");
        console.log("Esse elemento possui desvantagem contra: Beast, Bug e Mech");
        break;
    default:
        console.log("Elemento inválido.")
        break;    
}

