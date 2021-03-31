import { Redirect, useHistory, withRouter, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as carService from '../../services/carService';

import './Offer.css'


const Offer = ({
    match,
    history
}) => {
    if (!localStorage.getItem('auth')) {
        history.push('/')
    }
    let [car, setCar] = useState({});
    let [creator, setCreator] = useState({})
    const offerId = match.params.id;
    
    useEffect(() => {
        carService.getOne(match.params.id)
            .then(res => {
                setCar(res.data());
                setCreator(carService.isCreator(res.data().creator, JSON.parse(localStorage.getItem('auth')).email))
            });
    }, []);



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
                                <td><span>{car.price}</span></td>
                            </tr>
                            {creator ?
                                <div>
                                    <Link to={`/offer/${offerId}/edit`}><button className="button button-edit">Edit</button></Link>
                                    <button className="button button-delete">Delete</button>
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