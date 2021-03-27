import firebase from '../firebase';

var database = firebase.firestore();

export const getAll = () => {
    return firebase.firestore().collection('cars').get()
    
}

