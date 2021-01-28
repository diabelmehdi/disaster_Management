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
      input["First Name"] = "";
      input["Last Name"] = "";
      input["User Name"] = "";
      input["Blood type"] = "";
      input["Phone Number"] = "";
      input["password"] = "";
      this.setState({ input: input });
      window.location.href = "/Login";
      alert("Registration successful");
    }
  }

  validate() {
    console.log("test16");
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["First Name"]) {
      isValid = false;
      console.log("test");
      errors["First Name"] = "Please enter your First Name.";
    }

    if (!input["Last Name"]) {
      isValid = false;
      console.log("test");
      errors["Last Name"] = "Please enter your Last Name.";
    }
    if (!input["User Name"]) {
      isValid = false;
      console.log("test");
      errors["User Name"] = "Please enter your User Name.";
    }
    if (!input["Blood type"]) {
      isValid = false;
      console.log("test");
      errors["Blood type"] = "Please enter your Blood type.";
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
                name="First Name"
                value={this.state.input["First Name"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="First Name"
                id="First Name"
              />
              <div className="text-danger">
                {this.state.errors["First Name"]}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="Last Name"
                value={this.state.input["Last Name"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Last Name"
                id="Last Name"
              />
              <div className="text-danger">
                {this.state.errors["Last Name"]}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="User Name"
                value={this.state.input["User Name"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="User Name"
                id="User Name"
              />
              <div className="text-danger">
                {this.state.errors["User Name"]}
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
                id="Location"
                label="Location"
                name="Location"
                autoComplete="lction"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Allergy"
                variant="outlined"
                required
                fullWidth
                id="Allergy"
                label="Allergy"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="Blood type"
                value={this.state.input["Blood type"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Blood type"
                id="Blood type"
              />
              <div className="text-danger">
                {this.state.errors["Blood type"]}
              </div>
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
              <div className="text-danger">
                {this.state.errors["Phone Number"]}
              </div>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I Agree to the Policy"
              />
            </Grid>
            <Grid item xs={12}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="filled-basic"
                  label="Description"
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
