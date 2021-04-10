import { useEffect, useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';

import { getAllForUser } from '../../services/carService';


import Main from '../../components/Main/Main';

const MyOffers = () => {
    const { isLogged, uid } = useContext(UserContext);
    let cars = [];
    const [data, setCars] = useState();

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
        }

    }, [isLogged])

    return (
        <div>
            {data ? <Main title="My Offers" cars={data} /> : <Main title="My Offers" cars={[]} />}
        </div>
    )
}


export default MyOffers;