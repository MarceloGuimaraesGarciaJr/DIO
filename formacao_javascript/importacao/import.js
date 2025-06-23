const {gets, print} = require('./auxFunctions.js');


let medias = [];
for (let i = 0; i > 3 ; i++){
   medias.push(nota.gets())
}

print(medias);

if(nota < 5){
    print('Reprovado');
}else if (nota >=5 || nota <7 ){
    print('Recuperação');
}else{
    print('Aprovado');
}
