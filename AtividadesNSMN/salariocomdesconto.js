/*Implemente um programa que receba do usuário o valor do salário bruto de um funcionário 
e imprima o valor com descontos de INSS, FGTS e Plano de Saúde. 
O programa deve utilizar uma função para calcular cada um dos descontos, sendo que estas funções devem receber o valor do salário bruto 
e retornar o valor a ser descontado. 
Os valores descontados devem ser: INSS: 10% do valor bruto , FGTS: 8%, Plano de Saúde: R$100,00 
O programa deve informar um salário com valor igual ou acima do salário mínimo. 
Se for informado um salário menor, informar que está errado. */

const prompt = require("prompt-sync")();

var salarioMinimo = 1100.00;

var salarioBruto = parseFloat(prompt("Qual é o valor do salário bruto do funcionário? "));

function calculaDescontoInss(){
    //var descontoInss = salarioBruto + (salarioBruto * 0,1);
    return salarioBruto * 0.1;
}

function calculaDescontoFGTS(){
    //var descontoFGTS = salarioBruto + (salarioBruto * 0,08);
    return salarioBruto * 0.08;
}

var descontoInss = calculaDescontoInss();
var descontoFGTS = calculaDescontoFGTS();

var descontoPlanodeSaude = 100.00;

var calculaSalarioComDescontos = salarioBruto - (descontoInss + descontoFGTS + descontoPlanodeSaude);

if (salarioBruto>=salarioMinimo) {
    console.log("Salário informado acima do valor do Salário Mínimo.");
    console.log("Valor com desconto de Inss, FGTS e Plano de Saúde: " + calculaSalarioComDescontos);
} else {
    console.log("Salário informado menor que o Salário Mínimo e portanto não compatível com os descontos.");
}


