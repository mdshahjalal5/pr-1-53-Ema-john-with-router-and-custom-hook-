import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem.js'
const Orders = () => {
    const {products, previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart);
    // console.log(products)
    return (
        <div className='shop-container'>
            <div>
            {cart.map(product => <ReviewItem product={product} key={product.id}></ReviewItem> )}
            </div>
          <div className="cart-container">
            <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Orders;