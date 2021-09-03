/* 5.No sistema “Todas as tabuadas”, o aluno de matemática não precisa escolher o número: 
As tabuadas entre 2 e 10 serão impressas de uma vez. */

let tabuada = 0;

for (var i = 2; i <= 10; i++){
    console.log("Tabuada de " + i + ":");
    for (var j = 0; j <=10; j++){
        tabuada = i * j;
        console.log(i + " x " + j + " = " + tabuada);
    }
}

