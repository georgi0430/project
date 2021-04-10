import './Form.css'

import { Component } from 'react';
import * as carService from '../../services/carService';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            isSearch: false,
            brand: '',
            model: '',
            imageUrl: '',
            engineType: '',
            gearboxType: '',
            productionYear: '',
            color: '',
            description: '',
            price: '',
            errors: {},
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
        if (this.props.isSearch) {
            this.setState({ isSearch: true })
        }
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;

        if (this.props.isSearch) {
            if (this.state.productionYear.length !== 0 && !Number(this.state.productionYear)) {
                formIsValid = false;
                errors.productionYear = 'Please input a valid year'
            }

            if (this.state.price.length !== 0 && !Number(this.state.price)) {
                formIsValid = false;
                errors.price = 'Please input a valid price'
            }
            this.setState({ errors: errors });
            return formIsValid
        }

        if (this.state.model.length === 0) {
            formIsValid = false;
            errors.model = 'Must specify the model'
        }

        if (this.state.imageUrl.length === 0) {
            formIsValid = false;
            errors.imageUrl = 'Cannot be empty'
        }

        if (this.state.productionYear.length === 0) {
            formIsValid = false;
            errors.productionYear = 'Cannot be empty'
        }

        if (this.state.color.length === 0) {
            formIsValid = false;
            errors.color = 'Cannot be empty'
        }

        if (this.state.price.length === 0) {
            formIsValid = false;
            errors.price = 'Cannot be empty'
        }

        const imgUrRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
        if (!imgUrRegex.exec(this.state.imageUrl)) {
            formIsValid = false;
            errors.imageUrl = 'Please input a valid URL'
        }

        if (!Number(this.state.productionYear)) {
            formIsValid = false;
            errors.productionYear = 'Please input a valid year'
        }

        if (!Number(this.state.price)) {
            formIsValid = false;
            errors.price = 'Please input a valid price'
        }

        this.setState({ errors: errors });
        return formIsValid;
    }


    contactSubmit = (e) => {
        e.preventDefault();

        if (this.handleValidation()) {
            this.props.handler(e)
        } else {
            window.scrollTo(0, 0)
        }

    }

    handleChange(e, field) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="offer-form">
                <form onSubmit={this.contactSubmit}>
                    <label>Select Brand:</label>
                    <div>
                        {this.state.isEdit ?
                            <select id="multi-select" name="brand" value={[this.state.brand]} onChange={this.handleChange.bind(this)}>
                                <option value="BMW">BMW</option>
                                <option value="Audi">Audi</option>
                                <option value="Toyota">Toyota</option>
                                <option value="VW">VW</option>
                                <option value="Mercedes Benz">Mercedes Benz</option>
                                <option value="Honda">Honda</option>
                                <option value="Mitsubishi">Mitsubishi</option>
                            </select>
                            :
                            <select id="multi-select" name="brand" onChange={this.handleChange.bind(this)}>
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
                    <div>
                        <span className="error">{this.state.errors.brand}</span>
                    </div>
                    <label>Model</label>
                    {this.state.isEdit ?
                        <input id="model" type="text" value={this.state.model} name="model" onChange={this.handleChange.bind(this)}></input>
                        :
                        <input id="model" type="text" placeholder="Model" name="model" onChange={this.handleChange.bind(this)}></input>
                    }
                    <div>
                        <span className="error">{this.state.errors.model}</span>
                    </div>
                    {this.state.isSearch ? null
                        :
                        <label>Image URL</label>
                    }

                    {this.state.isEdit ?
                        <input id="imageUrl" type="text" placeholder="Image URL" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange.bind(this)}></input>
                        :
                        this.state.isSearch ?
                            null
                            :
                            <input id="imageUrl" type="text" placeholder="Image URL" name="imageUrl" onChange={this.handleChange.bind(this)}></input>
                    }
                    {this.state.isSearch ? null
                        :
                        <div>
                            <span className="error">{this.state.errors.imageUrl}</span>
                        </div>
                    }
                    <label>Select Engine Type:</label>
                    <div>
                        {this.state.isEdit ?
                            <select id="multi-select" name="engineType" value={[this.state.engineType]} onChange={this.handleChange.bind(this)}>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Eletric</option>
                            </select>
                            :
                            <select id="multi-select" name="engineType" onChange={this.handleChange.bind(this)}>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Eletric</option>
                            </select>
                        }
                    </div>
                    <div>
                        <span className="error">{this.state.errors.engineType}</span>
                    </div>
                    <label>Select Gearbox Type:</label>
                    <div>
                        {this.state.isEdit ?
                            <select id="multi-select" name="gearboxType" value={[this.state.gearboxType]} onChange={this.handleChange.bind(this)}>
                                <option value="Manual">Manual</option>
                                <option value="Automatic">Automatic</option>
                            </select>
                            :
                            <select id="multi-select" name="gearboxType" onChange={this.handleChange.bind(this)}>
                                <option value="Manual">Manual</option>
                                <option value="Automatic">Automatic</option>
                            </select>
                        }
                    </div>
                    <div>
                        <span className="error">{this.state.errors.gearboxType}</span>
                    </div>
                    <label>Production Year</label>
                    {this.state.isEdit ?
                        <input id="productionYear" type="text" value={this.state.productionYear} name="productionYear" onChange={this.handleChange.bind(this)}></input>
                        :
                        <input id="productionYear" type="text" placeholder="Production Year" name="productionYear" onChange={this.handleChange.bind(this)}></input>
                    }

                    <div>
                        <span className="error">{this.state.errors.productionYear}</span>
                    </div>
                    <label>Color</label>
                    {this.state.isEdit ?
                        <input id="color" type="text" value={this.state.color} name="color" onChange={this.handleChange.bind(this)}></input>
                        :
                        <input id="color" type="text" placeholder="Color" name="color" onChange={this.handleChange.bind(this)}></input>
                    }

                    <div>
                        <span className="error">{this.state.errors.color}</span>
                    </div>
                    {this.state.isSearch ? null
                        :
                        <label>Description</label>
                    }
                    {this.state.isSearch ? null
                        :
                        <div>
                            {this.state.isEdit ?
                                <textarea name="description" value={this.state.description} onChange={this.handleChange.bind(this)}></textarea>
                                :
                                <textarea name="description" placeholder="Enter description here..." onChange={this.handleChange.bind(this)}></textarea>
                            }
                        </div>
                    }
                    {this.state.isSearch ? null
                        :
                        <div>
                            <span className="error">{this.state.errors.description}</span>
                        </div>
                    }
                    <label>Price</label>
                    {this.state.isEdit ?
                        <input id="price" type="text" value={this.state.price} name="price" onChange={this.handleChange.bind(this)}></input>
                        :
                        <input id="price" type="text" placeholder="Price" name="price" onChange={this.handleChange.bind(this)}></input>
                    }

                    <div>
                        <span className="error">{this.state.errors.price}</span>
                    </div>
                    {this.state.isisEdit ?
                        <button type="submit">Edit Offer</button>
                        :
                        <button type="submit">Submit</button>
                    }
                </form>
            </div >
        )
    }
}

export default Form;