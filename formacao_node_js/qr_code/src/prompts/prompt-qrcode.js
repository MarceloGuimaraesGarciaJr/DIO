import chalk from "chalk";

const qrcodePrompt = [
    {
        name: "link", 
        description: chalk.yellow("Digite o link para gerar o QRCode"),
    },
    {
        name: "type", 
        description: chalk.yellow("Você quer gerar como 1 - Imagem | 2 - Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre 1 e 2"),
        required: true
    }

]

export default qrcodePrompt;