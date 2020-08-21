class Rectangulo extends Figura {
  contructor(lados){
    if(lados.length == 4){
      super(lados);
    } else {
      console.log("No se puede sacar el Rectangulo")
      }
      area(){
        if(this.lados[1] == this.lados[2]){
          this,lados[1] * this.lados[3]
        } else {
          this.lados[1] * this.lados[2]

        }
      }
    }
  }

class Circulo extends Figura{
  constructor(lados){
      radio = lados
    if(//radio.leght == 1){
    super(//radio);
      perimetro(){
         (radio^2) * Math.PI
      }
      area(){
          (Math.PI*2) * radio
      }
    } else {
    console.log("No se puede hacer un Circulo");
  }

}
area(){
  var result = (base * altura) / 2
  return result
}
//if(this.lados[1] + this.lados[2] > this.lados[3] ||
   //this.lados[1] + this.lados[3] > this.lados[2] ||
   //this.lados[1] + this.lados[2] > this.lados[3]) {


}
