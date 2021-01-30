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
import Modal from "@material-ui/core/Modal";
import SignUp from "src/Component/SignInVictim/llogin";
import Link from "@material-ui/core/Link";
import { InputForm } from "src/Component/Notification";
import { useHistory } from "react-router-dom";
const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit,
  },
  paper: {
    backgroundColor: "white",
  },
});

class LoginTab extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     openModal: false,
  //   };
  // }
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleConnection = this.handleConnection.bind(this);
  }
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleConnection(event) {
    console.log("test1");
    event.preventDefault();
    // this.props.history.push("/LoginRescue");
    if (this.validateConnForm()) {
      console.log(this.state);

      let input = {};
      input["User_Name"] = "";
      input["password1"] = "";
      this.setState({ input: input });
      window.location.href = "/Landing";
      alert("Registration successful");
    }
  }

  validateConnForm() {
    console.log("test15");
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["User_Name"]) {
      isValid = false;
      console.log("test");
      errors["User_Name"] = "Please enter your User name.";
    }

    if (!input["password1"]) {
      isValid = false;
      errors["password1"] = "Please enter your password.";
    }

    this.setState({
      errors: errors,
    });
    console.log(errors, input);
    return isValid;
  }

  manageModal(openModalParam) {
    this.setState({
      openModal: openModalParam,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={1} className={classes.padding}>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Face />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <input
                type="text"
                name="User_Name"
                value={this.state.input["User_Name"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="User Name"
                id="User_Name"
              />
              <div className="text-danger">
                {this.state.errors["User_Name"]}
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Fingerprint />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <input
                type="password"
                name="password1"
                value={this.state.input["password1"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Enter password"
                id="password1"
              />

              <div className="text-danger">
                {this.state.errors["password1"]}
              </div>
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
              <Link href="forgot" color="primary" variant="body2">
                Forgot password ?
              </Link>
              {/* <Button
                disableFocusRipple
                disableRipple
                style={{ textTransform: "none" }}
                variant="text"
                color="primary"
                href="/forgot"
              >
                Forgot password ?
              </Button> */}
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: "11px" }}>
            <Button
              variant="outlined"
              color="primary"
              style={{ textTransform: "none" }}
              onClick={this.handleConnection}
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
                open={this.state.openModal}
                onClose={() => this.manageModal(false)}
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
