import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Login = () => {
    const [show, setShow] = useState(false);
    const [error , setError] = useState('');
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';


    const handleSignIn = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email,password);
        
        signInUser(email,password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();
                navigate(from , {replace: true})
            })
            .catch(error =>{
                setError(error.message)
            })
        
    }

    return (
        <div className='main-wrap'>
            <div className="form-area">
                <h2>Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='Email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type={show ? 'text' : 'password'} name='password' placeholder='password' required />
                        <p onClick={()=> setShow(!show)}>
                            {
                                show ? <span>Hide Password</span> : <span>Show password</span>
                            }
                        </p>
                    </div>
                    <div className="form-control">
                        <input type="submit" value="Login"/>
                    </div>
                </form>

                <p className='text-center'><small>New to Ema-john? <Link to="/signup">Create New Account</Link> </small></p>
                <div className='separator'>or</div>
                <button className='btn boxed-btn'>Continue with Google</button>
                <p className='text-red'>{error}</p>
              
            </div>
        </div>
    );
};

export default Login;