import React, { useEffect, useState } from 'react';
import {addToDb, getShoppingCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[]);

    useEffect(() => {
        const storedCart = getShoppingCart();
        console.log(storedCart);
    },[]);

    const handleAddToCart = (product) =>{
        let newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);

    }


    return (
        <section className='shop-wrapper'>
            <div className="shop-container">
                <div className="shop-area">
                    <div className="product-row">
                       {
                        products.map(product => <Product 
                            product={product}
                            key={product.id}
                            handleAddToCart={handleAddToCart}


                            
                            ></Product>)
                       }
                    </div>
                </div>
                <div className="sidebar-area">
                    <Cart cart={cart}></Cart>
             
                </div>
            </div>
        </section>
    );
};

export default Shop;