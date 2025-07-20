import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
    let password =  await handle()

    return console.log(chalk.bgBlack.yellowBright(`A senha gerada é: ${password}`))
}  


export default createPassword