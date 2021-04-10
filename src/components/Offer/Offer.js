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
    const { uid } = useContext(UserContext);
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    let [car, setCar] = useState({});
    let [creator, setCreator] = useState({})
    let [bought, setBought] = useState({});
    const offerId = match.params.id;

    useEffect(() => {
        carService.getOne(match.params.id)
            .then(res => {
                setCar(res.data());
                setCreator(carService.isCreator(res.data().creator, uid))
                if(res.data().buyer.length > 0) {
                    setBought(true)
                }
            });
    });



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
                            <tbody>
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
                            </tbody>
                        </table>

                    </div>
                    <div id="price">
                        <table className="hoverTable">
                            <tbody>
                                <tr className="hover">
                                    <td><span>{formatter.format(Number(car.price))}</span></td>
                                </tr>
                                <tr>
                                    {creator ?
                                        <td>
                                            <Link to={`/offer/${offerId}/edit`}><button className="button button-edit">Edit</button></Link>
                                            <Link to={`/offer/${offerId}/delete`}><button className="button button-delete">Delete</button></Link>
                                        </td>
                                        :
                                        <td>
                                            {bought == true ?
                                            <button className="button button-buy" disabled>SOLD OUT!</button>
                                            :
                                            <Link to={`/offer/${offerId}/buy`}><button className="button button-buy">Buy</button></Link>
                                            }
                                        </td>
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="description">
                        <table className="hoverTable">
                            <tbody>
                                <tr className="description">
                                    <td>Description:</td>
                                </tr>
                                <tr className="hover">
                                    <td>{car.description}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Offer;