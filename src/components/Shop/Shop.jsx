import React, { useEffect, useState } from 'react';
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

    const handleAddToCart = (product) =>{
        let newCart = [...cart, product];
        setCart(newCart);

        
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
                    <h3>Order Summary</h3>
                    <p><b>Total Product: </b>{cart.length}</p>
                </div>
            </div>
        </section>
    );
};

export default Shop;