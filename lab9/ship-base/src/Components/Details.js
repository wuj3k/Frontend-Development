import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class Details extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {name, inService, yardNumber, imoNumber} = this.props;

        return (
            <Paper className={'container-form'}>
                <h1>Dane statku</h1>
                <List>
                    <ListItem>Nazwa: {name}</ListItem>
                    <ListItem>W użyciu: {inService}</ListItem>
                    <ListItem>Nr stoczni: {yardNumber}</ListItem>
                    <ListItem>Numer rejstracji: {imoNumber}</ListItem>
                </List>
            </Paper>
        );
    }
}

Details.propTypes = {
    name: PropTypes.string.isRequired,
    inService: PropTypes.string.isRequired,
    yardNumber: PropTypes.number.isRequired,
    imoNumber: PropTypes.number.isRequired
};

export default Details;