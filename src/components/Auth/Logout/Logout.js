import { render } from '@testing-library/react';
import { logout } from '../../../services/authService';

const Logout = ({
    history
}) => {
    logout()

    return (
        <main>
            <h1>Logging out...</h1>
        </main>
    )
}

export default Logout;