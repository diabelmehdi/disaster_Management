import React from "react";
import './Style.css'

export const ToggleSwitch = (props) => {
  return (
    <div >
    <p className = "toggle-switch"> {props.title}</p> 
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>

  )
};