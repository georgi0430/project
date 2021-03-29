import './Form.css'

const Form = ({
    handler,
    carInfo
}) => {
    let isEdit = false
    if (carInfo) {
        isEdit = true
    }
    return (
        <div className="offer-form">
            <form>
                <label for="brand">Select Brand:</label>
                <div>
                    {isEdit ?
                        <select id="multi-select" name="brand" value={[carInfo.brand]} multiple>
                            <option value="BMW">BMW</option>
                            <option value="Audi">Audi</option>
                            <option value="Toyota">Toyota</option>
                            <option value="VW">VW</option>
                            <option value="Mercedes Benz">Mercedes Benz</option>
                            <option value="Honda">Honda</option>
                            <option value="Mitsubishi">Mitsubishi</option>
                        </select>
                        :
                        <select id="multi-select" name="brand" multiple>
                            <option value="BMW">BMW</option>
                            <option value="Audi">Audi</option>
                            <option value="Toyota">Toyota</option>
                            <option value="VW">VW</option>
                            <option value="Mercedes Benz">Mercedes Benz</option>
                            <option value="Honda">Honda</option>
                            <option value="Mitsubishi">Mitsubishi</option>
                        </select>
                    }
                </div>
                <label for="model">Model</label>
                {isEdit ? <input id="model" type="text" value={carInfo.model} name="model"></input>
                    :
                    <input id="model" type="text" placeholder="Model" name="model"></input>
                }
                <label for="model">Image URL</label>
                {isEdit ? <input id="imageUrl" type="text" placeholder="Image URL" name="imageUrl" value={carInfo.imageUrl}></input>
                    :
                    <input id="imageUrl" type="text" placeholder="Image URL" name="imageUrl"></input>
                }
                <label for="engine-type">Select Engine Type:</label>
                <div>
                    {isEdit ?
                        <select id="multi-select" name="engineType" value={[carInfo.engineType]} multiple>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Electric">Eletric</option>
                        </select>
                        :
                        <select id="multi-select" name="engineType" multiple>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Electric">Eletric</option>
                        </select>
                    }
                </div>
                <label for="gearbox">Select Gearbox Type:</label>
                <div>
                    {isEdit ? 
                    <select id="multi-select" name="gearboxType" value={[carInfo.gearboxType]} multiple>
                        <option value="Manual">Manual</option>
                        <option value="Automatic">Automatic</option>
                    </select>
                    : 
                    <select id="multi-select" name="gearboxType" multiple>
                        <option value="Manual">Manual</option>
                        <option value="Automatic">Automatic</option>
                    </select>
                    }
                </div>
                <label for="production-year">Production Year</label>
                {isEdit ? <input id="productionYear" type="text" value={carInfo.productionYear} name="productionYear"></input>
                    :
                    <input id="productionYear" type="text" placeholder="Production Year" name="productionYear"></input>
                }
                <label for="color">Color</label>
                {isEdit ?
                    <input id="color" type="text" value={carInfo.color} name="color"></input>
                    :
                    <input id="color" type="text" placeholder="Color" name="color"></input>
                }
                <label for="description">Description</label>
                <div>
                    {isEdit ? 
                    <textarea name="description" value={carInfo.description}></textarea>
                    :
                    <textarea name="description" placeholder="Enter description here..."></textarea>
                    }
                </div>
                <label for="price">Price</label>
                {isEdit ?
                <input id="price" type="text" value={carInfo.price} name="price"></input>
                :
                <input id="price" type="text" placeholder="Price" name="price"></input>
                }
                {isEdit ?
                <button type="submit">Edit Offer</button> 
                :
                <button type="submit">Submit Offer</button>
                }
            </form>
        </div >
    )
}

export default Form;