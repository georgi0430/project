
import { Component } from 'react';
import './Register.css';

import { register } from '../../../services/authService';
import ErrorNotification from '../../Error/Error';
import { Route, Switch } from 'react-router-dom'


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            repeatPassword: '',
            errors: {}
        }
    }

    componentDidMount() {
        if (localStorage.getItem('auth')) {
            window.location = "/"
        }
    }

    handleVerification() {
        let errors = {};
        let formIsValid = true;
        if (this.state.email.length == 0) {
            errors.email = 'Cannot be empty';
            formIsValid = false;
        }

        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        if (emailRegex.exec(this.state.email) == null) {
            errors.email = 'Not a valid e-mail address';
            formIsValid = false;
        }

        if (this.state.password.length == 0) {
            errors.password = 'Cannot be empty';
            formIsValid = false;
        }

        if (this.state.password !== this.state.repeatPassword) {
            errors.repeatPassword = 'Both passwords should match';
            formIsValid = false;
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    didCatchError(error) {
        this.setState({
            errors: error
        })
    }

    contactSubmit = (e) => {
        e.preventDefault();

        if (this.handleVerification()) {
            let errors = {};
            register(e.target)
                .then((user) => {
                    window.location = '/login';
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(error);
                    errors.catchErr = error.message;
                    this.didCatchError(errors)
                });
        } else {
            window.scrollTo(0, 0)
        }
    }

    handleChange(e, field) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <main className="register-form">

                <form onSubmit={this.contactSubmit}>
                    <h1>Register</h1>
                    {this.state.errors.catchErr ? <ErrorNotification message={this.state.errors.catchErr} /> : ''}
                    <label for="username">Username</label>
                    <input id="email" type="text" name="email" placeholder="E-mail" onChange={this.handleChange.bind(this)}></input>
                    <div>
                        <span className="error">{this.state.errors.email}</span>
                    </div>
                    <label for="username">Password</label>
                    <input id="password" type="password" name="password" placeholder="***********" onChange={this.handleChange.bind(this)}></input>
                    <div>
                        <span className="error">{this.state.errors.password}</span>
                    </div>
                    <label for="repeat-password">Repeat Password</label>
                    <input id="repeat-password" type="password" name="repeatPassword" placeholder="***********" onChange={this.handleChange.bind(this)}></input>
                    <div>
                        <span className="error">{this.state.errors.repeatPassword}</span>
                    </div>
                    <button type="submit">Register</button>
                </form>
                <div>
                    <p>Already have an account ? <a href="/login">Login Now</a></p>
                </div>
            </main>
        )
    }
}


export default Register