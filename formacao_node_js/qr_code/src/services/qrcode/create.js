import chalk from "chalk"
import qrcodePrompt from "../../prompts/prompt-qrcode.js"
import qrCode from "qrcode-terminal"
import prompt from "prompt"
import handleQr from "./handle.js"
prompt.start()
async function createQrCode() {
    prompt.get(qrcodePrompt,handleQr)
}

export default createQrCode