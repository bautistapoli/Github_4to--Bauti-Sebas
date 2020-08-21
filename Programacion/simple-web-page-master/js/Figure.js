class Figura {
  constructor(lados){
    this.lados = lados
  }

  perimetro(){
    console.log("Calculando el perimetro");
    var result = 0
    for(var i = 0 ; i < this.lados.length ; i++){
      result = result + this.lados[i];
    }
    return result
  }
  area(){
    console.log("Calculando el area");
  }

}

class Triangulo extends Figura {
  constructor(lados) {
    if(lados.length == 3){
      super(lados);
    } else {
      console.log("No se puede realizar un triangulo");
      }
    }
  }



window.onload = function() {
  // We will not use this yet

  // var result = [];
  // result.push(sum(2,3), substraction(3,1));
  // document.getElementsByClassName('result')[0].innerText = result



}
