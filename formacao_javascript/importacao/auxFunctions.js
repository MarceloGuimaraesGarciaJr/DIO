let i = 0;
let notas = [5.5, 8,2]
function gets(){
    const valor = notas[i]
    i++
    return valor;

}

function print(mensagem){
    console.log(mensagem);
}
module.exports = {gets,print};  