import React, {Component} from 'react';
import axios from 'axios';
import Form from "./Form";
import Listing from "./Listing";
import Details from "./Details";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class App extends Component {

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

    handleSubmit = async (event, shipData) => {
        event.preventDefault();
        axios.post('http://localhost:4001/api/ship/new', {
            name: shipData.name,
            imoNumber: parseInt(shipData.imoNumber),
            inService: shipData.inService,
            yardNumber: parseInt(shipData.yardNumber)
        });
        this.fetchShips();
    };

    handleRemove = async (event, imoNumber) => {
        
        event.preventDefault();
        axios.delete('http://localhost:4001/api/ship/' + imoNumber)
        this.fetchShips();
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
            <Container maxWidth="sm">
                <Grid>
                    <Grid>
                        <Listing
                            list={this.listingName()}
                            onRowClick={this.handleRowClick}
                            onRemove={this.handleRemove}
                        />
                    </Grid>

                    <Grid>
                        <Form
                            onSubmit={this.handleSubmit}
                        />
                    </Grid>

                    <Grid>
                        <Details
                            imoNumber={parseInt(imoNumber)}
                            inService={inService}
                            name={name}
                            yardNumber={parseInt(yardNumber)}
                        />
                    </Grid>
                </Grid>
            </Container>
        );
    }
}


export default App;
