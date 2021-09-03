/* 5.A bilheteria do cinema reservou todas as poltronas terminadas em 6 para deficientes. 
A sala de projeção possui 40 lugares, e para cada um, o sistema irá imprimir se o ingresso pode ser vendido ou não. */

for (var i = 1; i < 10; i++){
    let poltronaI = i.toString();
    let verificaSeisI = poltronaI.substring(0);
    if (verificaSeisI == 6){
        console.log(poltronaI + ": " + "O ingresso pode ser vendido!");
        continue;
    } else {
        console.log(poltronaI + ": " + "O ingresso não pode ser vendido!")
    }
}
for (var j = 10; j <= 40; j++){
        let poltronaJ = j.toString();
        let verificaSeisJ = poltronaJ.substring(1);
        if (verificaSeisJ == 6){
            console.log(poltronaJ + ": " + "O ingresso pode ser vendido!");
            continue;
        } else {
            console.log(poltronaJ + ": " + "O ingresso não pode ser vendido!")
        }
}





