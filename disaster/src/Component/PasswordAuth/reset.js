import { FormatColorReset } from "@material-ui/icons";
import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import RescueHelperService from "../ApiService/RescueHelperService";


export const getQueryStringParams = query => {
  return query
      ? (/^[?#]/.test(query) ? query.slice(1) : query)
          .split('&')
          .reduce((params, param) => {
                  let [key, value] = param.split('=');
                  params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
                  return params;
              }, {}
          )
      : {}
};
class reset extends React.Component {
  constructor() {
    super();
    this.state = {
      password: "",
      token:""
    };
  }
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     token: this.props.match.params.id,
  //     password: this.password,
  //     password_confirm: this.password_confirm,
  //   };
  //   axios
  //     .post("reset", data)
  //     .then((res) => {
  //       console.log(res);
  //       this.setState({
  //         reset: true,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
    // Reset password
    onSubmit = async => {
      
      const params = getQueryStringParams(window.location.search);
      this.setState({
        token:params["token"],
      })
      var data = {
        "token": this.state.token,
        "password": this.state.password
      }
      if(!params["token"]){
          alert("eror");
      }else{
        RescueHelperService.sendReset(data).then(res=>{
        }).catch(error=>alert(error))
      }
  }
  handleInputChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

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
            onChange={(e) => (this.handleInputChange(e))}
          />
        </div>

        {/* <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="password Confirm"
            onChange={(e) => (this.password_confirm = e.target.value)}
          />
        </div> */}
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
