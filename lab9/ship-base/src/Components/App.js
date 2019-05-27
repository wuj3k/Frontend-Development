import React, {Component} from 'react';
import axios from 'axios';
import Form from "./Form";
import Listing from "./Listing";
import Details from "./Details";
import Container from '@material-ui/core';

class App extends Component {

    host = 'localhost:4001/';

    state = {
        ships: [],
        name: '',
        imoNumber: '',
        inService: '',
        yardNumber: ''
    };

    componentDidMount() {
        this.fetchShips();
    }

    async fetchShips() {
        const listing = await axios.get('http://localhost:4001/api/list');
        this.setState({
            ships: listing.data,
            name: listing.data[0].name,
            imoNumber: listing.data[0].imoNumber,
            inService: listing.data[0].inService,
            yardNumber: listing.data[0].yardNumber,
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        axios.post(this.host + 'api/ship/new', {ship: this.state.ships});
    };

    listingName() {
        return this.state.ships.map((ships) => {
            return {name: ships.name, imoNumber: ships.imoNumber};
        });
    }

    handleRowClick = async (imoNumber) => {
        const ship = await axios.get('http://localhost:4001/api/ship/' + imoNumber);
        this.setState({
            name: ship.data.name,
            imoNumber: parseInt(ship.data.imoNumber),
            inService: ship.data.inService,
            yardNumber: parseInt(ship.data.yardNumber),
        });
    };

    render() {
        const {imoNumber, inService, name, yardNumber} = this.state;
        return (
            <div>
                <div>
                    <Listing
                        list={this.listingName()}
                        onRowClick={this.handleRowClick}
                    />
                </div>
                <div>
                    <Form/>
                </div>
                <div>
                    <Details
                        imoNumber={parseInt(imoNumber)}
                        inService={inService}
                        name={name}
                        yardNumber={parseInt(yardNumber)}
                    />
                </div>
            </div>
        );
    }
}


export default App;
