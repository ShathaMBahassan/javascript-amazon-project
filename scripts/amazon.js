import { products } from  "../data/products.js";
import { cart , addToCart } from  "../data/cart.js";
import { formatCurrency } from "./utils/money.js";


console.log("Load js");

let product_html = '';

products.forEach((product) => {
    product_html += `
        <div class="product-container">
        
            <div class="product-image-container">
                    <img class="product-image"
                    src="${product.getImage()}">
            </div>

            <div class="product-name limit-text-to-2-lines">${product.name}</div>

            <div class="product-rating-container">
                <img class="product-rating-stars" src="${product.getStars()}">
                <div class="product-rating-count link-primary">${product.rating.count}</div>
            </div>

            <div class="product-price">${product.getPrice()}</div>

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

function updateCartQuantity() {
  let total = 0;

  cart.forEach((cartItem) => {
    total += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = total;
}

updateCartQuantity(); 

let quantity = 0;
let found = false;
let add_to_cart_btn = document.querySelectorAll('.js-add-to-cart-btn').forEach((addCartBtn) => {
    addCartBtn.addEventListener('click', () => {
        const product_id = addCartBtn.dataset.productId;
        addToCart(product_id);
        updateCartQuantity();
    });
});





















