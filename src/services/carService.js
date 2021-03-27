import firebase from '../firebase';

export const getAll = () => {
    return firebase.firestore().collection('cars').get()
}

