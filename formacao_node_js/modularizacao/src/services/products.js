//all functions about products

async function getFullName(codId,productName) {
    console.log("product " + codId + " -- " + productName)
}

async function getProductName(productName){
    console.log('Product ' + productName)
}

module.exports = {
    getFullName, getProductName
}