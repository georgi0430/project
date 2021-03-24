import style from './Register.module.css';

const Register = () => {
    return (
        <main>
            <form method="POST">
                <h1>Register</h1>
                <label for="username">Username</label>
                <input id="username" type="text" placeholder="Username" name="username"></input>
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