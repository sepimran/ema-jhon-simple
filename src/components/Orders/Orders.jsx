import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import './Order.css'
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart , setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) =>{
       const remainCart = cart.filter(product => product.id !== id);
       setCart(remainCart);
       removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    };
 
    return (
        <section className='shop-wrapper'>
            <div className="shop-container">
                <div className="shop-area">
                    <div className="product-row order-review-row">
                       {
                            cart.map(product => <ReviewItem 
                                product={product}
                                key={product.id}
                                handleRemoveFromCart={handleRemoveFromCart}
                                
                                ></ReviewItem>)
                        }
                    </div>
                </div>
                <div className="sidebar-area">
                    <Cart 
                        cart={cart}
                        clearCart={clearCart}
                    ></Cart>
            
                </div>
            </div>
        </section>
    );
};

export default Orders;