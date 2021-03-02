import React from "react";
import ReactDOM from "react-dom";
import SosService from "src/Component/ApiService/SosService";
import Disaster from "src/Component/Notification";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import "./Style.css";

class TimerInput extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: 100 }}>
        <h3>Input your desired time</h3>
        <input
          type="number"
          value={this.props.value}
          onChange={this.props.handleChange}
          required
        />
      </div>
    );
  }
}

class Timer extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 100, marginLeft: 100 }}>
          {this.props.value}:{this.props.seconds}
        </h1>
      </div>
    );
  }
}

class StartButton extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: 130 }}>
        <button
          className="btn btn-lg btn-success"
          disabled={!this.props.value}
          onClick={this.props.startCountDown}
        >
          Start
        </button>
      </div>
    );
  }
}

class SOS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      value: "",
      isClicked: false,
    };
    // this.secondsRemaining;
    // this.intervalHandle;
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var t = this;
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let sos = {
          latitude: position.coords.latitude,
          longtitude: position.coords.longitude,
          date: date,
        };
        SosService.createSos(sos).then((response) => {
          localStorage.setItem("LastSOSId", response.data.id);
          try {
            var refreshId = setInterval(async () => {
              SosService.getSOSTimerById(response.data.id).then((resp) => {
                if (resp.data > 0) {
                  t.setState({ value: resp.data });
                  t.startCountDown();
                  clearInterval(refreshId);
                }
              });
            }, 1000);
          } catch (e) {
            console.log(e);
          }
        });
      },
      function (e) {
        alert(e.code);
      },
      { timeout: 30000, enableHighAccuracy: false }
    );
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;

    this.setState({
      value: min,
      seconds: sec,
    });

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      });
    }

    if (min < 10) {
      this.setState({
        value: "0" + min,
      });
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.value;
    this.secondsRemaining = time * 60;
    this.setState({
      isClicked: true,
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Grid item xs={12}>
              <Box Cdisplay="flex" justifyContent="center" m={1} p={1}>
                <Typography align="center">
                  We are Coming to Save you on this Time
                </Typography>
              </Box>
            </Grid>
            <Timer value={this.state.value} seconds={this.state.seconds} />
          </div>
        </div>
      </div>
    );
  }
}

export default SOS;
