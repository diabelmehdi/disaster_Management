import React, { useContext, useState } from "react";
import { ToggleSwitch } from "src/Component/ToggleSwitch";
import { MapWithMarker } from "src/Component/MapWithMarker";
import { Message } from "src/Component/Message";
import { ButtonTable } from "src/Component/ButtonTable/index";
import "./AppRescue.css";

export const ThemeContext = React.createContext({
  victims: [],
  setVictims: () => {},
});

export const SosContext = React.createContext({
  sosCases: [],
  setSosCases: () => {},
});
export const MessageContext = React.createContext({
  messageToThePerson: "Hey",
  setMessage: () => {},
});

// constructor(props) {
//   super(props);
//   this.state = { message: "someMessage" };
//   this.changeMessage = this.changeMessage.bind(this);
// }
// changeMessage = message => {
//   this.setState({ message });
// };

function AppRescue() {
  const [message, setMessage] = useState("Hey you");

  function setMessageData(message) {
    setMessage(message);
  }

  const [victims, setVictims] = useState([]);

  function setDataVictims(table) {
    setVictims(table);
  }
  const [sosCases, setSosCases] = useState([]);

  function setDataSOS(table) {
    setSosCases(table);
  }

  return (
    <MessageContext.Provider value={{ message, setMessageData }}>
      <ThemeContext.Provider value={{ victims, setDataVictims }}>
        <SosContext.Provider value={{ sosCases, setSosCases }}>
          <div>
            <ButtonTable messageTo="Table" />
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
        </SosContext.Provider>
      </ThemeContext.Provider>
    </MessageContext.Provider>
  );
}

export default AppRescue;
