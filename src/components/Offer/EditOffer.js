import './EditOffer.js'

import { useEffect, useState } from 'react';
import * as carService from '../../services/carService';
import Form from '../Offer/Form';

const EditOffer = ({
    match,
    history,
}) => {
    let [car, setCar] = useState({});
    const offerId = match.params.id;
    
    useEffect(() => {
        carService.getOne(match.params.id)
            .then(res => {
                setCar(res.data());
            });
    }, []);

    if (!localStorage.getItem('auth')) {
        history.push('/login')
    }
    const onEditOfferHandler = (e) => {
        e.preventDefault();
    };
    return (
        <main className="offer-create">
            <h1>Edit Offer</h1>
            <Form handler={onEditOfferHandler} carInfo={car}/>
        </main>
    )
}

export default EditOffer;