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
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LoginResc from "src/Component/LoginforRescue/LoginResc";
import "date-fns";
import { useHistory } from "react-router-dom";
import RescueHelperService from "src/Component/ApiService/RescueHelperService";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(0, 0, 1),
  },
  Modal: {
    overflow: "scroll",
  },
});

class SignInRescue extends React.Component {
  // const classes = useStyles();
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
    console.log("test2");
    event.preventDefault();
    if (this.validate()) {
      console.log(this.state);

      let input = {};
      var nm1 = this.state.input["username"];
      var un1 = this.state.input["Matriculation Number"];
      var Bird1 = this.state.input["birthday"];
      var age1 = this.state.input["age"];
      var Prf1 = this.state.input["profession"];
      var dpr1 = this.state.input["department"];
      var dec1 = this.state.input["description"];
      var eml1 = this.state.input["email"];
      var tel1 = this.state.input["phoneNumber"];
      var pwd1 = this.state.input["password"];

      this.setState({ input: input });
      RescueHelperService.createRescueHelper(
        un1,
        pwd1,
        nm1,
        Bird1,
        age1,
        Prf1,
        dpr1,
        dec1,
        eml1,
        tel1,
        "/LoginResc"
      );
      // window.location.href = "/LoginResc";
      // alert("Registration successful");
    }
  }

  validate() {
    console.log("test16");
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["Full Name"]) {
      isValid = false;
      console.log("test");
      errors["Full Name"] = "Please enter your Full Name.";
    }
    if (!input["Matriculation Number"]) {
      isValid = false;
      console.log("test");
      errors["Matriculation Number"] =
        "Please enter your Matriculation Number.";
    }
    if (!input["Profession"]) {
      isValid = false;
      console.log("test");
      errors["Profession"] = "Please enter your Profession.";
    }
    if (!input["Phone Number"]) {
      isValid = false;
      console.log("test");
      errors["Phone Number"] = "Please enter your Phone Number.";
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

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" className={classes.paper} maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {/* <form className={classes.form} noValidate> */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="Full Name"
                value={this.state.input["Full Name"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Full Name"
                id="Full Name"
              />
              {
                <div className="text-danger">
                  {this.state.errors["Full Name"]}
                </div>
              }
            </Grid>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  defaultValue="2021-01-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="department"
                label="department"
                name="department"
                autoComplete="department"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Age"
                variant="outlined"
                required
                fullWidth
                id="Age"
                label="Age"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="Profession"
                value={this.state.input["Profession"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Profession"
                id="Profession"
              />
              {
                <div className="text-danger">
                  {this.state.errors["Profession"]}
                </div>
              }
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="Phone Number"
                value={this.state.input["Phone Number"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Phone Number"
                id="Phone Number"
              />
              {
                <div className="text-danger">
                  {this.state.errors["Phone Number"]}
                </div>
              }
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I Agree to the Policy"
              />
            </Grid>
            <Grid item xs={12}>
              <form className={classes.root} noValidate autoComplete="off">
                <input
                  type="text"
                  name="Description"
                  value={this.state.input["Description"]}
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Description"
                  id="filled-basic"
                  variant="filled"
                />
                {/* <TextField
                  id="filled-basic"
                  label="Description"
                  variant="filled"
                /> */}
              </form>
            </Grid>
            <Button
              variant="outlined"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ textTransform: "none" }}
              onClick={this.handleSubmit}
            >
              Sign Up
            </Button>
          </Grid>
          {/* </form> */}
          <Box
            mt={1}
            mb={1}
            display="flex"
            justifyContent="flex-end"
            width="100%"
          >
            <Link href="LoginResc" variant="body2">
              Already have an account? Sign in
            </Link>
          </Box>
        </div>
      </Container>
    );
  }
}
export default withStyles(styles)(SignInRescue);
