import React from 'react';
import './SignIn.css';
import { signIn } from '../../redux/actions/authAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />

        return (
        <div className="signIn" onSubmit={this.handleSubmit}>
            <form className="signIn__form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="signIn__email" placeholder="Email" onChange={this.handleChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="signIn__password" placeholder="Password" onChange={this.handleChange}/>
                <button className="signIn__button" type="submit">Sign In</button>
            </form>
            <div className="center">
                {
                    authError ? <p>{authError}</p> : null
                }
            </div>
        </div>
    )
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
