import React from 'react';
import './Cart.css'
const Cart = ({cart, shahjalal}) => {
    // console.log(shahjalal)
    // console.log(cart)
    let total = 0; 
    let shipping = 0; 
    let quantity = 0
    for(const product of cart){
        quantity += product.quantity;
        total += product.price * quantity;
        shipping += product.shipping * quantity;
    }
    // console.log(quantity)
 const tax = Number((total * 0.1).toFixed(2))
 const grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Total quantity:<strong>{quantity} </strong></p>
            <p>Total Price: <strong>${total} </strong> <strong></strong></p>
            <p>Total Shipping: <strong>${shipping} </strong></p>
            <p>Tax: <strong>${tax} </strong> </p>
            <p>Grand Total: <strong>{grandTotal} </strong></p>
        </div>)
    
};

export default Cart;