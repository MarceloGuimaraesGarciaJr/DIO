//quais ações meu carrinho pode fazer 

// adicionar itens 
// deletar itens 
// remover um item 

async function addItem(userCart,item) {
    userCart.push(item);
}

async function deleteItens(userCart,name) {
    const index = userCart.findIndex((item)=> item === name)
    userCart.splice(index); 
}

async function removeItens(userCart, index, quant) {
    let indexToRemove = index -1 
    userCart[indexToRemove].quantity -= quant
}


async function cartTotal(userCart) {
    let result =  userCart.reduce((total, item)=> total + item.subtotal(),0)
    console.log(result)
} 

async function displayItens(userCart) {
    userCart.forEach((item,index) =>  {
        console.log(`${index+1}. ${item.name}|$ ${item.price} | Quantity ${item.quantity} - Subtotal $${item.subtotal(item)}`)
    });
    
}
export {
    addItem,
    cartTotal,
    removeItens,
    deleteItens,
    displayItens
}