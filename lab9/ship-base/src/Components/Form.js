import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';

class Form extends Component {

    state = {
        ships: [],
        name: '',
        inService: '',
        yardNumber: '',
        imoNumber: '',
    };

    onSubmitForm(event) {
        debugger;
        event.preventDefault();
        console.log('dupa');
    }

    render() {
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
                        <Button
                            onChange={() => console.log('dupa')}
                        >
                            Wyślij
                        </Button>
                        {/*<Button onSubmit={this.onSubmitForm} variant="contained" color="primary">*/}
                        {/*Wyślij*/}
                        {/*</Button>*/}
                    </FormControl>

                </form>

            </Paper>
        );
    }
}

export default Form;