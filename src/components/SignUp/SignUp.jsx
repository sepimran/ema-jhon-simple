import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignUp = () => {
    const [error , setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password ,confirm);

        // validation
        setError('')
        if(password !== confirm){
            setError("Password and Confrim PassWord is not matched")
            return
        } 
        else if (password.length < 6){
            setError("Password should be 6 charecter")
            return
        }

        // firebase sign in
        createUser(email, password)
        .then(result => {
           const loggedUser = result.user;
           console.log(loggedUser);
           form.reset();
        })
        .catch(error =>{
            console.log(error.message)
        })


    }

    return (
        <div className='main-wrap'>
            <div className="form-area">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='Email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' placeholder='password' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name='confirm' placeholder='password' required />
                        {
                            error  && <p className='text-red'>{error}</p>
                        }
                    </div>
                    <div className="form-control">
                        <input type="submit" value="Sign Up"/>
                    </div>
                </form>

                <p className='text-center'><small>Already have an account? <Link to="/login">Login</Link></small></p>
                <div className='separator'>or</div>
                <button className='btn boxed-btn'>Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;