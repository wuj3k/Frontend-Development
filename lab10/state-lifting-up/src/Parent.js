import React, {Component} from 'react';
import Dollar from "./Dollar";
import Pln from "./Pln";

class Parent extends Component {

    plnUsd = 0.260797;
    usdPln = 3.83439994;

    constructor(props) {
        super(props);

        this.state = {
            dollar: 0,
            pln: 0,
        }
    }

    convertPln(amount) {
        this.setState({
            pln: amount * this.usdPln,
        })
    }

    convertUsd(amount) {
        this.setState({
            dollar: amount * this.plnUsd,
        })
    }

    onChangeDollar = (amount) => {
        this.setState({
            dollar: Number(amount),
        });
        this.convertPln(Number(amount));
    };

    onChangePln = (amount) => {
        this.setState({
            pln: Number(amount),
        });
        this.convertUsd(Number(amount))
    };

    render() {
        return (
            <div>
                <Dollar
                    onChange={this.onChangeDollar}
                    cash={this.state.dollar}
                />
                <Pln
                    onChange={this.onChangePln}
                    cash={this.state.pln}
                />
            </div>
        );
    }
}

export default Parent;