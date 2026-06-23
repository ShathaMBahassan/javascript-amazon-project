import { formatCurrency } from "./utils/money.js";
import { cart, removeFromCart, saveToStorage , getCartItem } from "../data/cart.js";
import { products } from "../data/products.js";
import { delivery_options } from "./utils/deliveryOptions.js"
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

console.log("load js");

let cart_html = '';

console.log();

cart.forEach((cartItem) => {

    let productPrice = 0;
    const productItem = products.find((product) => {
        return product.id === cartItem.id;
    });


    cart_html += `<div class="cart-item-container 
                    js-cart-item-container-${productItem.id}">
            <div class="delivery-date js-delivery-date-${productItem.id}">
              Delivery date: ${deliveryDate(7)}
            </div>
            <div class="cart-item-details-grid">
              <img class="product-image"
                src="images/products/${productItem.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${productItem.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(productItem.priceCents) * cartItem.quantity}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update-product">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-product" data-product-id="${productItem.id}">
                    Delete
                  </span>
                </div>
              </div>
                <div class="delivery-options js-delivery-card">
                ${deliveryOptionHTML(delivery_options, productItem, cartItem)}
                </div>
            </div>
          </div>`;

    document.querySelector(".js-product-added").innerHTML = cart_html;

    updateDeliveryOptions();

});

document.querySelectorAll('.js-delete-product').forEach((link) => {
    link.addEventListener("click", () => {
        const product_id = link.dataset.productId;
        removeFromCart(product_id);

        const card = document.querySelector(`.js-cart-item-container-${product_id}`);
        card.remove();
    });
});


function deliveryDate(numOfDays) {
    const today = dayjs();
    const deliveryDate = today.add(numOfDays, "days");
    return deliveryDate.format("dddd, MMMM D");
}


function deliveryOptionHTML(delivery_options, productItem, cartItem) {

    let delivery_options_html = "";

    delivery_options_html = `<div class="delivery-options-title">Choose a delivery option:</div>`;


    delivery_options.forEach((option) => {

        let price = (option.priceCents === 0) ? "FREE Shipping" : `$${formatCurrency(option.priceCents)} - Shipping`;

        const isChecked = (option.id === cartItem.delivery_options_id) ? 'checked' : '';

        delivery_options_html += `
        <div class="delivery-option js-delivery-option" data-delivery-option-id="${option.id}" data-product-option-id="${productItem.id}">
                  <input type="radio" ${isChecked}
                    class="delivery-option-input"
                    name="delivery-option-${productItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      ${deliveryDate(option.delivery_days)}
                    </div>
                    <div class="delivery-option-price">
                      ${price}
                    </div>
                  </div>
                </div>
        `

    });
    return delivery_options_html;
}

function updateDeliveryOptions() {

    document.querySelectorAll(".js-delivery-option").forEach((optionBtn) => {

        optionBtn.addEventListener('click', () => {

            // Data attribute 
            const product_id = optionBtn.dataset.productOptionId;
            const option_id = optionBtn.dataset.deliveryOptionId;

            // Save option id into cart item
            const matchingItem = getCartItem(product_id);


            if (matchingItem) {
                matchingItem.delivery_options_id = option_id;
                saveToStorage();
            }

            // Generate delivery date in product card
            delivery_options.forEach((optionItem) => {
                if (optionItem.id === option_id) {
                    const delivery_expect = deliveryDate(optionItem.delivery_days);

                    let delivery_title_html = document.querySelector(`.js-delivery-date-${product_id}`);
                    delivery_title_html.innerHTML = `Delivery date: ${delivery_expect}`;
                }
            });
        });
    });
}







