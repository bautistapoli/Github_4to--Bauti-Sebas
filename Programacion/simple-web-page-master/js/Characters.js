
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
var player_2 = new Archer

//if (turno % 2 == 0){
//   player_1.life = player_1.life - player_2.power
//   player_1.life = player_1.life + player_1.shield
// } else {
//   player_2.life = player_2.life - player_1.power
//   player_2.life = player_2.life + player_2.shield
// }
// turno = turno + 1


var who_wins = function( player1, player2 ){
  if (player1.health != 0 || player2.health != 0){
    console.log("Hola")
    // for (i = 0 ; i < 3  ; i++){
    //   if (i * 1 == 1){
    //     player_2.attack(player_1)
    //   } else {
    //     player_1.attack(player_2)
    //   }
    //   if (i == 1){
    //     i = i - 2
    //   }
    //}
  } if (player_2.health == 0){
      return(player_1)
    } else if(player_1.health == 0){
        return(player_2.health)
  }
}
