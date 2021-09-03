/* 16.No antigo programa “topa tudo por dinheiro”, o Silvio Santos chamava uma moça do auditório para contar os números de 1 a 40, 
substituindo por “pim” os números com final quatro ou múltiplos de quatro.
Um, dois, três, pim, cinco, seis..
Dica: Não é necessário exibir os números por extenso.
*/


for(var i = 1; i <=40; i++){
    if (i % 4 == 0 || i == 14 || i == 24 || i == 34){
       console.log("pim");
    } else if (i % 4 != 0){
        console.log(i);
    } 
}


