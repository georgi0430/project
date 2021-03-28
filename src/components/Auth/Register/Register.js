import './Register.css';
import { register } from '../../../services/authService';

const Register = ({
    history
}) => {
    const onRegisterHandler = (e) => {
        e.preventDefault();
        register(e.target)
    };
    return (
        <main className="register-form">
            <form onSubmit={onRegisterHandler}>
                <h1>Register</h1>
                <label for="username">Username</label>
                <input id="email" type="text" placeholder="E-mail" name="email"></input>
                <label for="username">Password</label>
                <input id="password" type="password" placeholder="******" name="password"></input>
                <label for="repeat-password">Repeat Password</label>
                <input id="repeat-password" type="password" placeholder="******" name="repeatPassword"></input>
                <button type="submit">Register</button>
            </form>
        </main>
    )
}

export default Register