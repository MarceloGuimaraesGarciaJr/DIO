let nomeHeroi = ""; 
let poderHeroi

//perguntar nome do heroi
nomeHeroi = prompt("Qual o nome do heroi?");

//perguntar poder do heroi
poderHeroi = prompt("Qual o poder do heroi? (entre 1000 e 10001");

poderHeroi = parseInt(poderHeroi);


if (poderHeroi <= 1000) {
    alert(`O Herói de nome **${nomeHeroi}** está no nível **Ferro**`);
} else if (poderHeroi >= 1001 && poderHeroi <= 2000) {
    alert(`O Herói de nome **${nomeHeroi}** está no nível **Bronze**`);
} else if (poderHeroi >= 2001 && poderHeroi <= 5000) {
    alert(`O Herói de nome **${nomeHeroi}** está no nível **Prata**`);
} else if (poderHeroi >= 5001 && poderHeroi <= 7000) {
    alert(`O Herói de nome **${nomeHeroi}** está no nível **Ouro**`);
} else if (poderHeroi >= 7001 && poderHeroi <= 8000) {
    alert(`O Herói de nome **${nomeHeroi}** está no nível **Platina**`);
} else if (poderHeroi >= 8001 && poderHeroi <= 9000) {
    alert(`O Herói de nome **${nomeHeroi}** está no nível **Ascendente**`);
} else if (poderHeroi >= 9001 && poderHeroi <= 10000) {
    alert(`O Herói de nome **${nomeHeroi}** está no nível **Imortal**`);
} else if (poderHeroi > 10000) {
    alert(`O Herói de nome **${nomeHeroi}** está no nível **Radiante**`);
} else {
    alert("Poder inválido. Por favor, insira um valor entre 1000 e Infinito.");
}

