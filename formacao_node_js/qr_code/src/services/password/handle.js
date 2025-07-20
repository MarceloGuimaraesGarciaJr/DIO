async function generateChars() {
    let chars = []
    if(process.env.UPPERCASE_LETTERS === "true"){
        chars.push(..."ABCDEFGHIJKLMNOPQRSTUVWYXZ")
    }
    if(process.env.LOWERCASE_LETTERS === "true"){
        chars.push(..."abcdefghijklmnopqrstuvwyxz")
    }
    if(process.env.NUMBERS === "true"){
        chars.push(..."0123456789")
    }
    if(process.env.SPECIAL_CHARACTERS === "true"){
        chars.push("!@#$%&*")
    }
    return chars
}

async function handle(){
    let password = ""
    let password_length = process.env.PASSWORD_LENGTH 
    let chars = await generateChars();
    for (let index = 0; index < password_length; index++) {
        const index = Math.floor(Math.random() * chars.length)
        password += chars[index];
    }

    return password
}

export default handle