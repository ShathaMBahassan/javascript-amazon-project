console.log("Load js");


// Products Data 
const products = 
    [
        {
            image: 'athletic-cotton-socks-6-pairs.jpg' ,
            name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
            priceCents: 1090,
            rating: 
            {
                stars: 4.5,
                count: 87
            }
        }, 
        {
            image: 'intermediate-composite-basketball.jpg',
            name: 'Intermediate Size Basketball',
            priceCents: 2095,
            rating:
                {
                    stars: 4,
                    count: 127 
                }
        },
        {
            image:'adults-plain-cotton-tshirt-2-pack-teal.jpg',
            name: 'Adults Plain Cotton T-Shirt - 2 Pack',
            priceCents: 799,
            rating: 
                {
                    stars: 4.5,
                    count: 56
                } 
        },
        {
            image:'black-2-slot-toaster.jpg',
                name: '2 Slot Toaster - Black',
                priceCents: 1899,
                rating: 
                    {
                        stars: 5,
                        count: 2197
                    }   
        }
    ];

let product_html = '';


products.forEach( (product) => {
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

            <button class="add-to-cart-button button-primary">
                Add to Cart
            </button>

        </div>
        `
    const view_product = document.querySelector('.js-products-grid').innerHTML = product_html;
});




