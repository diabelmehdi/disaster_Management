import React, { useContext, useState } from "react";
import { ToggleSwitch } from "src/Component/ToggleSwitch";
import { MapWithMarker } from "src/Component/MapWithMarker";
import { Message } from "src/Component/Message";
import { ButtonTable } from "src/Component/ButtonTable/index";
import "./AppRescue.css";

export const ThemeContext = React.createContext({
  victims: [],
  setVictims: () => {}
});

function AppRescue() {
  const [victims, setVictims] = useState([]);

  function setDataVictims(table){
    setVictims(table);
  }
  return (
    <ThemeContext.Provider value={{victims, setDataVictims}}>
      <div>
        <ButtonTable messageTo='Table' />
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
