import * as carService from '../../services/carService';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const BuyOffer = ({
    match,
    history
}) => {
    const { uid } = useContext(UserContext);
    const offerId = match.params.id
    carService.buyOffer(offerId, uid)
    .then(res => {
        history.push(`/offer/${offerId}`)
    })

    return null
}

export default BuyOffer;