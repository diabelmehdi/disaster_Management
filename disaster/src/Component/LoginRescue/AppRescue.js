import React, { useState } from "react";
import { ToggleSwitch } from "./Component/ToggleSwitch";
import { MapWithMarker } from "./Component/MapWithMarker";
import { Message } from "./Component/Message";
import { ButtonTable } from "./Component/ButtonTable";
import "./AppRescue.css";

export const ThemeContext = React.createContext({
  message: "Madzia",
  setMessage: (mess) => {},
});

function AppRescue() {
  const [message, setMessage] = useState("Message");

  return (
    <ThemeContext.Provider value={{ message, setMessage }}>
      <div>
        <div class="topnav">
          <a href="#home">RescueHelper</a>
          <a href="#back">Back</a>
          <a href="#user">User</a>
        </div>
        <ButtonTable messageTo={message} />
        <div class="lol">
          <MapWithMarker />
        </div>
        <div class="content">
          <div class="left">
            <Message />
          </div>
          <div class="right">
            <div>
              {" "}
              <ToggleSwitch title="Switch to light up" />
              <ToggleSwitch title="Switch to call everyone" />
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default AppRescue;
