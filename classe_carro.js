/*criar uma classe carro com marca, cor e gasto, e um metodo que calcule o gasto da viagem*/


class Carro{
    marca;
    cor;
    gastoMedioKm ;
 
    constructor(marca, cor, gastoMedioKm){
     this.marca = marca;
     this.cor = cor;
     this.gastoMedioKm = gastoMedioKm;
 }
    calcularGasto(distancia, preco){
     return distancia*this.gastoMedioKm*preco;
 
    }
 }
 
 
 const uno = new Carro('Fiat','Prata',1/12);
 
 console.log(uno.calcularGasto(70,5) )
 
 const palio = new Carro('Fiat','Prata',1/10);
 
 console.log(palio.calcularGasto(70,5) )