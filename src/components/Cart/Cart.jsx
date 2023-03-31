import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);

    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Selected Items:{cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping Charge: {totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <b><b>Grand Total:{grandTotal} </b></b>
            
        </div>
    );
};

export default Cart;