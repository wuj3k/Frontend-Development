import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';


class Listing extends Component {

    render() {
        const {onRowClick, list, onRemove,onEdit} = this.props;
        const listing = list.map((row, index) => (
            <TableRow className={'row'}>
                <TableCell align="right">{index}</TableCell>
                <TableCell align="right"
                           key={row.imoNumber}
                           onClick={() => onRowClick(row.imoNumber)}
                >
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.imoNumber}</TableCell>
                <TableCell align="right">
                    <button
                        onClick={(event) => {
                            onEdit(event, row.imoNumber)
                        }}
                    >
                        <SettingsIcon/>
                    </button>
                    <button
                        onClick={(event) => {
                            onRemove(event, row.imoNumber)
                        }}
                    >
                        <DeleteIcon/>
                    </button>
                </TableCell>
            </TableRow>
        ));

        const empty = (
            <TableRow>
                <TableCell align="right">Brak</TableCell>
            </TableRow>
        );

        return (
            <Paper className={'container-form'}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>L.p</TableCell>
                            <TableCell align="right">Nazwa statku</TableCell>
                            <TableCell align="right">Identyfikator statku</TableCell>
                            <TableCell align="right">Akcje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.length ? listing : empty}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

Listing.propTypes = {
    onRowClick: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
};

export default Listing;