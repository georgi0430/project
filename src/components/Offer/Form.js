import { useEffect, useState } from 'react';
import './Form.css'

import { Component } from 'react';
import * as carService from '../../services/carService';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            brand: '',
            model: '',
            imageUrl: '',
            engineType: '',
            gearboxType: '',
            productionYear: '',
            color: '',
            description: '',
            price: '',
        }
    }

    componentDidMount() {
        if (this.props.offerId) {
            carService.getOne(this.props.offerId)
                .then(res => {
                    this.setState({ isEdit: true })
                    this.setState(res.data())
                })
        }
    }

    render() {
        return (
            <div className="offer-form">
                <form onSubmit={this.props.handler}>
                    <label>Select Brand:</label>
                    <div>
                        {this.state.isEdit ?
                            <select id="multi-select" name="brand" value={[this.state.brand]} onChange={e => this.setState({ brand: e.target.value })} multiple>
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
                    <label>Model</label>
                    {this.state.isEdit ? <input id="model" type="text" value={this.state.model} onChange={e => this.setState({ model: e.target.value })} name="model"></input>
                        :
                        <input id="model" type="text" placeholder="Model" name="model"></input>
                    }
                    <label>Image URL</label>
                    {this.state.isEdit ? <input id="imageUrl" type="text" placeholder="Image URL" name="imageUrl" value={this.state.imageUrl} onChange={e => this.setState({ imageUrl: e.target.value })}></input>
                        :
                        <input id="imageUrl" type="text" placeholder="Image URL" name="imageUrl"></input>
                    }
                    <label>Select Engine Type:</label>
                    <div>
                        {this.state.isEdit ?
                            <select id="multi-select" name="engineType" value={[this.state.engineType]} onChange={e => this.setState({ engineType: e.target.value })} multiple>
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
                    <label>Select Gearbox Type:</label>
                    <div>
                        {this.state.isEdit ?
                            <select id="multi-select" name="gearboxType" value={[this.state.gearboxType]} onChange={e => this.setState({ gearboxType: e.target.value })} multiple>
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
                    <label>Production Year</label>
                    {this.state.isEdit ? <input id="productionYear" type="text" value={this.state.productionYear} onChange={e => this.setState({ productionYear: e.target.value })} name="productionYear"></input>
                        :
                        <input id="productionYear" type="text" placeholder="Production Year" name="productionYear"></input>
                    }
                    <label>Color</label>
                    {this.state.isEdit ?
                        <input id="color" type="text" value={this.state.color} onChange={e => this.setState({ color: e.target.value })} name="color"></input>
                        :
                        <input id="color" type="text" placeholder="Color" name="color"></input>
                    }
                    <label>Description</label>
                    <div>
                        {this.state.isEdit ?
                            <textarea name="description" value={this.state.description} onChange={e => this.setState({ description: e.target.value })}></textarea>
                            :
                            <textarea name="description" placeholder="Enter description here..."></textarea>
                        }
                    </div>
                    <label>Price</label>
                    {this.state.isEdit ?
                        <input id="price" type="text" value={this.state.price} onChange={e => this.setState({ price: e.target.value })} name="price"></input>
                        :
                        <input id="price" type="text" placeholder="Price" name="price"></input>
                    }
                    {this.state.isisEdit ?
                        <button type="submit">Edit Offer</button>
                        :
                        <button type="submit">Submit Offer</button>
                    }
                </form>
            </div >
        )
    }
}

// const Form = ({
//     handler,
//     carInfo
// }) => {
//     let isEdit = false

//     if (carInfo) {
//         isEdit = true

//     }
//     const [state, setState] = useState({
//         brand: carInfo.brand,
//         model: carInfo.model,
//         imageUrl: carInfo.imageUrl,
//         engineType: carInfo.engineType,
//         gearboxType: carInfo.gearboxType,
//         productionYear: carInfo.productionYear,
//         color: carInfo.color,
//         description: carInfo.description,
//         price: carInfo.price,
//     })

//     const handleChange = e => {
//         setState({
//             [e.target.name]: e.target.value
//         });
//     };
//     return (
//         <div className="offer-form">
//             <form onSubmit={handler}>
//                 <label for="brand">Select Brand:</label>
//                 <div>
//                     {isEdit ?
//                         <select id="multi-select" name="brand" selected={[carInfo.brand]} multiple>
//                             <option value="BMW">BMW</option>
//                             <option value="Audi">Audi</option>
//                             <option value="Toyota">Toyota</option>
//                             <option value="VW">VW</option>
//                             <option value="Mercedes Benz">Mercedes Benz</option>
//                             <option value="Honda">Honda</option>
//                             <option value="Mitsubishi">Mitsubishi</option>
//                         </select>
//                         :
//                         <select id="multi-select" name="brand" multiple>
//                             <option value="BMW">BMW</option>
//                             <option value="Audi">Audi</option>
//                             <option value="Toyota">Toyota</option>
//                             <option value="VW">VW</option>
//                             <option value="Mercedes Benz">Mercedes Benz</option>
//                             <option value="Honda">Honda</option>
//                             <option value="Mitsubishi">Mitsubishi</option>
//                         </select>
//                     }
//                 </div>
//                 <label for="model">Model</label>
//                 {isEdit ? <input id="model" type="text" value={carInfo.model} name="model"></input>
//                     :
//                     <input id="model" type="text" placeholder="Model" name="model"></input>
//                 }
//                 <label for="model">Image URL</label>
//                 {isEdit ? <input id="imageUrl" type="text" placeholder="Image URL" name="imageUrl" value={carInfo.imageUrl}></input>
//                     :
//                     <input id="imageUrl" type="text" placeholder="Image URL" name="imageUrl"></input>
//                 }
//                 <label for="engine-type">Select Engine Type:</label>
//                 <div>
//                     {isEdit ?
//                         <select id="multi-select" name="engineType" value={[carInfo.engineType]} multiple>
//                             <option value="Petrol">Petrol</option>
//                             <option value="Diesel">Diesel</option>
//                             <option value="Electric">Eletric</option>
//                         </select>
//                         :
//                         <select id="multi-select" name="engineType" multiple>
//                             <option value="Petrol">Petrol</option>
//                             <option value="Diesel">Diesel</option>
//                             <option value="Electric">Eletric</option>
//                         </select>
//                     }
//                 </div>
//                 <label for="gearbox">Select Gearbox Type:</label>
//                 <div>
//                     {isEdit ?
//                         <select id="multi-select" name="gearboxType" value={[carInfo.gearboxType]} multiple>
//                             <option value="Manual">Manual</option>
//                             <option value="Automatic">Automatic</option>
//                         </select>
//                         :
//                         <select id="multi-select" name="gearboxType" multiple>
//                             <option value="Manual">Manual</option>
//                             <option value="Automatic">Automatic</option>
//                         </select>
//                     }
//                 </div>
//                 <label for="production-year">Production Year</label>
//                 {isEdit ? <input id="productionYear" type="text" value={state.productionYear} onChange={handleChange} name="productionYear"></input>
//                     :
//                     <input id="productionYear" type="text" placeholder="Production Year" name="productionYear"></input>
//                 }
//                 <label for="color">Color</label>
//                 {isEdit ?
//                     <input id="color" type="text" value={carInfo.color} name="color"></input>
//                     :
//                     <input id="color" type="text" placeholder="Color" name="color"></input>
//                 }
//                 <label for="description">Description</label>
//                 <div>
//                     {isEdit ?
//                         <textarea name="description" value={carInfo.description}></textarea>
//                         :
//                         <textarea name="description" placeholder="Enter description here..."></textarea>
//                     }
//                 </div>
//                 <label for="price">Price</label>
//                 {isEdit ?
//                     <input id="price" type="text" value={carInfo.price} name="price"></input>
//                     :
//                     <input id="price" type="text" placeholder="Price" name="price"></input>
//                 }
//                 {isEdit ?
//                     <button type="submit">Edit Offer</button>
//                     :
//                     <button type="submit">Submit Offer</button>
//                 }
//             </form>
//         </div >
//     )
// }

export default Form;