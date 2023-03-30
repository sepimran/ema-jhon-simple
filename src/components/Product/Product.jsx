import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img,price,seller,ratings , id } = props.product;

    const addToCart = props.handleAddToCart;

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
                <button onClick={()=> addToCart(props.product)}>
                    Add to cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
           
        </div>
    );
};

export default Product;