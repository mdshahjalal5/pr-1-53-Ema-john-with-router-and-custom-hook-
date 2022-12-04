import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart, clearCart,  children} = props;
    
    let total = 0; 
    let shipping = 0; 
    let quantity = 0
    for(const product of cart){
        quantity += product.quantity;
        total += product.price * quantity;
        shipping += product.shipping * quantity;
    }
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
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>)
    
};

export default Cart;