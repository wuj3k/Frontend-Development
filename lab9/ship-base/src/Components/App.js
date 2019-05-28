import React, {Component} from 'react';
import axios from 'axios';
import Form from "./Form";
import Listing from "./Listing";
import Details from "./Details";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';

class App extends Component {

    state = {
        ships: [],
        ship: '',
        name: '',
        imoNumber: '',
        inService: '',
        yardNumber: '',
        checked: false,
    };

    componentDidMount() {
        this.fetchShips();
    }

    async fetchShips() {
        const listing = await axios.get('http://localhost:4001/api/list');
        this.setState({
            ships: listing.data,
        });
    }

    handleSubmit = async (event, shipData) => {
        event.preventDefault();
        await axios.post('http://localhost:4001/api/ship/new', {
            name: shipData.name,
            imoNumber: parseInt(shipData.imoNumber),
            inService: shipData.inService ? 'Tak' : 'Nie',
            yardNumber: parseInt(shipData.yardNumber)
        });
        await this.fetchShips();
    };

    handleRemove = async (event, imoNumber) => {
        await axios.delete('http://localhost:4001/api/ship/' + imoNumber);
        await this.fetchShips();
    };

    handleEdit = async (event, imoNumber) => {
        const ship = await axios.get('http://localhost:4001/api/ship/' + imoNumber);
        this.setState({ship: ship.data});
    };

    handleRowClick = async (imoNumber) => {
        const ship = await axios.get('http://localhost:4001/api/ship/' + imoNumber);
        this.setState({
            name: ship.data.name,
            imoNumber: parseInt(ship.data.imoNumber),
            inService: ship.data.inService,
            yardNumber: parseInt(ship.data.yardNumber),
            checked: true,
        });
    };

    render() {
        const {ships, imoNumber, inService, name, yardNumber, ship, checked} = this.state;

        return (
            <Container maxWidth="md">
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
                            ship={ship ? ship : null}
                        />
                    </Grid>

                    <Grid>
                        <Slide direction="up" in={checked}>
                            <Details
                                imoNumber={parseInt(imoNumber)}
                                inService={inService}
                                name={name}
                                yardNumber={parseInt(yardNumber)}
                            />
                        </Slide>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}


export default App;
