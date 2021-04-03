import './Search.css'

import { Component } from "react";
import { getAll, getAllSearch } from '../../services/carService';
import Form from '../Offer/Form';
import SearchResults from './SearchResults';

import Main from '../Main/Main';

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            results: [],
            isSubmitted: false
        }
    }

    onSubmitSearch = (e) => {
        e.preventDefault();
        getAllSearch(e.target)
            .then(res => {
                this.setState({
                    results: res,
                    isSubmitted: true
                })
            })

    }

    getCars() {
        return this.state.results
    }

    render() {
        if (this.state.isSubmitted) {
            return (
                <Main cars={this.getCars()} />
            )
        }
        return (
            <main className="offer-create">
                <h1>Advanced Search</h1>
                <Form handler={this.onSubmitSearch} isSearch="true" />
            </main>
        )
    }
}

export default Search;