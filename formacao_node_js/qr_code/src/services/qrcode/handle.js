import qr from "qrcode-terminal"  
import chalk from "chalk";

async function handleQr(err,result) {
    if(err) {
    console.log('Application has an error!')
    return;
    }
    const isSmall = result.type == 2
    console.log(isSmall)
    qr.generate(result.link, {small:isSmall}, (qrcode) => {
        console.log(chalk.bgBlue(`${qrcode}\nQR Gerado com sucesso!`))
    } )
}

export default handleQr