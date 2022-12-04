import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
// import addToDb from '../../utilities/fakedb'
const Shop = () => {
   const {products} = useLoaderData(); 
//    console.log(products)
    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            // console.log(products)
             const addedProducts = products.find(product => product.id === id);
             if(addedProducts){
                 const quantity = storedCart[id];
                //  console.log(quantity)
                 addedProducts['quantity'] = quantity
                //   console.log(addedProducts)
                savedCart.push(addedProducts);
             }
        }
        // console.log(savedCart)
        setCart(savedCart)
        // console.log(cart)
    },[products])
    const [cart, setCart] = useState([]);
    const handleAddToCart = selectedProduct =>{
        console.log(selectedProduct);
        const exists = cart.find(product => product.id === selectedProduct.id); 
        let newCart = [];
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    }
    // console.log(cart)
    return (
        <div className='shop-container'>
            <div id="products-cotainer">
                {products.map(product =>
                <Product key={product.id}
                 product={product}
                 handleAddToCart={handleAddToCart}>
                 </Product>)}
            </div>
            <div className='cart-container'>
                <Cart cart={cart}  shahjalal></Cart>
            </div>
        </div>
    );
};

export default Shop;