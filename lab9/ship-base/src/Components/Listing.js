import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class Listing extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {onRowClick, list} = this.props;

        return (
            <Paper className={'container-form'}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>L.p</TableCell>
                            <TableCell align="right">Nazwa statku</TableCell>
                            <TableCell align="right">Identyfikator statku</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((row, index) => (
                            <TableRow
                                key={row.imoNumber}
                                onClick={() => onRowClick(row.imoNumber)}
                                className={'row'}
                            >
                                <TableCell align="right">{index}</TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.imoNumber}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

Listing.propTypes = {
    onRowClick: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
};

export default Listing;