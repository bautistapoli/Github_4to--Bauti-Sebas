
class Personajes{
  constructor(health, shield, power){
    this.health = health
    this.shield = shield
    this.power = power
  }
  attack(player_2) {
    player_2.health = player_2.health - this.power + player_2.shield

  } spower(player_2){
    this.spower = this.attack(player_2) * 2
  }
    toString(){

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

console.log("Hello, this game is call Characters")


/* Tengo dos problemas:
No se como hacer la caracteristica toString
No se como no eliminar a los personajes que pierden, y igualmente tener un valor final
*/


function battle(array, type){
  let player = 0
  var opponent = 1
  var playerList = array.lenght

  do {
    let random_specs = Math.floor(Math.random() * 5) + 1 ;
    if (random_specs == 5){
        array[player].spower(array[opponent])
        console.log("super power");
    } else if (random_specs > 1 && random_specs < 5 ) {
      array[player].attack(array[opponent])
    }  if (type === "turns"){
        player = player == array.lenght - 1 ? 0 : player + 1
        opponent = player == array.lenght - 2 ? 0 : opponent + 1
      } else{
        player = Math.floor(Math.random() * array.lenght) + 1
        opponent = Math.floor(Math.random() * array.lenght) + 1
      }
      array[player].health <= 0 ? (playerList--, array.splice(player)) :  array[opponent].health <= 0 ? array.splice(opponent) :  null
      }
    } while (playerList > 1 );
      return  array.name()
}

const game = function (players){
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
      battle(characters)
  }
}




/*
  condición ? expr1 : expr2
  do sencuense
  while (conditin); */
