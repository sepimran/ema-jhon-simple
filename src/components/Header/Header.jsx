import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const {user , logOut} =useContext(AuthContext);
    const navigate = useNavigate(); 
    
    const handleLogOut = () =>{
        logOut()
            .then(()=>{
                navigate('/login')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

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
                                <li><Link to='/signup'>Sign Up</Link></li>
                                {
                                    user ? <>
                                        <li className='text-white'>hello {user.email} <span> <button onClick={handleLogOut}>SignOut</button> </span></li>
                                    </> : <>
                                        <li className='text-white'><Link to="/login"><button>Sign In</button></Link></li>
                                    </>
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;