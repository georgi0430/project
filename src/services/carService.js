import firebase from '../firebase';

const getAll = () => {
    return firebase.firestore().collection('cars').get()
}

const getOne = (id) => {
    return firebase.firestore().collection('cars').doc(id).get()
}

const create = (e) => {
    const { brand, model, imageUrl, engineType, gearboxType, productionYear, color, description, price } = e

    let car = {
        brand: brand.value,
        model: model.value,
        imageUrl: imageUrl.value,
        engineType: engineType.value,
        gearboxType: gearboxType.value,
        productionYear: productionYear.value,
        color: color.value,
        description: description.value,
        price: price.value
    }

    firebase.firestore().collection('cars').add(car)
        .then(function (docRef) {
            window.location = '/';
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}
export {
    getAll,
    getOne,
    create
}



