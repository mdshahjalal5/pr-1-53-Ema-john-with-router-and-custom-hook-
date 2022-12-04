import React from 'react';
import './ReviewItem.css'
// import { TrashIcon} from '@heroicons/react/24/solid'
import { element, heroIcon } from '../../FontAwesom/FontAwesom';
const ReviewItem = ({product}) => {
    // console.log(product);
    const {name, price, shipping, img, quantity} = product;
    return (
        <div  className='cart-product '>
           
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="info">
                <h2>{name} </h2>
                <p>Price: <strong>{price} </strong> </p>
                <p>Quantity: {quantity} </p>
                <p> Shipping charge: <b>{shipping} </b> </p>
                <p>{element} pr</p>
            </div>
           
            {/* <TrashIcon className='icon'></TrashIcon> */}
            <div className="icon">
                {heroIcon}
            </div>
                
            
        </div>
    );
};

export default ReviewItem;