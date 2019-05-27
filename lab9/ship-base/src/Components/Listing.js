import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Listing extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {onRowClick, list} = this.props;

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>L.p</th>
                        <th>Nazwa statku</th>
                        <th>Identyfikator statku</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((ship, index) => (
                        <tr
                            key={ship.imoNumber}
                            onClick={() => onRowClick(ship.imoNumber)}
                        >
                            <td>{index}</td>
                            <td>{ship.name}</td>
                            <td>{ship.imoNumber}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}

Listing.propTypes = {
    onRowClick: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
};

export default Listing;