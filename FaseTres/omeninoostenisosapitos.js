/*O menino, os tênis e os apitos
Observe as quatro equações abaixo, a partir das quais você pode identificar que cada figura (menino, tênis e apitos) 
possui um valor diferente. Seu desafio é descobrir qual é o resultado da última equação. 
Preste muita atenção, pois os detalhes fazem a diferença!
Dicas:
1.	Crie suas variáveis utilizando os nomes de cada símbolo na imagem (Ex. menino).
2.	Use comentários para transcrever a equação de cada linha em formato de texto. Pode também escrever no console.
3.	Escreva o algoritmo em formato de solução, resolvendo a equação como se o fizesse no papel (Tia Terezinha diria: Resolve para x...)
4.	As equações da imagem são expressões matemáticas simples, portanto, em algumas delas você precisará redefinir a precedência das operações.
5.	Faça primeiro o desafio de cabeça ou no papel, depois compare com o resultado do seu algoritmo: Será que você acertou?
6.	Aproveite para conferir o seu resultado com os colegas do seu squad
*/

var prompt = require("prompt-sync")();

// O valor da Equação Um é 30. Logo o valor de tenis é igual a 10.
var tenis = 10;

//Percebendo que o menino da Equação dois possui um apito no pescoço e são iguais.
// tenis + meninoComApito + meninoComApito;
//10 + meninoComApito + meninoComApito = 20
//2 * meninoComApito = 20 - 10
//meninoComApito = (20 - 10)/2;
var meninoComApito = 5;

//Na terceira Equação os apitos estão em pares. Ou seja, são dois por imagem.
// meninoComApito + 2 * apito + 2 * apito = 13
// 4 * apito = 13 - 5
// apito = 8/4
var apito = 2;

/*Percebendo que temos duas operações, adição e multiplicação. Apenas um apito. 
E o menino sem o apito no pescoço, sendo portanto uma figura com valor diferente do outro menino das primeiras equações.
Devemos então subtrair desse menino com apito o valor do apito! */

var equacaoQuatro = (tenis/2) + (meninoComApito-apito) * apito;

console.log("O resultado da última equação é: " + equacaoQuatro)

