/* 15.	Para exibir a tabela de “temperaturas”, 
o programa irá exibir os graus Celsius entre 0º e 40ºC, além da equivalência com os graus Fahrenheit. */

let tempCelsius = 0;

let tempFahrenheit = 0;

console.log(":: Celsius x Fahrenheit ::");

for (tempCelsius = 0; tempCelsius <= 40; tempCelsius++){
    tempFahrenheit = (tempCelsius * 1.8) + 32;
    console.log(tempCelsius + " = " + tempFahrenheit.toFixed(2));
}

