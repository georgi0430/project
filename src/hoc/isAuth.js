import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const isAuth = (WrappedComponent) => {

    const Component = (props) => {
        const { isLogged } = useContext(UserContext);
        const history = useHistory();

        if (isLogged === false) {
            history.push('/login')

            return null;
        }

        return <WrappedComponent {...props} />
    }

    return Component;
};

const notAuth = (WrappedComponent) => {

    const Component = (props) => {
        const { isLogged } = useContext(UserContext);
        const history = useHistory();

        if (isLogged === true) {
            history.push('/')

            return null;
        }

        return <WrappedComponent {...props} />
    }

    return Component;
};


export {
    isAuth,
    notAuth
};