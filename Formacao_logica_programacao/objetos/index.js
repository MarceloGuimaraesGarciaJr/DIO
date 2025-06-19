let invoice = {
    name: "João",
    age: 30,
    products:[
        {
            name: "Notebook",
            price: 2500,
            quantity: 1 
        },
        {   name: "Mouse",
            price: 100,
            quantity: 2
        },
    ]
}

function generateInvoice(invoice){
    console.log(`Fatura de ${invoice.name}`);
    console.log(`Idade: ${invoice.age}`);
    console.log("-----------------------------")  
for(let i in invoice.products){
    console.log(`Produto: ${invoice.products[i].name}`);
    console.log(`Preço: R$ ${invoice.products[i].price}`);
    console.log(`Quantidade: ${invoice.products[i].quantity}`);
    console.log(`Total: R$ ${(invoice.products[i].price * invoice.products[i].quantity).toFixed(2)}`);
    console.log("-----------------------------")        ;
}
}

console.log("Gerando fatura...");
generateInvoice(invoice);