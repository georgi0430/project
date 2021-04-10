import './Brand.css';
import { Component } from 'react';
import { getAllByBrand } from '../../../services/carService';

import Main from '../../../components/Main/Main'

class Brand extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cars: [],
            currentBrand: 'all'
        }
    }

    componentDidMount() {
        const brand = this.props.match.params.brand;
        console.log(brand);
        let cars = [];
        getAllByBrand(brand)
            .then(res => {
                res.forEach(doc => {
                    const data = {};
                    const id = doc.id
                    Object.assign(data, { id })
                    Object.assign(data, doc.data())
                    cars.push(data)
                })
                this.setState({ cars, currentBrand: brand });
            })
    }

    getCars() {
        return this.state.cars;
    }

    render() {
        return (
            <main>
                <h1>Brand: {this.state.currentBrand}</h1>
                <Main cars={this.getCars()} />
            </main >
        )
    }
}

export default Brand;