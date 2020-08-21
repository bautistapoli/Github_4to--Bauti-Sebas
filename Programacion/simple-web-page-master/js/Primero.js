var perimetro = 0


class Cuadrilatero{
  constructor(lados) {
    if (lados.length == 4){
    this.lados = lados
  }else {
    window.alert("No es un Cuadrilatero")
    break;
  }
}
  perimetro() {
    for(var i = 0; i < this.lados.length ; i++ ){
      perimetro = perimetro + this.lados[i]
  }
    console.log(perimetro)
  }
}

class Cuadrado extends Cuadrilatero{
  constructor (lados){
    if (lados[0] == lados[1] && lados[1] == lados[2] && lados[1] == lados[3]){
      super(lados);
      this.lados = lados
    } else{
      window.alert("No es un cuadrado la forma")
    }
  }
    area (){
        console.log(Math.pow(this.lados[0], 2));
  }
}

class Rectangulo extends Cuadrilatero{
  constructor (lados){
    if (lados.length == 4){
    if (lados[0] == lados[1] && lados[2] == lados[3]){
      super(lados);
      this.lados = lados
    } else if (lados[0] == lados[1] && lados[2] == lados[3]){
      super(lados);
      this.lados = lados
    }
  }
}
    area (){
      if (this.lados[0] == this.lados[1]){
        console.log(Math.pow(this.lados[0], 2));
    }
  }
}

//new_figure_1.its_a_figure("figure")
var nuevo = new Cuadrilatero([3,3,2,2])
nuevo.perimetro()

var nuevo_cuadrado = new Cuadrado([3,3,3,3])
nuevo_cuadrado.area()
