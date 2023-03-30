import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[]);

       
    return (
        <section className='shop-wrapper'>
            <div className="shop-container">
                <div className="shop-area">
                    <div className="product-row">
                       {
                         products.map(product => console.log(product))
                       }
                       {
                        products.map(product => <Product 
                            product={product}
                            
                            ></Product>)
                       }
                    </div>
                </div>
                <div className="sidebar-area">
                    <h3>Order Summary</h3>
                </div>
            </div>
        </section>
    );
};

export default Shop;