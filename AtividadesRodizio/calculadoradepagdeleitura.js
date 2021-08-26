/*
Calculadora de Páginas de leitura vs. Deadline (prazo final)
O algoritmo proposto deve funcionar da seguinte maneira:
Deve cumprimentar de forma simples o usuário, sem a necessidade de saber quem está sendo saudado.
Perguntar ao usuário que livro ele está lendo, 
quantas páginas esse livro tem, 
e em quantos dias ele precisa ler o livro. 
Com as condições que a quantidade de páginas e dias devem ser 1 ou maior.

Entregar ao usuário o resultado da conta de (páginas / dias) de forma elegante, sem casas decimais e arredondando para cima (ex: 2.4 = 3).
Recomendar ao usuário uma nova leitura para ser realizada após o termino da que ele está iniciando, em caso de:
o livro ter menos de 100 páginas ou igual: Revolucao dos Bichos e O Alienista.
o livro ter entre 101 e 499 páginas: O Homem Invisivel e Eu, Robo.
o livro ter mais de 500 páginas ou igual: Moby Dick e Duna.

Com as condições que apenas uma recomendação deve ser feita, e o livro respondido pelo usuário não pode ser o mesmo da recomendação.
*/

const prompt = require ("prompt-sync")();

console.log("Olá. Seja Bem Vindo a Calculadora de Páginas de Leitura!");

console.log("Qual livro você está lendo nesse momento? ");
var livroLendo = prompt("");

console.log("Quantas páginas esse livro tem? Digite um número maior ou igual a 1: ");
var paginasLivroLendo = prompt("");

console.log("Em quantos dias você precisa ler esse livro? Digite um número maior ou igual a 1: ");
var diaslivroLendo = prompt("");

var calculaPaginasDias = Math.ceil(paginasLivroLendo / diaslivroLendo);

var recomendacao1, recomendacao2 = "";

console.log("Prezada(o), Calculamos que você levará " + calculaPaginasDias + " dias para ler esse livro.");

if (paginasLivroLendo <= 100) {
    recomendacao1 = "Revolucao dos Bichos";
    recomendacao2 = "O Alienista";
} else {
    if (paginasLivroLendo > 100 && paginasLivroLendo < 500){
        recomendacao1 = "O Homem Invisivel"
        recomendacao2 = "Eu, Robo";
    } else {
        if (paginasLivroLendo >= 500)
            recomendacao1 = "Mobi Dick"; 
            recomendacao2 = "Duna";
        }
}

if ((livroLendo == recomendacao1) || (livroLendo == recomendacao2)){
    console.log ("Que coincidência! Nós íamos sugerir exatamente o mesmo livro que você está lendo.");
    if (livroLendo == recomendacao1){
        console.log("Aceita uma sugestão? ");
        console.log("Que tal começar a ler um novo livro após esse? Você também pode gostar desse livro: " + recomendacao2);}
    else{
        console.log("Aceita uma sugestão? ");
        console.log("Que tal começar a ler um novo livro após esse? Você também pode gostar desse livro: " + recomendacao2);
    }
} else {
    console.log("Aceita uma sugestão? ");
    console.log("Que tal começar a ler um novo livro após esse? Você também pode gostar desse livro: " + recomendacao1);
}





