import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
//import styles from './mystyle';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = (theme) => ({
   root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
   margin: {
      margin: theme.spacing.unit,
   },
   updatebtnstyle: {
      backgroundColor: '#4DA1FF',
      borderRadius: '4px',
      boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.2)',
   },
   titlestyle:{
      color: '#6A717F',
      fontFamily: 'Roboto',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '22px',
      opacity: '0.895457',
      textAlign: 'left',
   },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('899360805-01', 'Satisfied', 0.649, 'datepiker', 'datepiker'),
  createData('899360805-02', 'Satisfied', 0.352, 'datepiker', 'datepiker'),
  createData('899360805-03', 'Satisfied', 1.245, 'datepiker', 'datepiker'),
  createData('899360805-04', 'Satisfied', 0.345, 'datepiker', 'datepiker'),
];



class AlertDialog extends React.Component {
   state = {
      open: false,
   };

   handleClickOpen = () => {
      this.setState({ open: true });
   };

   handleClose = () => {
      this.setState({ open: false });
   };

   render() {
      const { classes } = this.props;

      const table= 
                     <Table className={classes.table}>
                     <TableHead>
                        <TableRow>
                           <TableCell>Load ID</TableCell>
                           <TableCell align="right">Load Status</TableCell>
                           <TableCell align="right">Perccent Full</TableCell>
                           <TableCell align="right">Shipping Date</TableCell>
                           <TableCell align="right">Arrive Date</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {rows.map(row => (
                           <TableRow key={row.id}>
                           <TableCell component="th" scope="row">
                              {row.name}
                           </TableCell>
                           <TableCell align="right">{row.calories}</TableCell>
                           <TableCell align="right">{row.fat}</TableCell>
                           <TableCell align="right">{row.carbs}</TableCell>
                           <TableCell align="right">{row.protein}</TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                     </Table>


      return (
         <div>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
               Load Summary
         </Button>
            <Dialog
               open={this.state.open}
               onClose={this.handleClose}
               aria-labelledby="alert-dialog-title"
               aria-describedby="alert-dialog-description"
               PaperProps={{ style: { maxWidth: 'none' } }}
            >
               <DialogTitle id="alert-dialog-title" style={{ borderBottom: 'solid 0.5px gray' }}>
                  <span className={classes.titlestyle}>{"Load Summary"}</span>
                  <div style={{ float: 'right' }}>
                     <Button onClick={this.handleClose} variant="contained" color="primary" className={classNames(classes.updatebtnstyle, classes.margin)}>
                        Update
                  </Button>
                     <Button variant="contained" color="secondary" disabled className={classNames(classes.margin)}>
                        Cancle
                  </Button>
                  </div>
               </DialogTitle>
               <DialogContent>
                  {table}
               </DialogContent>
            </Dialog>
         </div>
      );
   }
}

export default withStyles(styles)(AlertDialog);
