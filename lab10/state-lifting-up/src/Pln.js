import React, {Component} from 'react';
import PropTypes from "prop-types";

class Pln extends Component {

    constructor(props) {
        super(props);
    }

    handleChange = (event) => {
        this.props.onChange(event.target.value)
    };

    render() {
        const {cash} = this.props;

        return (
            <div>
                <label>Pln
                    <input
                        onChange={this.handleChange}
                        value={cash}/>
                </label>
            </div>
        );
    }
}

Pln.propTypes = {
    onChange: PropTypes.func.isRequired,
    cash: PropTypes.number.isRequired,
};

export default Pln;