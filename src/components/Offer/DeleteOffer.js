import * as carService from '../../services/carService';

const DeleteOffer = ({
    match
}) => {
    const offerId = match.params.id
    carService.deleteOffer(offerId)
}

export default DeleteOffer;