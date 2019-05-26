import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Ship from './Ship';
import Details from './Detail';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    createObjects() {
        this.items = [
            this.getShip("Majestic Mærsk", true, 4251, 9619919),
            this.getShip("Mary Mærsk", false, 4252, 9619921),
            this.getShip("Marie Mærsk", true, 4253, 9619933),
            this.getShip("Madison Mærsk", false, 4254, 9619945)
        ]
    }

    getShip(name, inService, yardNumber, imoNumber) {
        return (
            <Ship name={ name } inService={ inService } yardNumber={ yardNumber } imoNumber={ imoNumber } />
        );
    }

    render() {
        return (
            <div className='container'>
                <div className="listing">
                    <List items={ this.createObjects() } name="Lista statków" />
                </div>
                <div className="details">
                    <Details />
                </div>
            </div>
        );
    }
}

export default Main;