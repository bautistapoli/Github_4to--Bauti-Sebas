
class Personajes{
  constructor(health, shield, power){
    this.health = health
    this.shield = shield
    this.power = power
  }
  attack(player_2) {
    player_2.health = player_2.health - this.power + player_2.shield

  } spower(player_2){
    player_2.health = player_2 == Gigant ? player_2.health - this.power : player_2.health - this.power * 2
  }
}

class Archer extends Personajes{
  constructor(){
    super(120,45,90)
  }
}

class Knight extends Personajes{
  constructor(){
    super(150,50,50)
  }
}

class Gigant extends Personajes{
  constructor(){
    super(350,0,50)
  }
}


var turn = 0
var opponent = 1
var playerList = []

console.log("Hello, this game is call Characters")


/* Explicacion de como funciona esto:
Primero, creo un array con string asignada a cada jugador

Despues va el proceso de ataque:
El jugador x ataca al siguiente en la lista a menos que sea el ultimo
En el caso que sea el ultimo, este ataca al primero
Cada vez se pregunta si el jugador que va a ser atacado no tiene vida = 0
*/

function battle(array , players){
  /* Tengo un problema con esto, que cuando llamo varias veces a la funcion
  se sobreescribe los valores, entonces salta error
  */
  for (var i = 0 ; i < players ; i++){
    playerList.push(" player_" + i + " ")
  } console.log(playerList);

  do {
    var random_specs = Math.floor(Math.random() * 5) + 1 ;
    if (random_specs == 5){
        array[turn].spower(array[opponent])
        console.log("super power");
    } else if (random_specs > 1 && random_specs < 5 ) {
      array[turn].attack(array[opponent])
    } turn == players - 1 ? turn = 0 : turn += 1
      opponent == players - 1 ? opponent = 0 : opponent += 1
    } while (array[opponent].health > 0);

      array.splice(opponent , 1)
      playerList.splice(opponent , 1)
      console.log("Wins " + playerList);
      players = playerList.length
}

var game = function (players){
  if (players <= 1){
    window.alert("Sorry but the game cannot operate \n with less that two players");
  }else {
    var characters = []
    for(var i = 0 ; i < players ; i++){
      var random_num = Math.round(Math.random() * 3)
        switch (random_num) {
          case 1 :
            characters[i] = new Archer
            console.log(characters[i])
            break;
          case 2 :
            characters[i] = new Gigant
            console.log(characters[i])
            break;
          default:
            characters[i] = new Knight
            console.log(characters[i])
      }
    }
      battle(characters,players)
  }
}


/*el primer if es para la equivocacion del ataque
  el primer else es que no se equivoca
  despues es el super ataque


  do sencuense
  while (conditin); */
