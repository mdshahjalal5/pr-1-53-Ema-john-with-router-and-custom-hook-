import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart } from '../../utilities/fakedb';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import { NothingAdded } from '../NoShop/NoShop';
import ReviewItem from '../ReviewItem/ReviewItem.js'
const Orders = () => {
    const {products, previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart);
    const clearCart = ()=>{
      setCart([]);
      deleteShoppingCart()
    }
    const handleDelete =(id) =>{
      const remainings = cart.filter(product => product.id !==id);
      setCart(remainings);
      removeFromDb(id)
    }
    // console.log(products)
    return (
      <>
      {cart.length === 0 && <NothingAdded></NothingAdded>}
        <div className='shop-container'>
            <div>
            {cart.map(product => <ReviewItem product={product} handleDelete={handleDelete} key={product.id}></ReviewItem> )}
            </div>
          <div className="cart-container">
            <Cart cart={cart} clearCart={clearCart}>
              <h2>It is called children</h2>
            </Cart>
          </div>
          
        </div>
        
      </>
    );
};

export default Orders;