import './Sell.css'

import * as carService from '../../services/carService';
import Form from '../Offer/Form';
import { useEffect, useContext } from 'react';
import userContext from '../../contexts/userContext';


const SellOffer = ({
    history,
}) => {
    const { isLogged, uid } = useContext(userContext);
    useEffect(() => {
        if (isLogged === false) {
            history.push('/login')
        }
    })
    const onCreateOfferHandler = (e) => {
        e.preventDefault();
        carService.create(e.target, uid)
    };

    return (
        <main className="offer-create">
            <h1>Create Offer</h1>
            <Form handler={onCreateOfferHandler} />
        </main>
    )
}

export default SellOffer;