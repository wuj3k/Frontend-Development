import React, {Component} from 'react';
import axios from 'axios';
import Form from "./Form";
import Listing from "./Listing";

class App extends Component {

    host = 'localhost:4001/';

    state = {
        ships: []
    };

    componentDidMount() {
        this.fetchShips();
    }

    renderListingShip() {
        console.log(this.state.ships);

    }

    async fetchShips() {
        const listing = await axios.get('http://localhost:4001/api/list');
        this.setState({ships: listing.data});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        axios.post(this.host + 'api/ship/new', {ship: this.state.ships});
    };

    listingName(){
        return this.state.ships.map( (ships) => {
            return ships._name;
        });
    }

    render() {
        return (
            <div>
                <div>
                    {/*<Listing*/}
                    {/*names = {{_name:'jurek'}}*/}
                    {/*/>*/}
                </div>
                <div>
                    <Form/>
                </div>
                <div>
                    {this.renderListingShip()}
                </div>
            </div>
        );
    }
}


export default App;
