import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img,price,seller,ratings } = props.product;
    return (
        <div className='single-product-item'>
            <div className="product-header">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p><strong>Price:</strong>{price}</p>

                <div className="manufacturin">
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings}</p>
                </div>
            </div>
            <div className="add-to-cart-btn-area">
                <button>
                    Add to cart
                </button>
            </div>
           
        </div>
    );
};

export default Product;