var turno = 2

class Personajes{
  constructor(life, shield, power){
    this.life = life
    this.shield = shield
    this.power = power
  }
  attack() {
    if (turno % 2 == 0){
      player_1.life = player_1.life - player_2.power
      player_1.life = player_1.life + player_1.shield
    } else {
      player_2.life = player_2.life - player_1.power
      player_2.life = player_2.life + player_2.shield
    }
    turno = turno + 1
  }
}

class Archer extends Personajes{
  constructor(life,shield,power){
    super(life,shield,power)
    this.life = 120
    this.shield = 15
    this.power = 90
  }
}

class Knight extends Personajes{
  constructor(life,shield,power){
    super(life,shield,power)
    this.life = 150
    this.shield = 50
    this.power = 50
  }
}

class Gigant extends Personajes{
  constructor(life,shield,power){
    super(life,shield,power)
    this.life = 750
    this.shield = 0
    this.power = 60
  }
}

var player_1 = new Gigant
var player_2 = new Archer
