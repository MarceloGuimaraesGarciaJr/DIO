const {gets, print} = require('./auxFunctions.js');
let nota = gets();

if(nota < 5){
    print('Reprovado');
}else if (nota >=5 || nota <7 ){
    print('Recuperação');
}else{
    print('Aprovado');
}
