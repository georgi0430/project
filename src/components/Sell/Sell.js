import './Sell.css'

import * as carService from '../../services/carService';
import Form from '../Offer/Form';


const SellOffer = ({
    history,
}) => {
    if (!localStorage.getItem('auth')) {
        history.push('/login')
    }
    const onCreateOfferHandler = (e) => {
        e.preventDefault();
        carService.create(e.target)
    };
    return (
        <main className="offer-create">
            <h1>Create Offer</h1>
            <Form handler={onCreateOfferHandler}/>
        </main>
    )
}

export default SellOffer;