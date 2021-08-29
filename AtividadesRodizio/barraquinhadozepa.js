/* Zepa tem uma barraquinha na feira, onde vende café e 5 tipos de doces: bala, pirulito, bombom, paçoca e jujuba. 
Mas quem é cliente do Zepa sabe que nunca tem café nem paçoca na sua barraquinha. 
Quando chega um cliente, ele é sempre gentil e saudoso, avisando sobre Tudo que ele vende. 
Quando alguém escolhe um item que ele tem na barraquinha, ele agradece a pessoa pelo item comprado, 
e quando alguém pede paçoca ou café, ele confessa seus vícios e pede desculpa pois devorou o estoque. 
E se o cliente pedir algo que ele não vende, o Zepa educadamente pede para que o cliente escolha um produto válido. 
Dica: Use paçoca como "pacoca" e café como "cafe". */

const prompt = require("prompt-sync")();

console.log("◫◫◫◫◫◫◫◫◫◫◫◫◫◫◫◫◫◫◫◫◫◫◫◫◫◫◫");
console.log(" == Barraquinha do Zepa == ");
console.log("▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥◫◫◫◫◫◫◫◫");
console.log("Olá! Seja Bem Vindo a minha barraquinha! ");
console.log("Eu tenho:" + "\n" + "▸ Café " + "\n" + "▸ Bala  " + "\n" + "▸ Pirulito" + "\n" + "▸ Bombom" + "\n" + "▸ Paçoca" + "\n" + "▸ Jujuba");
console.log("O que você deseja? ");
console.log("Por favor escreva: Paçoca = Pacoca | Café = Cafe");

var itemEscolhido = prompt("");

switch (itemEscolhido) {
    case "Bala":
    case "Pirulito":
    case "Bombom":
        console.log("Aqui está!" + "✿" + " Obrigada pela sua compra. Volte sempre e tenha um bom dia! ⁀‿⁀ ");
        break;
    case "Pacoca":
    case "Cafe":
        console.log("Xiii.. me desculpe mas eu acabei com o estoque! Confesso que eu Tenho lá meus vícios. ¯\_(ツ)_/¯ ");
        break;
    default:
        console.log("oh não! Isso eu não tenho. =(" + "\n" + "Você poderia, por gentileza, escolher outro produto?  ヅ ");
}
