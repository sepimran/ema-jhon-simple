import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <header className='header-area'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <a href="/"><img src={logo} alt="" /></a>
                    </div>
                    <div className="col-lg-9">
                        <nav>
                            <ul>
                                <li><a href="">Order</a></li>
                                <li><a href="">Order Review</a></li>
                                <li><a href="">Manage Inventory</a></li>
                                <li><a href="">Login</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;