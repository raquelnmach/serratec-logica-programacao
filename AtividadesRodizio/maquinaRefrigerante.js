/*
Uma famosa empresa de refrigerantes precisa de um software para rodar no console das
suas novas máquinas pela cidade. O cliente precisa que o console máquina de refrigerante
exiba quatro opções de sabores diferentes, ficando a critério do(a) desenvolvedor(a) exibir
os preços dos refrigerantes junto com o sabor ou exibir o preço do refrigerante escolhido em
uma tela posterior. Caso opte por exibir o valor do produto escolhido em uma tela posterior,
será necessário acrescentar uma opção para o usuário voltar para a tela de escolha de
sabores após verificar o preço do produto escolhido. Após a tela de escolha, o software
deve exibir uma tela para pagamentos apresentando quatro opções de cédulas. Após o
cliente escolher a opção de pagamento, o programa deve exibir uma mensagem com o
troco a ser devolvido para o cliente. Porém, caso o valor da cédula escolhida seja inferior ao
valor do refrigerante, o programa deve exibir uma mensagem de valor inválido e retornar o
usuário novamente para a tela de escolha das cédulas até que uma opção de pagamento
válida seja escolhida.
Os refrigerantes possuem os seguintes preços:
• R$ 1,99
• R$ 3,50
• R$3,99
• R$6,00
O cliente deseja opções de pagamentos com as seguintes cédulas:
• R$ 2,00
• R$5,00
• R$10,00
• R$20,00*/


const prompt = require("prompt-sync")();

function refriValido(B){

   var A = (B == "Uva") || (B == "Laranja") || (B == "Limao") || (B == "Morango"); 
   return !A;
}
function cedulaValida(B){

    var A = (B == "2.00") || (B == "5.00") || (B == "10.00") || (B == "20.00");
    return A;
}


console.log("Olá, aqui está o cardápio de refrigerantes: ");
console.log("Uva: R$ 1,99 | Laranja: R$ 3,50 | Limao: R$3,99 |  Morango: R$ 6,00. ");

do{

  var refrigerante = prompt("Qual refrigerante você deseja? ");
  var semEstoque = refriValido(refrigerante);
  var valor = 0;

    switch(refrigerante){
        case 'Uva':
            console.log("O valor a ser pago é R$ 1,99.");
            valor = 1.99;
            break;
        case 'Laranja':
            console.log("O valor a ser pago é R$ 3,50.");
            valor = 3.50;
            break;
        case 'Limao':
            console.log("O valor a ser pago é R$ 3,99.");
            valor = 3.99;
            break;
        case 'Morango':
            console.log("O valor a ser pago é R$ 6,00.");
            valor = 6.00;
            break;
        default:
            console.log('Atenção a escrita do cardápio! As opções válidas são: "Uva", "Laranja", "Limao" e "Morango" ');
    }
}
while(semEstoque);

do{

  var pagamento = prompt("Qual a sua opção de pagamento? R$ 2.00 | R$ 5.00 | R$ 10.00 | R$ 20.00. ");
  var naoPagou = "";
  var troco =0;

    if(cedulaValida(pagamento)&& (pagamento > valor)){
        pagamento = parseFloat(pagamento);
        troco = parseFloat(pagamento - valor);

        console.log("Obrigado pela compra, aqui está seu troco: R$" , troco.toFixed(2), "." );
        naoPagou = false;
    }else{
        console.log("Atenção as formas de pagamento disponíveis ou se o seu dinheiro é suficiente!");
        naoPagou = true;
    }
    
}
while(naoPagou);

