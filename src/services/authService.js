import firebase from '../firebase';

const isLogged = () => {
    const data = {}
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            data.isLogged = true;
            data.uid = user.uid;
            data.userEmail = user.email
            // ...
        } else {
            data.isLogged = false
        }
    });
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

const login = (e) => {
    const { email, password } = e;
    return firebase.auth().signInWithEmailAndPassword(email.value, password.value)

}

const register = (e) => {
    const { email, password, repeatPassword } = e

    return firebase.auth().createUserWithEmailAndPassword(email.value, password.value)

}

const logout = () => {
    return firebase.auth().signOut()

}

export {
    isLogged,
    login,
    register,
    logout
}