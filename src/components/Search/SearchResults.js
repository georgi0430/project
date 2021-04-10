import {Component} from 'react';
import Main from '../../components/Main/Main';

class SearchResults extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            cars: []
        }
    }

    componentDidMount() {

    }

    getCars() {
        return this.state.cars;
    }

    render() {
        return (
            <main>
                <h1>Search results:</h1>
                <Main cars={this.getCars()} />
            </main >
        )
    }
}

export default SearchResults;