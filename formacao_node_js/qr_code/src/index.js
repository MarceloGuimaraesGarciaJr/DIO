import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import chalk from "chalk";
import createQrCode from "./services/qrcode/create.js";

async function main() {
    prompt.get(mainPrompt, async (err,choose) => {
        if (choose.select == 1 ) await createQrCode()
        if (choose.select == 2 ) console.log(chalk.bgBlackBright ('Escolheu password'))
    })
    prompt.start()    
}

main()

