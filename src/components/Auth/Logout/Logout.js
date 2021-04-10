import { logout } from '../../../services/authService';

const Logout = ({
    history
}) => {
    logout()
    .then(res => {
        history.push('/')
    })
    .catch(err =>{
        console.log(err);
    })
    return (
        <main>
            <h1>Logging out...</h1>
        </main>
    )
}

export default Logout;