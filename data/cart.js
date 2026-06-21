console.log("load cart");
export const cart = [{
    id:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
},
{
    id:'901eb2ca-386d-432e-82f0-6fb1ee7bf969',
    quantity: 4
}];

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