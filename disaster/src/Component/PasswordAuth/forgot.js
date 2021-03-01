import React, { Component } from "react";
import RescueHelperService from "../ApiService/RescueHelperService";
class forgot extends React.Component {


  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     email: this.email,
  //   };
  //   axios
  //     .post("forgot", data)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }
  
   handleSubmit = () => {
     var email = {
       "email":this.state.email
     }
    console.log()
    RescueHelperService.sendPasswordEmail(email).then(res=>{
      
    }).catch(error=>{
      alert(error)
    })
  }

  handleInputChange(e) {
    this.setState({
      email: e.target.value,
    });
  }
  render() {
    return (
      <form>
        <h3>Forgot Password</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="enter your email"
            onChange={(e) => this.handleInputChange(e) }
          />
        </div>
        <button
          type="button"
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
