import React from 'react';
import ReactDOM from 'react-dom';

class Ship extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.inService = props.inService;
        this.yardNumber = props.yardNumber;
        this.imoNumber = props.imoNumber;
    }

    getData() {
        return (
            <div>
                <h1>Dane statku</h1>
                <ul>
                    <li>Nazwa: { this.name }</li>
                    <li>W użyciu: { this.inService }</li>
                    <li>Nr stoczni: { this.yardNumber }</li>
                    <li>Numer rejstracji: { this.imoNumber }</li>
                </ul>
            </div>
        );
    }
}

export default Ship;