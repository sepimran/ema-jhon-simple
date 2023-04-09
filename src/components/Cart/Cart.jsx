import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart , faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({cart ,clearCart}) => {

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
       if(  product.quantity === 0){
            product.quantity = 1;
       }
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Selected Items:{quantity}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping Charge: {totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p><b>Grand Total:{grandTotal} </b></p>
            
            <div className="btn-area">
                <button onClick={clearCart} className='boxed-btn bg-red'>Clear Cart <FontAwesomeIcon icon={faTrashAlt} /> </button>
            </div>
        </div>
    );
};

export default Cart;