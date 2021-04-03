import './Search.css'

import { Component } from "react";
import { getAll, getAllSearch } from '../../services/carService';
import Form from '../Offer/Form';



class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            results: []
        }
    }

    onSubmitSearch = (e) => {
        e.preventDefault();
        getAllSearch(e.target);
    }

    getCars() {
        console.log(this.state.results);
        return this.state.results;
    }

    render() {

        return (
            <main className="offer-create">
                <h1>Advanced Search</h1>
                <Form handler={this.onSubmitSearch} isSearch="true" />
            </main>
        )
    }
}

export default Search;