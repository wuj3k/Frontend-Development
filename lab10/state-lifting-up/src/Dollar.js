import React, {Component} from 'react';

import PropTypes from "prop-types";

class Dollar extends Component {


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
                <label>Dollars
                    <input
                        onChange={this.handleChange}
                        value={cash}
                    />
                </label>
            </div>
        );
    }
}


Dollar.propTypes = {
    onChange: PropTypes.func.isRequired,
    cash: PropTypes.number.isRequired,
};

export default Dollar;