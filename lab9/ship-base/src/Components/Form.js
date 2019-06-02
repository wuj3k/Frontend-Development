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

    componentDidUpdate(prevProps) {
        if (this.props.ship !== prevProps.ship) {
            const { ship } = this.props;
            this.setState({
                name:ship.name,
                inService: ship.inService === "Tak" ? 1 : 0,
                yardNumber: ship.yardNumber,
                imoNumber: ship.imoNumber,
            })
        }
    }

    render() {
        const {onSubmit} = this.props;

        return (
            <Paper className={'container-form'}>
                <form onSubmit={this.handleSubmit}>
                    <FormControl>
                        <TextField
                            required={true}
                            id="standard-name"
                            label="Name"
                            value={this.state.name}
                            onChange={event => this.setState({name: event.target.value})}
                        />
                        <TextField
                            required={true}
                            id="imoNumber"
                            label="Identyfikator statku"
                            value={this.state.imoNumber}
                            onChange={(event) =>{
                                if(!parseInt(event.target.value)) return;
                                this.setState({imoNumber: parseInt(event.target.value)})}
                            }
                            margin="normal"
                        />
                        <TextField
                            required={true}
                            id="imoNumber"
                            label="Numer stoczni"
                            value={this.state.yardNumber}
                            onChange={(event) =>{
                                if(!parseInt(event.target.value)) return;
                                this.setState({yardNumber: parseInt(event.target.value)})}
                            }
                            margin="normal"
                        />
                        <RadioGroup
                            aria-label="Czy w użyciu?"
                            name="inService"
                            required={true}
                            value={this.state.inService}
                            onChange={event => this.setState({inService: event.target.value})}
                        >
                            <FormControlLabel value="0" control={<Radio/>} label="Tak"/>
                            <FormControlLabel value="1" control={<Radio/>} label="Nie"/>
                        </RadioGroup>
                        <button
                            onClick={(event) => {
                                onSubmit(event, this.state);
                                this.setState({
                                        name:'',
                                        inService: '',
                                        yardNumber: '',
                                        imoNumber: '',
                                    })
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