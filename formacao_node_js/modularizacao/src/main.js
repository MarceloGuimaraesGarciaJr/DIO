const p  = require("./services/products");


async function main(params) {
    console.log(`Carrinho compras: `);
    p.getFullName('408', 'mousepad')
    p.getFullName('58', 'teclado')
    p.getProductName('Consolo')
}
main()