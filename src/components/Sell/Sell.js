import './Sell.css'

import * as carService from '../../services/carService';

const SellOffer = () => {
    return (
        <main className="offer-create">
            <form method="POST">
                <h1>Create Offer</h1>
                <label for="brand">Select Brand:</label>
                <div>
                    <select id="multi-select" multiple>
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
                <label for="brand">Select Engine Type:</label>
                <div>
                    <select id="multi-select" multiple>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electric">Eletric</option>
                    </select>
                </div>
                <label for="brand">Select Gearbox Type:</label>
                <div>
                    <select id="multi-select" multiple>
                        <option value="Manual">Manual</option>
                        <option value="Automatic">Automatic</option>
                    </select>
                </div>
                <label for="model">Production Year</label>
                <input id="productionYear" type="text" placeholder="Production Year" name="productionYear"></input>
                <label for="model">Color</label>
                <input id="color" type="text" placeholder="Color" name="color"></input>
                <button type="submit">Submit Offer</button>
            </form>
        </main>
    )
}

export default SellOffer;