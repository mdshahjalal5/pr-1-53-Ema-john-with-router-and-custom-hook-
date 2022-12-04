import React from 'react';
import Shop from '../Shop/Shop';
import './Product.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const  Product =({handleAddToCart, product})=> {
    // const {handleAddToCart, product} = props
    // console.log(handleAddToCart);
    const {name, seller, price, ratings, img} = product;
    
    // console.log(name, seller, price, ratings)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name} </p>
                <p>Price: ${price} </p>
                <p><small>Seller: {seller} </small></p>
                <p>Ratings: {ratings} stars </p>
            </div>
            <button onClick={() => handleAddToCart(product)} className="btn-card">
                <p>Add to Cart</p>
                {/* <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> */}
            </button>
            
        </div>
    );
};

export default Product;