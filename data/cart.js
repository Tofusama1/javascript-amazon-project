//export can be used outside of cart.js
export let cart = [{
    //you don't need to copy everything like the image and the price, you can normalize the data
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
}];

export function addToCart(productId) {
    let matchingItem;
  
          cart.forEach((cartItem) => {
              if(productId === cartItem.productId){
                  matchingItem = cartItem;
              }
          })
  
          if(matchingItem){
              matchingItem.quantity += 1;
          } else {
              cart.push({
                  productId: productId,
                  quantity: 1
              });
          }
}

 export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    cart = newCart;
}