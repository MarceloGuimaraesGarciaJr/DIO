
//Gera um array de números de 1 a 100
const numbers = Array.from({length: 100}, (_, i) => i + 1);

// Verifica se os números são pares ou ímpares
for (let i = 0; i < numbers.length; i++) {
    let pares = numbers[i] % 2 === 0; 
    if (pares === true) {
        console.log(`O número ${numbers[i]} é par`);
    }else {
        console.log(`O número ${numbers[i]} é ímpar`);
    }
}
