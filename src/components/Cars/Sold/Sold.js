import { Component } from 'react';
import Car from '../../Car/Car';
import { getAllSold } from '../../../services/carService';

import { useState } from 'react';

class Sold extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cars: [],
            visible: 5,
        }

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return { visible: prev.visible + 4 };
        });
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
                    {this.state.cars.slice(0, this.state.visible).map(x =>
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
                    <div className="show-more">
                        {this.state.visible < this.state.cars.length &&
                            <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
                        }
                    </div>
                </div>
            </main >
        )
    }
}

export default Sold;