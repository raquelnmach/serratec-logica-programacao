/*10.	Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, 
e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.
x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
mod: resto; <>: diferente; ig: igual 
Nesse exercício você deverá manter as variáveis e substituir apenas os operadores. 
Pode ser necessário o uso de parênteses.
a.	x - y M a
b.	x - y * a M c mod y
c.	y <> c
d.	x * y <> c
e.	c mod y mi y mod c
f.	a m b
g.	z / a + x * y - 5 MI b
h.	c * z + 2 ig a * x + y
i.	c ig z + b
j.	y * 2 <> 7 - b
*/

const prompt = require("prompt-sync")();

var x = 6.0;
var y = 2;
var z = 4.000;
var a = 8;
var b = 7.5;
var c = 12;
var M = "maior que";
var m = "menor que";
var MI = "maior ou igual";
var mi = "menor ou igual";
var mod = "resto"
var diferente = "<>";
var ig = "igual";

var sentencaTouF = true;
var resultadoSentenca = sentencaTouF == (x - y) > a;
//(6 - 2) > 8 -> 4 > 8 -> false

if (sentencaTouF)
    console.log("a. " + resultadoSentenca);
    sentencaTouF = true;

resultadoSentenca = sentencaTouF == (x - y) * a > c % y;    
//(6-2) * 8 > 12mod2 -> 32 > 0 
if (sentencaTouF)
    console.log("b. " + resultadoSentenca);
    sentencaTouF = true;

resultadoSentenca = sentencaTouF == y != c;    
    
if (sentencaTouF)
    console.log("c. " + resultadoSentenca);
    sentencaTouF = true;

resultadoSentenca = sentencaTouF == (x * y) != c;    
    
if (sentencaTouF)
    console.log("d. " + resultadoSentenca);
    sentencaTouF = true;

resultadoSentenca = sentencaTouF == (c % y) <= (y % c) ;    
    
if (sentencaTouF)
    console.log("e. " + resultadoSentenca);
    sentencaTouF = true;

resultadoSentenca = sentencaTouF == a < b;    
    
if (sentencaTouF)
    console.log("f. " + resultadoSentenca);
    sentencaTouF = true;

resultadoSentenca = sentencaTouF == (z / a + x * y - 5) >= b;    
    
if (sentencaTouF)
    console.log("g. " + resultadoSentenca);
    sentencaTouF = true;

resultadoSentenca = sentencaTouF == ((c * z + 2) == (a * x + y));    
    
if (sentencaTouF)
    console.log("h. " + resultadoSentenca);
    sentencaTouF = true;

resultadoSentenca = sentencaTouF == (c == (z + b));    
    
if (sentencaTouF)
    console.log("i. " + resultadoSentenca);
    sentencaTouF = true;

resultadoSentenca = sentencaTouF ==	((y * 2) != (7 - b));    
    
if (sentencaTouF)
    console.log("j. " + resultadoSentenca);
    sentencaTouF = true;
    

