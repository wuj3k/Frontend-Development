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
        ship: '',
        name: '',
        imoNumber: '',
        inService: '',
        yardNumber: ''
    };

    async fetchShips() {
        const listing = await axios.get('http://localhost:4001/api/list');
        this.setState({
            ships: listing.data,
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
    };

    handleRemove = async (event, imoNumber) => {
        axios.delete('http://localhost:4001/api/ship/' + imoNumber);
    };

    handleEdit = async (event , imoNumber) => {
        const ship = await axios.get('http://localhost:4001/api/ship/' + imoNumber);
        this.setState({ship: ship.data});
        console.log(ship.data);
    };

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
        const {ships, imoNumber, inService, name, yardNumber, ship} = this.state;

        this.fetchShips();

        return (
            <Container maxWidth="lg">
                <Grid>
                    <Grid>
                        <Listing
                            list={ships}
                            onRowClick={this.handleRowClick}
                            onEdit={this.handleEdit}
                            onRemove={this.handleRemove}
                        />
                    </Grid>

                    <Grid>
                        <Form
                            onSubmit={this.handleSubmit}
                            ship={ship ? ship : null} // TODO
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
