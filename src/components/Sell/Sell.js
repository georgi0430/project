import './Sell.css'

import * as carService from '../../services/carService';
import Form from '../Offer/Form';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';


const SellOffer = ({
    history,
}) => {
    const { uid } = useContext(UserContext);
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