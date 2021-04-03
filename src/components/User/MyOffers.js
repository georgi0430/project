import { Component } from 'react';

import { getAllForUser } from '../../services/carService';


import Main from '../../components/Main/Main';

class MyOffers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cars: [],
        }
    }

    componentDidMount() {
        if (!localStorage.getItem('auth')) {
            window.location = "/"
        }
        let cars = [];
        getAllForUser(JSON.parse(localStorage.getItem('auth')).email)
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


    getCars() {
        return this.state.cars;
    }

    render() {
        return (
            <div>
                <Main title="My Offers" cars={this.getCars()} />
            </div>
        )
    }
}

export default MyOffers;