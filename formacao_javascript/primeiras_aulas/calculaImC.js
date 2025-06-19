class Pessoa {

    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
    calculaIMC() {
        const imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2);
    }

    classificaIMC() {{
            const imc = this.calculaIMC();
            if (imc < 18.5) {
                return 'Abaixo do peso';
            } else if (imc < 24.9) {
                return 'Peso normal';
            } else if (imc < 29.9) {
                return 'Sobrepeso';
            } else if (imc < 34.9) {
                return 'Obesidade grau 1';
            } else if (imc < 39.9) {
                return 'Obesidade grau 2';
            } else {
                return 'Obesidade grau 3';
            }
        }
    }
}

const pessoa1 = new Pessoa('Marcelo', 30, 80, 1.73);

console.log(`O IMC de ${pessoa1.nome} é ${pessoa1.calculaIMC()} e a classificação é ${pessoa1.classificaIMC()}`);