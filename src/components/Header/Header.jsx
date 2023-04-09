import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header-area'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                    <div className="col-lg-9">
                        <nav>
                            <ul>
                                <li><Link to='/'>Shop</Link></li>
                                <li><Link to='/orders'>Orders</Link></li>
                                <li><Link to='/inventory'>Inventory</Link></li>
                                <li><Link to='/login'>Login</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;