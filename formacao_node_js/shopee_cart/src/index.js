import createItem from "./services/itens.js";
import * as cartService from "./services/cart.js"
import * as wishlistService from  "./services/wishlist.js"

const cart = []; 
const myWhishList = [];


console.log('Welcome to shopee cart! \n');

const item1 = await createItem("HotWheels Ferrari",20.99, 7); 
const item2 = await createItem("HotWheels Lamborghini",39.99, 2);



await cartService.addItem(cart,item1); 
await cartService.addItem(cart,item2);

await cartService.displayItens(cart);
await cartService.cartTotal(cart)

console.log('\n')
console.log('Removendo itens em quantidade\n')

await cartService.removeItens(cart,1,2)
await cartService.displayItens(cart);


console.log('Shopee Cart total:');
await cartService.cartTotal(cart);


//adicionando a wishlist 
console.log('\n')
console.log('Wishlist')
wishlistService.addWishlist(myWhishList,item1);
wishlistService.addWishlist(myWhishList,item2);
wishlistService.displayWishlist(myWhishList);

console.log('\n')
console.log('Wishlist after removal method')

wishlistService.removeWishList(myWhishList,1);
wishlistService.displayWishlist(myWhishList);




