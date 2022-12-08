/*classe com metodo para calcular imc*/

class Pessoa{
    nome;
    peso;
    altura;
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura=altura;

    }
    calcularimc(){
        return this.peso/(this.altura*this.altura);
    }
    classificaIMC(){
        const imc=this.calcularimc();
        if(imc<18.5){
            return ('abaixo do peso')
        }else if(imc >= 18.5 && imc<25){
            return ('peso normal')
        } else if(imc >= 25 && imc<30){
            return ('Acima do peso')}
        else if(imc >= 30 && imc<40){
            return ('obeso')
        }else{
            return ('Obesidade grave')
        }
    }

}

const joao = new Pessoa('joao',70,1.65);
console.log(joao.classificaIMC())
const cleisson = new Pessoa('cleisson', 90,1.67);
console.log(cleisson.classificaIMC())
