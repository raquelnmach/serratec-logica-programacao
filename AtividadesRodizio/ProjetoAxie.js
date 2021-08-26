  /* Cliente precisa de um programa para obter informações a respeito dos elementos dos seus Axies, informando qual elemento possui vantagem ou desvantagem sobre o outro.
Informações sobre os elementos dos axies :
("Beast", "Bug" e "Mech) < ("Aquatic", "Bird" e "Dawn") <("Reptile", "Plant" e "Dusk") < ("Beast", "Bug" e "Mech)
  */
  var prompt = require('prompt-sync')();

  //Entrada
  var elemento = prompt("Qual elemento do seu Axie?  ")

 //Saída
  switch (elemento) {
      case "Reptile":{
  
      console.log('Seu axie é fraco contra "Beast", "Bug" e "Mech".');
      console.log('Seu axie é forte contra "Aquatic", "Bird" e "Dawn".');
      }
      break;
      case "Plant":{
        console.log('Seu axie é fraco contra "Beast", "Bug" e "Mech".');
        console.log('Seu axie é forte contra "Aquatic", "Bird" e "Dawn".');
        }
        break;
        case "Dusk":{
            console.log('Seu axie é fraco contra "Beast", "Bug" e "Mech".');
            console.log('Seu axie é forte contra "Aquatic", "Bird" e "Dawn".');
            }
            break;
            case "Beast":{
                console.log('Seu axie é fraco contra "Aquatic", "Bird" e "Dawn".');
                console.log('Seu axie é forte contra "Reptile", "Plant" e "Dusk".');
                }
                break;
                case "Bug":{
                    console.log('Seu axie é fraco contra "Aquatic", "Bird" e "Dawn".');
                    console.log('Seu axie é forte contra "Reptile", "Plant" e "Dusk".');
                    }
                    break;
                    case "Mech":{
                        console.log('Seu axie é fraco contra "Aquatic", "Bird" e "Dawn".');
                        console.log('Seu axie é forte contra "Reptile", "Plant" e "Dusk".');
                        }
                        break;
                        case "Aquatic":{
                            console.log('Seu axie é fraco contra "Reptile", "Plant" e "Dusk".');
                            console.log('Seu axie é forte contra "Beast", "Bug" e "Mech".');
                            }
                            break;
                            case "Bird":{
                                console.log('Seu axie é fraco contra "Reptile", "Plant" e "Dusk.');
                                console.log('Seu axie é forte contra "Beast", "Bug" e "Mech".');
                                }
                                break;
                                case "Dawn":{
                                    console.log('Seu axie é fraco contra "Reptile", "Plant" e "Dusk.');
                                    console.log('Seu axie é forte contra "Beast", "Bug" e "Mech".');
                                    }
                                    break;
                  
                           
    default:
      console.log("O elemento informado para Axie é inválido.");
      
}
    