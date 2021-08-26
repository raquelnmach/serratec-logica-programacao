/*
Solicite o nome e a data de nascimento do usuário. Com essas informações, será gerado o
signo e uma descrição genérica e aleatória de sua personalidade.
*/

const ler = require("prompt-sync")();

var nome = ler("Qual seu nome ? ");
var dia = ler("Qual dia você nasceu? ");
var mes = ler("Qual mês você nasceu? ");

var aries = ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20));
var touro = ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20));
var gemeos = ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20));
var cancer = ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22));
var leao = ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22));
var virgem = ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22));
var libra = ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22));
var escorpiao = ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21));
var sagitario = ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21));
var capricornio = ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20));
var aquario = ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 18));
var peixes = ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20));



if (aries) {
    console.log(nome + ", Seu signo é Aries, parabéns. Não vou ser uma chama branda,  se eu nasci em fogo intenso. Você foi a melhor coisa que desapareceu da minha vida. Se minha sinceridade te assusta, é melhor nem chegar perto. Sou um amorzinho, mas para seu próprio bem, não me tire do sério.");
}
else if (touro) {
    console.log(nome + ", Seu signo é Touro, parabéns. De caráter forte, o taurino não se deixa levar pela opinião de qualquer pessoa. Não tenho vocação para o morno: ou congela, ou pega fogo! Quando se afasta não é por maldade, mas sim por ter se entregado demais sem receber nada de volta.");
}
else if (gemeos) {
    console.log(nome + ", Seu signo é Gemeos, parabéns. Prazer e Dor são representados com os traços gêmeos, formando como que uma unidade, pois um não vem nunca sem o outro; e se colocam um de costas para o outro porque se opõem um ao outro. É uma boa mulher. Faz o homem feliz. ");
}
else if (cancer) {
    console.log(nome + ", Seu signo é Cancer, parabéns. O coração cheio de amor para dar e a mente cheia de intuição, vê até o que mais está escondido. Ser de Câncer é transbordar sentimentos. É quem sabe que sensibilidade não é uma fraqueza. Paixão pela vida, pela família, pelos amigos e, se você tiver sorte, por você.");
}
else if (leao) {
    console.log(nome + ", Seu signo é Leao, parabéns. Tudo o que vai volta, mas nem tudo que volta encontra o que deixou. Nunca tente mentir pra mim, porque vou fingir que estou acreditando até a melhor oportunidade de jogar a verdade na tua cara. Tenho ciúmes do que é meu, do que não é meu, do que eu quero que seja meu, do já foi meu e do que nunca foi meu.");
}
else if (virgem) {
    console.log(nome + ", Seu signo é Virgem, parabéns. Virginiano quer sempre carregar tudo nas costas, mesmo sabendo que não suporta. Se eu tenho uma ideia na cabeça, é mais fácil tirar a cabeça do que a ideia! Aprendi que independente de quem você realmente é, as pessoas vão te enxergar como elas quiserem. Se não for para fazer perfeito, eu nem faço!");
}
else if (libra) {
    console.log(nome + ", Seu signo é Libra, parabéns. Libra: é medir demais as ações por medo de magoar alguém. É magoar alguém por medir demais as ações. Paz e harmonia: eis a verdadeira riqueza de uma família. Sou uma pessoa insegura, indecisa, sem rumo na vida, sem leme para me guiar: na verdade não sei o que fazer comigo.");
}
else if (escorpiao) {
    console.log(nome + ", Seu signo é Escorpiao, parabéns. para quem é oito ou oitenta. Não sou vingativo e nem cruel, apenas sou justo perante ao que me fizeram. Eu tenho o dom de transformar a vida de uma pessoa, posso leva-la ao céu ou ao inferno. Se a vida não ficar mais fácil, trate de ficar mais forte.");
}
else if (sagitario) {
    console.log(nome + ", Seu signo é Sagitario, parabéns. Sagitário é indomável feito o vento, marinheiro dos sete mares. É aventureiro, filho do mundo, amante do próprio amor. Coisas que sagitário nunca vai ter: paciência, sono nas horas certas, dinheiro sobrando, disposição matinal e saco pra gente idiota. Eu expando, logo existo.");
}
else if (capricornio) {
    console.log(nome + ", Seu signo é Capricornio, parabéns. São poucas as pessoas que sabem de mim, algo além do meu nome. Eu não pertenço a você, não é me dominando assim que você vai me entender. Dê-me uma alavanca longa o suficiente e um suporte forte o suficiente que eu poderei sozinho movimentar do mundo. E se não deu certo, eu levanto a cabeça e sigo em frente.");
}
else if (aquario) {
    console.log(nome + ", Seu signo é Aquario, parabéns. O aquariano está sempre procurando uma maneira de fazer do mundo um lugar melhor e adora receber elogios por isso! Sim, minha força está na solidão. Não tenho medo nem de chuvas tempestivas, nem das grandes ventanias soltas, pois eu também sou o escuro da noite. ... É inventar muito por medo de destruir tudo.");
}
else if (peixes) {
    console.log(nome + ", Seu signo é Peixes, parabéns. Os piscianos perdoam quantas vezes forem preciso, mas jamais voltam a confiar! Peço desculpas pela intensidade. Tudo para mim é multiplicado por cem, das dores aos amores. Ela é pisciana, mergulha dos pés à alma!");
}
else {
    console.log("Se você não recebeu sua mensagem sobre o seu signo, você digitou algo errado :C")
}
