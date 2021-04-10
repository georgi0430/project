import { Component } from 'react';
import Car from '../../Car/Car';
import { getAllSold } from '../../../services/carService';

class Sold extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cars: []
        }
    }

    componentDidMount() {
        let cars = [];
        getAllSold()
            .then(res => {
                res.forEach(doc => {
                    const data = {};
                    const id = doc.id
                    Object.assign(data, { id })
                    Object.assign(data, doc.data())
                    cars.push(data)
                })
                this.setState({ cars });
            })

    }

    render() {
        return (
            <main>
                <h1>Recently Sold</h1>
                <div>
                    {this.state.cars.map(x =>
                        <Car
                            key={x.id}
                            id={x.id}
                            brand={x.brand}
                            color={x.color}
                            description={x.description}
                            engineType={x.engineType}
                            gearboxType={x.gearboxType}
                            imageUrl={x.imageUrl}
                            model={x.model}
                            productionYear={x.productionYear}
                            price={x.price}
                        />
                    )}
                </div>
            </main >
        )
    }
}

export default Sold;