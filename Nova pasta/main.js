


const {gets, print}= require('./funloes-auxiliares');


const numerosSorteados = [];
let maiorvalor =0;
for (let i = 0; i < 8; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
    if (numerosSorteado>maiorvalor){
        maiorvalor = numerosSorteado;
     }
}



print(maiorvalor);