import { Redirect, useHistory, withRouter, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import * as carService from '../../services/carService';

import './Offer.css'


const Offer = ({
    match,
    history
}) => {
    let [car, setCar] = useState({});

    useEffect(() => {
        carService.getOne(match.params.id)
            .then(res => {
                setCar(res.data());
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
                        {car.carName}
                    </div>
                    <div id="specs">
                        <table className="hoverTable">
                            <tr>
                                <td>Production Year:</td><td>2015</td>
                            </tr>
                            <tr>
                                <td>Engine:</td><td>Petrol</td>
                            </tr>
                            <tr>
                                <td>Gearbox:</td><td>Manual</td>
                            </tr>
                            <tr>
                                <td>Color:</td><td>Red</td>
                            </tr>
                        </table>

                    </div>
                    <div id="price">
                        <p>Price:</p>
                        <h3>{car.price}</h3>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Offer;