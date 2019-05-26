import React, {Component} from 'react';

class Form extends Component {

    state = {
        ships: [],
        name: '',
        inService: '',
        yardNumber: '',
        imoNumber: '',
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nazwa
                        <input
                            value={this.state.name}
                            onChange={event => this.setState({ship: event.target.value})}
                        />
                    </label>
                    <label>
                        Identyfikator statku
                        <input
                            value={this.state.imoNumber}
                            onChange={event => this.setState({ship: event.target.value})}
                        />
                    </label>
                    <label>
                        Numer stoczni
                        <input
                            value={this.state.yardNumber}
                            onChange={event => this.setState({ship: event.target.value})}
                        />
                    </label>
                    <label>
                        Czy w użyciu
                        <input
                            value={this.state.inService}
                            onChange={event => this.setState({ship: event.target.value})}
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;