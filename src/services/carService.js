import firebase from '../firebase';

const getAll = () => {
    return firebase.firestore().collection('cars').where('isBought', '!=', true).get()
}

const getAllByBrand = (brand) => {
    return firebase.firestore().collection('cars').where('brand_lowercase', '==', brand.toLowerCase()).get()
}

const getAllSold = () => {
    return firebase.firestore().collection('cars').where('isBought', '==', true).get()

}

const getAllForUser = (uid) => {
    return firebase.firestore().collection('cars').where('creator', '==', uid).get()
}

const getAllSearch = (e) => {
    let data = {};
    Object.entries(e).map(x => {
        if (x[1].value) {
            data[x[1].name] = x[1].value
        }
        return null;
    })
    console.log(data);

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
}

const getOne = (id) => {
    return firebase.firestore().collection('cars').doc(id).get()
}

const create = (e, uid) => {
    console.log(e.model.value.split(' ').join('').toLowerCase(),);

    const { brand, model, imageUrl, engineType, gearboxType, productionYear, color, description, price } = e

    let car = {
        brand: brand.value,
        model: model.value,
        brand_lowercase: brand.value.split(' ').join('').toLowerCase(),
        model_lowercase: model.value.toLowerCase(),
        imageUrl: imageUrl.value,
        engineType: engineType.value,
        gearboxType: gearboxType.value,
        productionYear: productionYear.value,
        color: color.value,
        description: description.value,
        price: price.value,
        isBought: Boolean(false),
        buyer: '',
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
        brand_lowercase: brand.value.toLowerCase(),
        model_lowercase: model.value.toLowerCase(),
        imageUrl: imageUrl.value,
        engineType: engineType.value,
        gearboxType: gearboxType.value,
        productionYear: productionYear.value,
        color: color.value,
        description: description.value,
        price: price.value,
    }

    return firebase.firestore().collection('cars').doc(id).update(car);
}

const deleteOffer = (id) => {
    firebase.firestore().collection('cars').doc(id).delete()
        .then(res => {
            window.location = '/';
        })
}

const buyOffer = (id, uid) => {
    console.log(id);
    console.log(uid);
    const car = {
        isBought: Boolean(true),
        buyer: uid
    }

    return firebase.firestore().collection('cars').doc(id).update(car);
}

const isCreator = (creator, uid) => {
    if (creator == uid) {
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
    getAllSold,
    getAllSearch,
    create,
    editOffer,
    deleteOffer,
    buyOffer,
    isCreator,
}



