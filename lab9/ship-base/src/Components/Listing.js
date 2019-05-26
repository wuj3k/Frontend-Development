import React, {Component} from 'react';

class Listing extends Component {

    constructor(props) {
        super(props);
    }


    listingShips() {
        return this.props.names.map(function (ship, index) {
            return (
                <tr>
                    <td>{index}</td>
                    <td>{ship._name}</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div>
                {this.listingShips()}
            </div>
        );
    }
}

export default Listing;