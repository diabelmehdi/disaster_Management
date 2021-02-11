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
import SignInRescue from "src/Component/SignInRescue/rlogin";
import { InputForm } from "src/Component/Notification";
import { useHistory } from "react-router-dom";
import AuthService from "src/Component/ApiService/AuthService";
import Alert from "@material-ui/lab/Alert";

const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit,
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.props.history.push("/LoginRescue");
    if (this.validate()) {
      console.log(this.state);

      var un = this.state.input["Matriculation Number"];
      var pwd = this.state.input.password;

      AuthService.loginUser(un, pwd, "/LoginRescue").catch((error) => {
        if (error == 401) {
          this.setState({
            UnauthorisedError: (
              <Alert variant="filled" severity="error">
                You are not authorized
              </Alert>
            ),
          });
        }
      });

      // let input = {};
      // input["Matriculation Number"] = "";
      // input["password"] = "";
      // this.setState({ input: input });
      // // window.location.href = "/LoginRescue";
      // alert("Registration successful");
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    this.setState({
      UnauthorisedError: null,
    });

    if (!input["Matriculation Number"]) {
      isValid = false;
      console.log("test");
      errors["Matriculation Number"] = "Please enter your name.";
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
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
      <form onSubmit={this.handleSubmit}>
        <Paper className={classes.padding}>
          <div className={classes.margin}>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Face />
              </Grid>
              <Grid item md={true} sm={true} xs={true}>
                <input
                  type="text"
                  name="Matriculation Number"
                  value={this.state.input["Matriculation Number"]}
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Matriculation Number"
                  id="Matriculation Number"
                />
                <div className="text-danger">
                  {this.state.errors["Matriculation Number"]}
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
                  name="password"
                  value={this.state.input.password}
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Enter password"
                  id="password"
                />

                <div className="text-danger">{this.state.errors.password}</div>
              </Grid>
            </Grid>
            <br />
            {this.state.UnauthorisedError}
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
                // href="/LoginRescue"
                type="submit"
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
                  <SignInRescue />
                </Modal>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </form>
    );
  }
}

export default withStyles(styles)(LoginTab);
