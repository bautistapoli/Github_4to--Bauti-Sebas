
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
    super(120,25,90)
  }
}

class Knight extends Personajes{
  constructor(){
    super(150,50,50)
  }
}

class Gigant extends Personajes{
  constructor(){
    super(450,0,50)
  }
}


var turn = 0
//if (turno % 2 == 0){
//   player_1.life = player_1.life - player_2.power
//   player_1.life = player_1.life + player_1.shield
// } else {
//   player_2.life = player_2.life - player_1.power
//   player_2.life = player_2.life + player_2.shield
// }
// turno = turno + 1

console.log("Hello, this game is call Characters")

var player_one;
var player_two;
var characters = [player_one , player_two]


var raffle = function (characters){
  }

// turn 0 is for player 1

function fight(player_one, player_two){
  while (player_one.health > 0 && player_two.health > 0){
    var random_specs = Math.floor(Math.random() * 10) + 1;
      if (random_specs >= 9){
        if (turn == 0){
          player_one.spower(player_two)
          console.log("super attack from player one") 
        } else {
          player_two.spower(player_one)
          console.log("super attack from player two")
        }
      } else if (random_specs > 2 && random_specs < 9 ) {
        turn == 0 ? player_one.attack(player_two) : player_two.attack(player_one)
      } turn = turn == 1 ? 0 : 1
    }
  var winner = player_two.health <= 0 ? "Wins player one " : "Wins player two"
  console.log(winner);
}

var game = function (characters){
  for(var i = 0 ; i < 2 ; i++){
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
    fight(characters[0], characters[1]);
    console.log(player_one)
  }


// el primer if es para la equivocacion del ataque
// el primer else es que no se equivoca
// despues es el super ataque


//do sencuense
//while (conditin);
