import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import Box from "@material-ui/core/Box";

const InputForm = () => {
  const initialInputState = { name: "", message: "" };
  const [newMessage, setNewMessage] = useState(initialInputState);

  const { name, message } = newMessage;

  const handleInputChange = (e) => {
    setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
  };
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      maxWidth: 500,
    },
  });
  const sendMessage = (e) => {
    Axios({
      method: "POST",
      url: "http://localhost:5000/send", //method send message
      data: { name, message },
      headers: {
        "Content-Type": "application/json",
      },
      //need to change in the backend !! in order to receive the message back
    }).then((res) => {
      if (res.data.msg === "suc") {
        console.log("Email has been sent");
        setNewMessage(initialInputState);
      } else {
        console.log("FAILURE");
      }
      // in case of run message
    });
  };
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [phoneContent, setPhoneContent] = React.useState(<div>101</div>);
  const [notificationContent, setNotificationContent] = React.useState(
    <div>content2</div>
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Box m={2}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab icon={<PhoneIcon />} label="Call the Responce team" />
          <Tab icon={<MailIcon />} label="Notification" />
        </Tabs>
      </Box>
      <Box m={2}>
        {value === 0 && phoneContent}
        {value === 1 && notificationContent}
        <Box borderBottom={1} m={3} />
        <Form>
          <FormGroup>
            <Label for="name">UserName</Label>
            <Input
              name="name"
              onChange={handleInputChange}
              value={name}
              placeholder="Enter your name here"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="message">Message</Label>
            <Input
              type="textarea"
              value={message}
              onChange={handleInputChange}
              style={{ height: 150 }}
              name="message"
              placeholder="What's on your mind?"
            ></Input>
          </FormGroup>
          <Button onClick={sendMessage}>Submit</Button>
        </Form>
      </Box>
    </React.Fragment>
  );
};
export default InputForm;
