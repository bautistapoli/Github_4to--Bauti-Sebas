
class Personajes{
  constructor(health, shield, power){
    this.health = health
    this.shield = shield
    this.power = power
  }
  attack(player_2) {
    player_2.health = player_2.health - this.power + player_2.shield
  }
}

class Archer extends Personajes{
  constructor(){
    super(120,15,90)
  }
}

class Knight extends Personajes{
  constructor(){
    super(150,50,50)
  }
}

class Gigant extends Personajes{
  constructor(){
    super(750,0,60)
  }
}

var player_1 = new Gigant
var player_2 = new Gigant
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





// el primer if es para la equivocacion del ataque
// el primer else es que no se equivoca
// despues es el super ataque

var who_wins = function( player_one , player_two){
  while (player_one.health > 0 && player_two.health > 0){
    var random_specs = Math.floor(Math.random() * 10) + 1;
    //console.log(random_specs)
    if (random_specs <= 2){
      console.log(turn == 1 ? "Player 2 failed the attack" : "Player 1 failed the attack");
      turn = turn == 1 ? 0 : 1
    }else {
      if(turn == 0){
        player_one.attack(player_two)
        turn++
        // player_two.health = random_specs >= 9 ? player_two.health - player_one.power : player_two.health
        if (random_specs >= 9){
          console.log("Super attack to player 2");
          player_two.health = player_two.health - player_one.power
        }
      }else {
        player_two.attack(player_one)
        turn = turn - 1
        if (random_specs >= 9){
          console.log("Super attack to player 2");
          player_two.health = player_two.health - player_one.power
        }
      }
    }
  }
  var winner = player_two.health <= 0 ? "Wins player one " : "Wins player two"
  console.log(winner)
}

// var opponent = function (){
//   var random_num = Math.round(Math.random() * 3)
//     switch (random_num) {
//       case 1 :
//         var jugador_1 = new Archer
//         console.log(jugador_1)
//         break;
//       case 2 :
//         var jugador_1 = new Gigant
//         console.log(jugador_1)
//         break;
//       default:
//         var jugador_1 = new Knight
//         console.log(jugador_1)
//       }
//     }
