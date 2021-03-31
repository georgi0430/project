import firebase from '../firebase';

const getAll = () => {
    return firebase.firestore().collection('cars').get()
}

const getAllByBrand = (brand) => {
    return firebase.firestore().collection('cars').where('brand', '==', brand).get()
}

const getAllForUser = (email) => {
    console.log(email);
    return firebase.firestore().collection('cars').where('creator', '==', email).get()
}

const getOne = (id) => {
    return firebase.firestore().collection('cars').doc(id).get()
}

const create = (e) => {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

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
        price: formatter.format(Number(price.value)),
        creator: JSON.parse(localStorage.getItem('auth')).email
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

const editOffer = (id, e) => {
    const { brand, model, imageUrl, engineType, gearboxType, productionYear, color, description, price } = e

    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    let car = {
        brand: brand.value,
        model: model.value,
        imageUrl: imageUrl.value,
        engineType: engineType.value,
        gearboxType: gearboxType.value,
        productionYear: productionYear.value,
        color: color.value,
        description: description.value,
        price: formatter.format(Number(price.value)),
        creator: JSON.parse(localStorage.getItem('auth')).email
    }

    return firebase.firestore().collection('cars').doc(id).update(car);
}

const deleteOffer = (id) => {
    firebase.firestore().collection('cars').doc(id).delete()
    .then(res => {
        window.location = '/';
    })
}

const isCreator = (creator, currentEmail) => {
    if (creator == currentEmail) {
        return true
    } else {
        return false
    }
}

export {
    getAll,
    getOne,
    getAllByBrand,
    getAllForUser,
    create,
    editOffer,
    deleteOffer,
    isCreator,
}



