import React, { Component } from "react";
import axios from "axios";
class forgot extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.email,
    };
    axios
      .post("forgot", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Forgot Password</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="enter your email"
            onChange={(e) => (this.email = e.target.value)}
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
export default forgot;
