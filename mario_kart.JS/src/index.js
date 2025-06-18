const player1 = {
    name:"MARIO",
    speed:"4",
    manuverability:"3",
    strength:"3",
    points:0,
}

const player2 = {
    name:"LUIGI",
    speed:"3",
    manuverability:"4",
    strength:"4",
    points:0,
}

async function rollDice(){
    return Math.floor(Math.random( ) * 6 + 1);
 }

 async function getRandomBlock() {
    let random = Math.random()
    let result 

    switch (true){
        case (random < 0.33):
            result = "RETA";
            break;
        case (random < 0.66):
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
    }
    return result;
 }
 async function playRaceEngine(character1,character2) {

    for (let round = 1 ; round <= 5; round++) {
        console.log(`🏁 Round ${round} starts!`);
        //roll dice for both players
        
        let block = await getRandomBlock();
        console.log(`Block: ${block}`);
   }
    
 }

 (async function main(){
    console.log(
        `🏁 Race between ${player1.name} and ${player2.name} starts soon!\nRace Start!`
    );
    await playRaceEngine(player1, player2);
 })();





