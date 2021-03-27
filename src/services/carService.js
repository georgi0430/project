import firebase from '../firebase';

const getAll = () => {
    return firebase.firestore().collection('cars').get()
}

const getOne = (id) => {
    return firebase.firestore().collection('cars').doc(id).get()
}
export {
    getAll,
    getOne
}



