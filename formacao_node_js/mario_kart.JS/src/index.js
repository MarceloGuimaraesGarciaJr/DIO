const player1 = {
    name:"MARIO",
    speed:4,
    manuverability:3,
    strength:3,
    points:0,
}

const player2 = {
    name:"LUIGI",
    speed:3,
    manuverability:4,

    strength:4,
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
            result = "STRAIGHT";
            break;
        case (random < 0.66):
            result = "TURN";
            break;
        default:
            result = "FACE-OFF";
    }
    return result;
 }
 async function logRollResult(characterName,block,diceResult,attribute){ 
    console.log(`The player ${characterName} roll the dice ${block}! The result is ${diceResult} + ${attribute} = ${parseInt(diceResult)+parseInt(attribute)}`)
 }
async function declareWinner (character1,character2) { 

        let totalPointsOne = character1.points 
        let totalPointsTwo = character2.points

        if (totalPointsOne > totalPointsTwo){ 
            console.log(`The player ${character1.name} wins with ${totalPointsOne} the player ${character2.name} score ${totalPointsTwo}\n`)
        } else if (totalPointsTwo > totalPointsOne) {
            console.log(`The player ${character2.name} wins with ${totalPointsTwo} points! the player ${character1.name} score ${totalPointsOne} points!\n`)
        }
}


 async function playRaceEngine(character1,character2) {

    for (let round = 1 ; round <= 5; round++) {
        console.log(`🏁 Round ${round} starts!`);
        //roll dice for both players
        
        let block = await getRandomBlock();
        console.log(`Block: ${block}`);
   

        //roll the dice 

        let diceResultOne = await rollDice()
        let diceResultTwo = await rollDice()
        
        //skills test 

        let totalTestSkillOne = 0
        let totalTestSkillTwo = 0

        //Ifs for tests + dice 

        if (block == "STRAIGHT"){
            
            totalTestSkillOne = character1.speed + diceResultOne
            totalTestSkillTwo = character2.speed + diceResultTwo

            await logRollResult(character1.name,"STRAIGHT",diceResultOne,character1.speed)
            await logRollResult(character2.name,"STRAIGHT",diceResultTwo,character2.speed)

        } else if(block == "TURN"){

            totalTestSkillOne = character1.manuverability + diceResultOne
            totalTestSkillTwo = character2.manuverability + diceResultTwo
            
            await logRollResult(character1.name,"TURN",diceResultOne,character1.manuverability)
            await logRollResult(character2.name,"TURN",diceResultTwo,character2.manuverability)
            

        } else{
            
            totalTestSkillOne = character1.strength + diceResultOne
            totalTestSkillTwo = character2.strength + diceResultTwo
            
            await logRollResult(character1.name,"FACE-OFF",diceResultOne,character1.strength)
            await logRollResult(character2.name,"FACE-OFF",diceResultTwo,character2.strength)
        }
        
        // verify who wins!

        if (block != "FACE-OFF") {
            parseInt(totalTestSkillOne) > parseInt(totalTestSkillTwo)
            ? (character1.points += 1, console.log(`The player ${character1.name} wins the round!`))
            : parseInt(totalTestSkillOne) < parseInt(totalTestSkillTwo)
                ? (character2.points += 1, console.log(`The player ${character2.name} wins the round!`), console.log("_________________________"))
                : (console.log(`We have a draw!`), console.log("_________________________"));
        } else {
            if (parseInt(totalTestSkillOne) > parseInt(totalTestSkillTwo)) {
            character1.points += 1;
            console.log(`The ${character1.name} wins the round ${round}!`);
            console.log("_________________________");
            character2.points = character2.points === 0 ? character2.points : character2.points - 1;
            } else if (parseInt(totalTestSkillTwo) > parseInt(totalTestSkillOne)) {
            character2.points += 1;
            console.log(`The ${character2.name} wins the round ${round}!`);
            console.log("_________________________");
            character1.points = character1.points === 0 ? character1.points : character1.points - 1;
            } else {
            console.log(`We have a draw!`);
            console.log("_________________________");
            }
        }

    
    }
  
}

 (async function main(){
    console.log(
        `🏁 Race between ${player1.name} and ${player2.name} starts soon!\nRace Start!`
    );
    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);

 })();





