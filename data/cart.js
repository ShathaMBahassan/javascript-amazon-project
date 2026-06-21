console.log("cart load");

export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        id: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2
    },
    {
        id: '901eb2ca-386d-432e-82f0-6fb1ee7bf969',
        quantity: 4
    }];
}



function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(product_id) {
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
    saveToStorage();
}


export function removeFromCart(product_id) {
    let newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.id !== product_id) {
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToStorage();
}