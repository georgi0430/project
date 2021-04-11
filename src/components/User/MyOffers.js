import { useEffect, useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';

import { getAllBoughtByUser, getAllForUser } from '../../services/carService';

import Main from '../../components/Main/Main';

const MyOffers = () => {
    const { isLogged, uid } = useContext(UserContext);
    let cars = [];
    const [data, setCars] = useState();

    let boughtCars = [];
    const [bought, setBought] = useState();

    useEffect(() => {
        if (uid) {
            getAllForUser(uid)
                .then(res => {
                    res.forEach(doc => {
                        const info = {};
                        const id = doc.id
                        Object.assign(info, { id })
                        Object.assign(info, doc.data())
                        cars.push(info)
                    })
                    setCars(cars)
                })

            getAllBoughtByUser(uid)
                .then(res => {
                    res.forEach(doc => {
                        const info = {};
                        const id = doc.id
                        Object.assign(info, { id })
                        Object.assign(info, doc.data())
                        boughtCars.push(info)
                    })
                    setBought(boughtCars)
                })
        }

    }, [isLogged])

    return (
        <div>
            <div>
                {data ? <Main title="My Offers" cars={data} /> : <Main title="My Offers" cars={[]} />}
            </div>
            <div>
                {bought ? <Main title="My Bought Cars" cars={bought} /> : <Main title="My Bought Cars" cars={[]} />}
            </div>
        </div>
    )
}


export default MyOffers;