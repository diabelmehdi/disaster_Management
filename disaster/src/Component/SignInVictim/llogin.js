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
import Login from "src/Component/LoginVictim/Login";
import "date-fns";
import { useHistory } from "react-router-dom";
import VictimService from "../ApiService/VictimService";

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

class SignInVictim extends React.Component {
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
      var un2 = (this.state.input["username"] = "");
      var nm2 = (this.state.input["name"] = "");
      var eml2 = (this.state.input["email"] = "");
      var nstr2 = (this.state.input["nrStreet"] = "");
      var str2 = (this.state.input["street"] = "");
      var city2 = (this.state.input["city"] = "");
      var decp2 = (this.state.input["description"] = "");
      var dofb2 = (this.state.input["dateOfBirth"] = "");
      var alg2 = (this.state.input["allergy"] = "");
      var blt2 = (this.state.input["bloodType"] = "");
      var tel2 = (this.state.input["tel"] = "");
      var pwd2 = (this.state.input["password"] = "");

      this.setState({ input: input });
      VictimService.createVictim(
        un2,
        nm2,
        eml2,
        nstr2,
        str2,
        city2,
        decp2,
        dofb2,
        alg2,
        blt2,
        tel2,
        pwd2,
        "/Login"
      );
      // window.location.href = "/Login";
      // alert("Registration successful");
    }
  }

  validate() {
    console.log("test16");
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["username"]) {
      isValid = false;
      console.log("test");
      errors["username"] = "Please enter your User Name.";
    }

    if (!input["name"]) {
      isValid = false;
      console.log("test");
      errors["name"] = "Please enter your Full Name.";
    }
    if (!input["allergy"]) {
      isValid = false;
      console.log("test");
      errors["allergy"] = "Please enter your Type of allergy.";
    }
    if (!input["bloodType"]) {
      isValid = false;
      console.log("test");
      errors["bloodType"] = "Please enter your Blood type.";
    }
    if (!input["tel"]) {
      isValid = false;
      console.log("test");
      errors["tel"] = "Please enter your Phone Number.";
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
                name="name"
                value={this.state.input["name"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Full Name"
                id="name"
              />
              <div className="text-danger">{this.state.errors["name"]}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="username"
                value={this.state.input["username"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="User Name"
                id="username"
              />
              <div className="text-danger">{this.state.errors["username"]}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="street"
                value={this.state.input["street"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="street"
                id="street"
              />
              <div className="text-danger">{this.state.errors["street"]}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <form className={classes.container} noValidate>
                <TextField
                  id="dateOfBirth"
                  label="dateOfBirth"
                  type="date"
                  defaultValue="2021-01-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                variant="outlined"
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                class="form-control"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="nrStreet"
                value={this.state.input["nrStreet"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="number street"
                id="nrStreet"
              />
              <div className="text-danger">{this.state.errors["nrStreet"]}</div>
            </Grid>
            <Grid item xs={12}>
              <input
                type="password"
                name="password"
                value={this.state.input["password"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Enter password"
                id="password"
              />
              <div className="text-danger">{this.state.errors["password"]}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                variant="outlined"
                required
                fullWidth
                id="city"
                placeholder="city"
                name="city"
                class="form-control"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="allergy"
                variant="outlined"
                placeholder="allergy"
                label="allergy"
                class="form-control"
                value={this.state.input["allergy"]}
                onChange={this.handleChange}
              />{" "}
              <div className="text-danger">{this.state.errors["allergy"]}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="bloodType"
                value={this.state.input["bloodType"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Blood type"
                id="bloodType"
              />
              <div className="text-danger">
                {this.state.errors["bloodType"]}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="tel"
                value={this.state.input["tel"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="tel"
                id="tel"
              />
              <div className="text-danger">{this.state.errors["tel"]}</div>
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
                  name="description"
                  class="form-control"
                  placeholder="Description"
                  id="filled-basic"
                  variant="filled"
                />
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
            <Link href="Login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Box>
        </div>
      </Container>
    );
  }
}
export default withStyles(styles)(SignInVictim);
