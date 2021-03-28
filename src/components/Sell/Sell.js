import './Sell.css'

import * as carService from '../../services/carService';

const SellOffer = ({
    history,
}) => {
    if(!localStorage.getItem('auth')) {
        history.push('/login')
    }
    const onCreateOfferHandler = (e) => {
        e.preventDefault();
        const { brand, model, imageUrl, engineType, gearboxType, productionYear, color, description } = e.target

        carService.create(e.target)
    };
    return (
        <main className="offer-create">
            <form onSubmit={onCreateOfferHandler}>
                <h1>Create Offer</h1>
                <label for="brand">Select Brand:</label>
                <div>
                    <select id="multi-select" name="brand" multiple>
                        <option value="BMW">BMW</option>
                        <option value="Audi">Audi</option>
                        <option value="Toyota">Toyota</option>
                        <option value="VW">VW</option>
                        <option value="Mercedes Benz">Mercedes Benz</option>
                        <option value="Honda">Honda</option>
                        <option value="Mitsubishi">Mitsubishi</option>
                    </select>
                </div>
                <label for="model">Model</label>
                <input id="model" type="text" placeholder="Model" name="model"></input>
                <label for="model">Image URL</label>
                <input id="imageUrl" type="text" placeholder="Image URL" name="imageUrl"></input>
                <label for="engine-type">Select Engine Type:</label>
                <div>
                    <select id="multi-select" name="engineType" multiple>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electric">Eletric</option>
                    </select>
                </div>
                <label for="gearbox">Select Gearbox Type:</label>
                <div>
                    <select id="multi-select" name="gearboxType" multiple>
                        <option value="Manual">Manual</option>
                        <option value="Automatic">Automatic</option>
                    </select>
                </div>
                <label for="production-year">Production Year</label>
                <input id="productionYear" type="text" placeholder="Production Year" name="productionYear"></input>
                <label for="color">Color</label>
                <input id="color" type="text" placeholder="Color" name="color"></input>
                <label for="description">Description</label>
                <div>
                    <textarea name="description" placeholder="Enter description here..."></textarea>
                </div>
                <label for="price">Price</label>
                <input id="price" type="text" placeholder="Price" name="price"></input>
                <button type="submit">Submit Offer</button>
            </form>
        </main>
    )
}

export default SellOffer;