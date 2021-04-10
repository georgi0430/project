import { Component } from 'react';
import './Login.css'
import { login } from '../../../services/authService';
import ErrorNotification from '../../Error/Error';

class Login extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }
   
    didCatchError(error) {
        this.setState({
            errors: error
        })
    }

    handleVerification() {
        let errors = {};
        let formIsValid = true;
        if (this.state.email.length === 0) {
            formIsValid = false;
            errors.email = 'Cannot be empty'
        }

        if (this.state.password.length === 0) {
            formIsValid = false;
            errors.password = 'Cannot be empty'
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit = (e) => {
        e.preventDefault();

        if (this.handleVerification()) {
            let errors = {}
            login(e.target)
                .then((user) => {
                    window.location = "/"
                })
                .catch((error) => {
                    errors.catchErr = error.message;
                    this.didCatchError(errors)
                });
        }
    }

    handleChange(e, field) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <main className="login-form">
                <form onSubmit={this.contactSubmit}>
                    <h1>Login</h1>
                    {this.state.errors.catchErr ? <ErrorNotification message={this.state.errors.catchErr} /> : ''}
                    <label for="username">Username</label>
                    <input id="email" type="text" placeholder="E-mail" name="email" onChange={this.handleChange.bind(this)}></input>
                    <div>
                        <span className="error">{this.state.errors.email}</span>
                    </div>
                    <label for="username">Password</label>
                    <input id="password" type="password" placeholder="******" name="password" onChange={this.handleChange.bind(this)}></input>
                    <div>
                        <span className="error">{this.state.errors.password}</span>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div>
                    <p>Do not have an account yet ? <a href="/register">Register Now</a></p>
                </div>
            </main>
        )
    }
}

export default Login