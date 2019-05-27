import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {name, inService, yardNumber, imoNumber} = this.props;

        return (
            <div>
                <h1>Dane statku</h1>
                <ul>
                    <li>Nazwa: {name}</li>
                    <li>W użyciu: {inService}</li>
                    <li>Nr stoczni: {yardNumber}</li>
                    <li>Numer rejstracji: {imoNumber}</li>
                </ul>
            </div>
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