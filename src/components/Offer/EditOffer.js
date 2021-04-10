import './EditOffer.js'

// import { useEffect, useState } from 'react';
import * as carService from '../../services/carService';
import Form from '../Offer/Form';

const EditOffer = ({
    match,
    history,
}) => {
    // let [car, setCar] = useState({});
    const offerId = match.params.id;
    
    // useEffect(() => {
    //     carService.getOne(match.params.id)
    //         .then(res => {
    //             setCar(res.data());
    //         });
    // }, []);
    
    const onEditOfferHandler = (e) => {
        e.preventDefault();
        carService.editOffer(offerId, e.target)
        .then (res => {
            history.push(`/offer/${offerId}`)
        })
    };
    return (
        <main className="offer-create">
            <h1>Edit Offer</h1>
            <Form handler={onEditOfferHandler} offerId={offerId}/>
        </main>
    )
}

export default EditOffer;