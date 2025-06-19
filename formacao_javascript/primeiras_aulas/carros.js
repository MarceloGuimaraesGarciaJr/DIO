/* criar uma classe de carros com modelo, cor e consumo por km rodado, depois criar um método que calcula o custo de um percurso com o valor do combustível */
class Carro{

    constructor(modelo, cor, consumoPorKm){
        this.modelo = modelo;
        this.cor = cor;
        this.consumoPorKm = consumoPorKm;
    }

    calculaPercurso(distancia, precoCombustivel,consumoPorKm){
        let consumoTotal = distancia/consumoPorKm; 
        let custoTotal = consumoTotal * precoCombustivel; 
        return custoTotal;
    }
}

const voyage = new Carro ('Voyage','prata',12.4);

let percursoFinal = voyage.calculaPercurso(200, 5.40, voyage.consumoPorKm);

console.log(`O custo do percurso é de R$ ${percursoFinal.toFixed(2)}`);