import firebase from '../firebase';

const login = (e) => {
    const { email, password } = e;
    return firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        
}

const register = (e) => {
    const { email, password, repeatPassword } = e

    return firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        
}

const logout = () => {
    firebase.auth().signOut()
        .then(function () {
            localStorage.removeItem('auth');
            window.location = '/';
        }).catch(function (error) {
            console.log(error);
        });

}

export {
    login,
    register,
    logout
}