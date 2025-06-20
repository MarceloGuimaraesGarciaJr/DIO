const {gets, print} = require('./auxFunctions.js');

let numerosDoDesafio = [5,3,4,1,10,8];
let maiorPar = 0;
let menorImpar = Infinity;

for (let i = 0; i < numerosDoDesafio.length; i++) {
    let numero = numerosDoDesafio[i] 
    if (numero % 2 === 0 && numero > maiorPar){
        maiorPar = numero;
    }else if (numero % 2 !== 0 && numero < menorImpar){
        menorImpar = numero;
    }
}


print(`O Maior Par é: ${maiorPar}`);
print(`O Menor Impar é: ${menorImpar}`);
