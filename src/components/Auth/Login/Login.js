import style from './Login.module.css';

const Login = () => {
    return (
        <main>
            <form method="POST">
                <h1>Login</h1>
                <label for="username">Username</label>
                <input id="username" type="text" placeholder="Username" name="username"></input>
                <label for="username">Password</label>
                <input id="password" type="password" placeholder="******" name="password"></input>
                <button type="submit">Login</button>
            </form>
        </main>
    )
}

export default Login