var prompt = require("prompt-sync")();

/*O sistema irá solicitar a digitação da sigla da "UF" de onde você mora. 
E o programa irá dizer o nome completo do estado. Para as UFs do sudeste, considerar a entrada em maiúsculas ou minúsculas.*/

//Entrada
var UF = prompt("Qual a sigla UF do Estado onde você mora?");

//Processamento
var nomeCompleto = "";

switch (UF) {
    case "AC" : nomeCompleto = "Acre";                  break;
    case "AL" : nomeCompleto = "Alagoas";               break;
    case "AM" : nomeCompleto = "Amazonas";              break;
    case "AP" : nomeCompleto = "Amapa";                 break;
    case "BA" : nomeCompleto = "Bahia";                 break;
    case "CE" : nomeCompleto = "Ceara";                 break;
    case "DF" : nomeCompleto = "Distrito Federal";      break;
    case "ES" : nomeCompleto = "Espirito Santo";        break;
    case "GO" : nomeCompleto = "Goias";                 break;
    case "MA" : nomeCompleto = "Maranhao";              break;
    case "MG" : nomeCompleto = "Minas Gerais";          break;
    case "MS" : nomeCompleto = "Mato Grosso do Sul";    break;
    case "MT" : nomeCompleto = "Mato Grosso";           break;
    case "PA" : nomeCompleto = "Para";                  break;
    case "PB" : nomeCompleto = "Paraiba";               break;
    case "PE" : nomeCompleto = "Pernambuco";            break;
    case "PI" : nomeCompleto = "Piaui";                 break;
    case "PR" : nomeCompleto = "Parana";                break;
    case "RJ" : nomeCompleto = "Rio de Janeiro";        break;
    case "RN" : nomeCompleto = "Rio Grande do Norte";   break;
    case "RO" : nomeCompleto = "Rondonia";              break;
    case "RR" : nomeCompleto = "Roraima";               break;
    case "RS" : nomeCompleto = "Rio Grande do Sul";     break;
    case "SC" : nomeCompleto = "Santa Catarina";        break;
    case "SE" : nomeCompleto = "Sergipe";               break;
    case "SP" : nomeCompleto = "São Paulo";             break;
    case "TO" : nomeCompleto = "Tocantins";             break;
    default: nomeCompleto = "Outro estado";
  }


//Saida
var saida = console.log("O nome completo do Estado é: " + nomeCompleto);

