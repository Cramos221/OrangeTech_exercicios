// Write a message to the console.

const etanol = 3.5;
const gasolina = 5.30;
const distancia = 100;
const tipo ='gasolina' ;
const kmporlitro = 8;
const litrosconsu= distancia/kmporlitro;


if(tipo ==='etanol'){
   
    let valorgasto = litrosconsu*etanol;
    console.log(valorgasto);
}else{
    let valorgasto = litrosconsu*gasolina;
    console.log(valorgasto);
}

