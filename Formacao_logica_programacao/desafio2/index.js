let matchesNumber = 100; 
// Criar randomizador de vitórias ou derrotas de um jogador 

function matches(matchesNumber,winRate = 0.2) {
   
    let points = 0; 

    for (let i = 0; i <= matchesNumber; i++){
    let matches = Math.floor(Math.random() > winRate);
    if (matches == 1){
        points++ 
    }
    
}
    return points;
}
// Criar classificação do jogador após 100 partidas; 
/*
- Menos de 10 vitórias: **Ferro**
- Entre 11 e 20 vitórias: **Bronze**
- Entre 21 e 50 vitórias: **Prata**
- Entre 51 e 80 vitórias: **Ouro**
- Entre 81 e 90 vitórias: **Diamante**
- Entre 91 e 100 vitórias: **Lendário**
- 101 vitórias ou mais: **Imortal**

*/
function classification(points) {
    if (points < 10) {
        return "Ferro";
    }else if (points >= 11 && points <= 20) {
        return "Bronze";
    } else if (points >= 21 && points <= 50) {
        return "Prata";
    } else if (points >= 51 && points <= 80) {
        return "Ouro";
    } else if (points >= 81 && points <= 90) {
        return "Diamante";
    } else if (points >= 91 && points <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}
let points = matches(matchesNumber);
let ranking = classification(points);

console.log(`O Jogador jogou ${matchesNumber} partidas e venceu ${points}, sua classifcação é: ${ranking}`);


