class Figura {
  constructor(lado) {
    this.lado = lado;
  }
  is_figure (figure){
    if (figure == "figura"){
      console.log("Es una figura")
    } else {
      console.log("No es una figura")
    }

  }
  design() {
    if (this.lado == 1){
      console.log("es un circulo");
    } else if (this.lado == 2){
      console.log("No existe");
    } else if (this.lado == 3){
      console.log("es un triangulo");
    } else if (this.lado == 4){
      console.log("es un cuadrado")
    } else{
      console.log("es otro poligono");
    }
  }
}

class Rectangulo {
  constructor(lados){
    this.lados = la
    dos
  }
  for(i = 0; i < this.lados.length; i++){
  if(this.lados[i] == this.lados[i+1]  )

  area(){
    var base = this.lados[0]
    if (base != this.lados[1]){
      var altura = this.lados[1]
    }else{
      var altura = this.lados[2]
    }
    console.log(base * altura)
  }
}

var new_figure_1 = new Figura(3,"figura");
var new_figure_2 = new Figura(4, "figura");

var rec1 = new rectangulo([3,4,4,3])


//new_figure_1.its_a_figure("figure")
new_figure_1.design()
new_figure_2.design()
rec1.area()
