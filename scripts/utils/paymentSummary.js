import { cart , saveToStorage } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { delivery_options } from "./deliveryOptions.js";


export let payment_summary = [
{
id:'1',
name: 'Items',
priceCents: totalCartPrice()
},
{
id:'2',
name: 'Shipping & handling' ,
priceCents: totalShippingPrice()
},
{
id:'3',
name: 'Total before tax' ,
priceCents: 0
},
{
id:'4',
name: 'Estimated tax (10%)' ,
priceCents: ''
},
{
id:'5',
name: 'Order total' ,
priceCents: 0
},
];


export function totalCartPrice(){
    let total =0;
    cart.forEach((cartItem)=>{

        const productItem = products.find((product) => {
        return product.id === cartItem.id;
    });
         total += productItem.priceCents * cartItem.quantity;
    });
    return total;
}

export function totalShippingPrice(){
     let total =0;

    cart.forEach((cartItem) => {
    const deliveryOption = delivery_options.find((option) => {
      return option.id === cartItem.delivery_options_id;
    });

    if (deliveryOption) {
      total += deliveryOption.priceCents;
    }
    
  });
    return total;
}

export function totalCartQuantity() {
  let total = 0;

  cart.forEach((cartItem) => {
    total += cartItem.quantity;
  });

  return total;
}



