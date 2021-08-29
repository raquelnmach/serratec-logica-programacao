/* 13.O programa “Estatístico” irá somar todos os números divisíveis por três entre 3 e 300, 
e além de exibir o resultado, irá dizer se o resultado também é divisível por três!*/

const prompt = require("prompt-sync")();

let soma = 0;

for (var i = 3; i <=300 ; i++){
    
    if ( i % 3 == 0){
        soma += i;
        //console.log(soma);
    }
}

console.log("O valor da soma é: " + soma);

let resultado = (soma % 3);

if (resultado == 0){
    console.log("O valor total da soma é SIM divisível por 3!");
} else {
    console.log("O valor total da soma NÃO é divisível por 3!");
}




