import React, {useState, useContext} from "react";
import "./Style.css"
import {ThemeContext} from "src/AppRescue";

export const Message = () => {
  const {setMessage} = useContext(ThemeContext);
  const hangleChange = (e) => setMessage(e.target.value);
  
  return (
    <div class="chat-popup" id="myForm">
    
      <form action="" class="form-container">
      <label id = "label-msg" for="msg"><b>Message To The Victim</b></label>
        <textarea id = "textField" type = "message" placeholder="Type message.." name="msg" onChange={ (e) =>hangleChange(e) } required></textarea>
        <button type="submit" class="btn" onClick = {hangleChange}>Send</button>
      </form>
      
    </div>
    
  );
}