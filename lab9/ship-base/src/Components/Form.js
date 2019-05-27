import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import PropTypes from "prop-types";

class Form extends Component {

    state = {
        name: '',
        inService: '',
        yardNumber: '',
        imoNumber: '',
    };

    render() {
        const {onSubmit} = this.props;
        return (
            <Paper className={'container-form'}>
                <form onSubmit={this.handleSubmit}>
                    <FormControl>
                        <TextField
                            id="standard-name"
                            label="Name"
                            value={this.state.name}
                            onChange={event => this.setState({name: event.target.value})}
                            margin="normal"
                        />
                        <TextField
                            id="imoNumber"
                            label="Identyfikator statku"
                            value={this.state.imoNumber}
                            onChange={event => this.setState({imoNumber: event.target.value})}
                            margin="normal"
                        />
                        <TextField
                            id="imoNumber"
                            label="Numer stoczni"
                            value={this.state.yardNumber}
                            onChange={event => this.setState({yardNumber: event.target.value})}
                            margin="normal"
                        />
                        <RadioGroup
                            aria-label="Czy w użyciu?"
                            name="inService"
                            value={this.state.inService}
                            onChange={event => this.setState({inService: event.target.value})}
                        >
                            <FormControlLabel value="0" control={<Radio/>} label="Tak"/>
                            <FormControlLabel value="1" control={<Radio/>} label="Nie"/>
                        </RadioGroup>
                        <button
                            onClick={(event) => {
                                onSubmit(event, this.state)
                            }}
                        >
                            Wyślij
                        </button>
                    </FormControl>
                </form>
            </Paper>
        );
    }
}
Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
export default Form;