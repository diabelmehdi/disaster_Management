import React, { useState } from "react";
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { Face, Fingerprint } from "@material-ui/icons";
import Modal from "react-modal";
import SignUp from "src/Component/SignUp/llogin";
import { InputForm } from "src/Component/Notification";

Modal.setAppElement("#root");

const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

class LoginTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  manageModal(openModalParam) {
    this.setState({
      openModal: openModalParam,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.padding}>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Face />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="username"
                label="Username"
                type="email"
                fullWidth
                autoFocus
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Fingerprint />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="username"
                label="Password"
                type="password"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Button
                disableFocusRipple
                disableRipple
                style={{ textTransform: "none" }}
                variant="text"
                color="primary"
              >
                Forgot password ?
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: "11px" }}>
            <Button
              variant="outlined"
              color="primary"
              style={{ textTransform: "none" }}
              href="/Landing"
            >
              Login
            </Button>

            <Grid container justify="center" style={{ marginTop: "10px" }}>
              <Button
                variant="outlined"
                color="primary"
                style={{ textTransform: "none" }}
                onClick={() => this.manageModal(true)}
              >
                Sign In
              </Button>

              <Modal
                isOpen={this.state.openModal}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => this.manageModal(false)}
              >
                <SignUp />
              </Modal>
            </Grid>
          </Grid>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(LoginTab);
