import React from 'react';
import ReactDOM from 'react-dom';

class List extends Component {
    constructor(props) {
        super(props);
        this.items = props.items;
    }

    listingItem() {
        this.items.array.forEach(element => {
            return (<li> element.name </li>)
        });
    }

    render() {
        return (
            <div>
                <h1>Lista statków</h1>
                <ul>
                    { this.listingItem() }
                </ul>
            </div>
        )
    }
}


export default List;