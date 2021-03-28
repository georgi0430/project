import { useState } from 'react';
import './Login.css'
import { login } from '../../../services/authService';


const Login = ({
    history
}) => {
    if(localStorage.getItem('auth')) {
        history.push('/')
    }

    const onLoginHandler = (e) => {
        e.preventDefault();
        login(e.target)
    };
    return (
        <main className="login-form">
            <form onSubmit={onLoginHandler}>
                <h1>Login</h1>
                <label for="username">Username</label>
                <input id="email" type="text" placeholder="E-mail" name="email"></input>
                <label for="username">Password</label>
                <input id="password" type="password" placeholder="******" name="password"></input>
                <button type="submit">Login</button>
            </form>
        </main>
    )
}

export default Login