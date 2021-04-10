import UserContext from '../../contexts/UserContext';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import * as carService from '../../services/carService';

import './Offer.css'


const Offer = ({
    userData,
    match,
    history
}) => {
    const { isLogged, uid } = useContext(UserContext);
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    let [car, setCar] = useState({});
    let [creator, setCreator] = useState({})
    const offerId = match.params.id;
    
    useEffect(() => {
        carService.getOne(match.params.id)
            .then(res => {
                setCar(res.data());
                setCreator(carService.isCreator(res.data().creator, uid))
            });
    }, [isLogged]);



    return (
        <main>
            <div className="offer-container">
                <h1>Offer Details</h1>
                <h2>{car.carName}</h2>
                <img src={car.imageUrl} alt=""></img>
                <div className="info-container">
                    <div id="title">
                        {car.brand} {car.model}
                    </div>
                    <div id="specs">
                        <table className="hoverTable">
                            <tr className="hover">
                                <td>Production Year:</td><td>{car.productionYear}</td>
                            </tr>
                            <tr className="hover">
                                <td>Engine:</td><td>{car.engineType}</td>
                            </tr>
                            <tr className="hover">
                                <td>Gearbox:</td><td>{car.gearboxType}</td>
                            </tr>
                            <tr className="hover">
                                <td>Color:</td><td>{car.color}</td>
                            </tr>
                        </table>

                    </div>
                    <div id="price">
                        <table className="hoverTable">
                            <tr className="hover">
                                <td><span>{formatter.format(Number(car.price))}</span></td>
                            </tr>
                            {creator ?
                                <div>
                                    <Link to={`/offer/${offerId}/edit`}><button className="button button-edit">Edit</button></Link>
                                    <Link to={`/offer/${offerId}/delete`}><button className="button button-delete">Delete</button></Link>
                                </div>
                                :
                                <tr>
                                    <button className="button button-buy">Buy</button>
                                </tr>
                            }
                        </table>
                    </div>
                    <div id="description">
                        <table className="hoverTable">
                            <tr className="description">
                                <td>Description:</td>
                            </tr>
                            <tr className="hover">
                                <td>{car.description}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Offer;