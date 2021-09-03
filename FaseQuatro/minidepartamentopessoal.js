/* 16.	O programa “mini departamento pessoal” lê a quantidade de horas trabalhadas por um funcionário em um mês, 
o valor que ele recebe por hora e o percentual de desconto para o INSS, e calcula:
a.	O salário bruto (horas trabalhadas * valor hora)
b.	O valor do desconto para o INSS
c.	O salário líquido (adicionais menos descontos).
d.	Após os cálculos, será impresso o contracheque.
O contracheque é a exibição no console das informações com formatação: 
Salário bruto, valor do desconto do INSS, e o salário líquido do funcionário.
*/

const prompt = require("prompt-sync")();

console.log("Qual a quantidade de horas trabalhadas no mês? ");
let horasTrabalhadas = prompt();

console.log("Qual o valor recebido por hora? ");
let valorhora = prompt();

console.log("Qual é o percentural de desconto para o INSS? ");
let percdescontoInss = prompt();

let salarioBruto = horasTrabalhadas * valorhora;

let calculaDescontoInss = salarioBruto * (percdescontoInss/100);

let adicionais = 420.00;

let salarioliquido = salarioBruto - calculaDescontoInss + adicionais;

console.log("== Contra-Cheque ==");
console.log("Salário Bruto: R$" + salarioBruto);
console.log("Valor do Desconto do INSS: R$" + calculaDescontoInss);
console.log("Salário Líquido: R$" + salarioliquido);




