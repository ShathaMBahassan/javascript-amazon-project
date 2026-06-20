console.log("load cart");
export const cart = [];

export function addToCart(product_id){
    let matchingItem;

    cart.forEach((cartItem) => {
            if (product_id === cartItem.id) {
                matchingItem = cartItem;
            }
    });

    
    if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push(
                {
                    id: product_id,
                    quantity: 1
                }
            )
        }
        console.log(cart);
}