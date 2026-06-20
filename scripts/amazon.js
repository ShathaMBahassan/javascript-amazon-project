import {products} from  "../data/products.js";
import {cart} from  "../data/cart.js";

console.log("Load js");

console.log(products);
let product_html = '';


products.forEach((product) => {
    product_html += `
        <div class="product-container">
            <div class="product-image-container">
                    <img class="product-image"
                    src="images/products/${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                    ${product.name}
            </div>

            <div class="product-rating-container">
                    <img class="product-rating-stars"
                    src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                    ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                    $${(product.priceCents / 100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart-btn" data-product-id="${product.id}">
                Add to Cart
            </button>

        </div>
        `
    const view_product = document.querySelector('.js-products-grid').innerHTML = product_html;

});

let quantity = 0;
let found = false;
let add_to_cart_btn = document.querySelectorAll('.js-add-to-cart-btn').forEach((addCartBtn) => {
    addCartBtn.addEventListener('click', () => {
        const product_id = addCartBtn.dataset.productId;

        let matchingItem;

        cart.forEach((item) => {
            if (product_id === item.id) {
                matchingItem = item;
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
        // Total Quantity 
        let total = 0;
        cart.forEach((totalQuantity) => {
            total = total + totalQuantity.quantity;
        });

        console.log(`the number of products in the cart are ${total}`);
        document.querySelector('.js-cart-quantity').innerHTML=total;
    });
});















