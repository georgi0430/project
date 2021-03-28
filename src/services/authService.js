import firebase from '../firebase';

const login = (e) => {
    const {email, password} = e;

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((user) => {
            const userInfo = {
                email: user.user.email,
                userId: user.user.uid
            }
            localStorage.setItem('auth', JSON.stringify(userInfo));
            window.location = '/'
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

const register = (e) => {
    const {email, password, repeatPassword} = e

    if (password.value !== repeatPassword.value) {
        return
    }

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
            window.location = '/login';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}

export {
    login,
    register
}