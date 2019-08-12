import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import styles from './mystyle2';
import classNames from 'classnames';

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
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
          className={classNames(classes.bgcopy_2)}
        >
          <span
            className={classes.compbuttonlable}
          >
            {this.props.dilogtitle}
          </span>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{ style: { maxWidth: 'none' } }}
          classes={{ paper: classes.dilogstyle }}
        >
          <DialogTitle
            className={classes.dialogtytlestyle}
            id="alert-dialog-title"
          >
            <span
              className={classes.titlestyle}
            >
              {this.props.dilogtitle}
            </span>
            <div className={classes.dilogdivstyle}>
              <Button
                onClick={this.handleClose}
                variant="contained"
                className={classNames(classes.bgcopy_1, classes.margin)}
              >
                <span
                  className={classes.buttonlable}
                >
                  {this.props.actionbtn_1}
                </span>
              </Button>
              <Button
                onClick={this.handleClose}
                variant="contained"
                lassName={classNames(classes.bgcopy_2, classes.margin)}
              >
                <span
                  className={classes.buttonlable}
                >
                  {this.props.actionbtn_2}
                </span>
              </Button>
            </div>
          </DialogTitle>
          <Divider
            variant="middle" />
          <DialogContent>
            {this.props.dialogcontent}
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AlertDialog);
