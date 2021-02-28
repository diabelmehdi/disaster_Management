import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Axios from "axios";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import Box from "@material-ui/core/Box";
import VictimHelper from "src/Component/ApiService/VictimService";
import swal from "sweetalert";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      message: "",
      tabValue: 0,
      notificationContent: <div>Notification</div>,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  ///receive tthe automatic mesage from the backend
  sendMessage() {
    VictimHelper.sendMessage(this.state.name, this.state.message)
      .then((res) => {
        if (res.status == 200) {
          swal("Success", res.data, "success");
        } else {
          swal("Failure", res.data, "error");
        }
        // in case of run message
      })
      .catch((err) => {
        swal("Failure", "try again!! unhandled error", "error");
      });
  }

  handleTabChange(event, newValue) {
    this.setState({
      tabValue: newValue,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Box m={2}>
          <Tabs
            value={this.state.tabValue}
            onChange={this.handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon tabs example"
          >
            <Tab icon={<PhoneIcon />} label="Contact the Responce team" />
            <Tab icon={<MailIcon />} label="Notification" />
          </Tabs>
        </Box>
        <Box m={2}>
          {this.state.tabValue === 0 && (
            <React.Fragment>
              <FormGroup>
                <Label for="name">UserName</Label>
                <Input
                  name="name"
                  onChange={this.handleInputChange}
                  value={this.state.name}
                  placeholder="Enter your name here"
                />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input
                  type="textarea"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  style={{ height: 150 }}
                  name="message"
                  placeholder="What's on your mind?"
                />
              </FormGroup>
              <Button onClick={this.sendMessage}>Submit</Button>
            </React.Fragment>
          )}
          <Box borderBottom={1} m={3} />
        </Box>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(InputForm);
