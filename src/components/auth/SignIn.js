import React from 'react';
import './SignIn.css';

function SignIn() {
    return (
        <div className="signIn">
            <form className="signIn__form">
                <label htmlFor="signIn__email">Email</label>
                <input type="text" id="signIn__email" placeholder="Email"/>
                <label htmlFor="signIn__password">Password</label>
                <input type="text" id="signIn__password" placeholder="Password"/>
                <button className="signIn__button" type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn
