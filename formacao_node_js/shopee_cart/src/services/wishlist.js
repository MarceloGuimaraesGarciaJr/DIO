//adicionar a wishList 

async function addWishlist(userWishlist, item) {
    userWishlist.push(item);
}

//remover da wishlist 

async function removeWishList(userWishlist,index) {
    userWishlist.splice(index-1)
}

//listar Wishlist 

async function displayWishlist(userWishlist) {
    userWishlist.forEach((item,index) => {
        console.log(`${index+1}. ${item.name}`)
    });
}

export {
    removeWishList,displayWishlist,addWishlist
}