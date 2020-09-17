import React from 'react';
import './SignUp.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../redux/actions/authAction';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            username: '',
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
        this.props.signUp(this.state);
    }

    render() {
        const { auth, authError } = this.props;

        if (auth.uid) return <Redirect to = '/' />
        return (
        <div className="signUp">
            <form className="signUp__form" onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" onChange={this.handleChange} />
                <label htmlFor="firstName">Firsname</label>
                <input type="text" id="firstName" placeholder="First Name" onChange={this.handleChange} />
                <label htmlFor="lastName">Lastname</label>
                <input type="text" id="lastName" placeholder="Last Name" onChange={this.handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" onChange={this.handleChange} />
                <button className="signUp__button" type="submit">Sign Up</button>
                <div className="center">
                    {authError ? <p className="center">{authError}</p> : null}
                </div>
            </form>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => {dispatch(signUp(newUser))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
