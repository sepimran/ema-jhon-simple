import React, { useEffect, useState } from 'react';
import {addToDb, deleteShoppingCart, getShoppingCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart , faTrashAlt ,faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[]);

    useEffect( () => {
        const storedCart = getShoppingCart();
        let savecart = [];
        // step 1 : get id form product 
        for (const id in storedCart){
            //step 2: get product form products state by using id 
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                // step 3 : add quantity
               const quantity = storedCart[id];
               addedProduct.quantity = quantity;
               // step-4 : added product
               savecart.push(addedProduct);
               
            }
            console.log('Added Product: ' ,addedProduct);
        }
        // step-5: save the cart
        setCart(savecart);
    },[products]);


    const handleAddToCart = (product) =>{
        let newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);

    };

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    };



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
                    <Cart 
                        cart={cart} 
                        clearCart={clearCart}
                    >
                        <Link to="/orders"> 
                                <button className='boxed-btn bg-orange'>Review Order <FontAwesomeIcon icon={faAngleDoubleRight} /> </button>
                            </Link>
                    </Cart>
             
                </div>
            </div>
        </section>
    );
};

export default Shop;