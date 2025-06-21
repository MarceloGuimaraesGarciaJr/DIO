const {gets, print} = require('./auxFunctions.js');


/* de 0 a 1100 = 5¨% 
de 1100 a 2500 = 10%
de 2500 +  = 15%
*/

function calculaSalario(salario) {
if (salario <= 1100){
    salarioComDescontos = (salario * 0.95) + 250; 
    print(`Salário com desconto de 5%: R$ ${salarioComDescontos.toFixed(2)}`);
}else if (salario > 1100 && salario <= 2500){
    salarioComDescontos = (salario * 0.90) + 250; 
    print(`Salário com desconto de 10%: R$ ${salarioComDescontos.toFixed(2)}`);
}else if (salario > 2500){
    salarioComDescontos = (salario * 0.85) + 250;
    print(`Salário com desconto de 15%: R$ ${salarioComDescontos.toFixed(2)}`); 
}
}

calculaSalario(gets());
calculaSalario(gets());
