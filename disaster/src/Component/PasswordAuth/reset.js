import { FormatColorReset } from "@material-ui/icons";
import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
class reset extends React.Component {
  state = {};
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      token: this.props.match.params.id,
      password: this.password,
      password_confirm: this.password_confirm,
    };
    axios
      .post("reset", data)
      .then((res) => {
        console.log(res);
        this.setState({
          reset: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.rest) {
      return <Redirect to={"/Login"} />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Reset Password</h3>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="enter your password"
            onChange={(e) => (this.password = e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="password Confirm"
            onChange={(e) => (this.password_confirm = e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary btn-block"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}
export default reset;
