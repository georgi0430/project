import firebase from '../firebase';

const getAll = () => {
    return firebase.firestore().collection('cars').get()
}

const getAllByBrand = (brand) => {
    return firebase.firestore().collection('cars').where('brand_lowercase', '==', brand.toLowerCase()).get()
}

const getAllForUser = (email) => {
    return firebase.firestore().collection('cars').where('creator', '==', email).get()
}

const getAllSearch = (e) => {
    const { brand, model, engineType, gearboxType, productionYear, color, price } = e
    let data = {};
    Object.entries(e).map(x => {
        if (x[1].value) {
            data[x[1].name] = x[1].value
        }
    })

    let firstResults = [];
    let finalResults = [];
    return getAllByBrand(data.brand.toLowerCase())
        .then(res => {
            res.forEach(doc => {
                const data = {};
                const id = doc.id
                Object.assign(data, { id })
                Object.assign(data, doc.data())
                firstResults.push(data)
            })
            firstResults.forEach(obj => {
                let isMatch = true;
                Object.entries(data).forEach(([key, value]) => {
                    if (value.toLowerCase() !== obj[key].toLowerCase()) {
                        isMatch = false
                    }
                })
                if (isMatch) {
                    finalResults.push(obj)
                }
            })
            return finalResults;
        })
        .catch(err => console.log(err))
    return finalResults
}

const getOne = (id) => {
    return firebase.firestore().collection('cars').doc(id).get()
}

const create = (e, uid) => {
    console.log(uid);

    const { brand, model, imageUrl, engineType, gearboxType, productionYear, color, description, price } = e

    let car = {
        brand: brand.value,
        model: model.value,
        brand_lowercase: brand.value.toLowerCase(),
        model_lowercase: model.value.toLowerCase(),
        imageUrl: imageUrl.value,
        engineType: engineType.value,
        gearboxType: gearboxType.value,
        productionYear: productionYear.value,
        color: color.value,
        description: description.value,
        price: price.value,
        creator: uid,
    }

    firebase.firestore().collection('cars').add(car)
        .then(function (docRef) {
            window.location = '/';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

const editOffer = (id, e) => {
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
        price: price.value,
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
    getAllSearch,
    create,
    editOffer,
    deleteOffer,
    isCreator,
}



