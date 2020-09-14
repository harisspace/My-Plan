import React from 'react';
import './SignUp.css';

function SignUp() {
    return (
        <div className="signUp">
            <form className="signUp__form">
                <label htmlFor="signUp__email">Email</label>
                <input type="text" id="signUp__email" placeholder="Email"/>
                <label htmlFor="signUp__username">Username</label>
                <input type="text" id="signUp__username" placeholder="Username"/>
                <label htmlFor="signUp__password">Password</label>
                <input type="text" id="signUp__password" placeholder="Password"/>
                <button className="signUp__button" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
