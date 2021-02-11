import React, { useState, useContext} from "react";
import "./Style.css";
import { MessageContext } from "src/Component/LoginRescue/AppRescue";


export const Message = () => {
  const { message,setMessageData } = useContext(MessageContext);
  const [mess,setMess] = useState("hej")

  
  const hangleChange = () => {
    setMessageData(mess);
    alert(message)
  }


  return (
    <div class="chat-popup" id="myForm">
      <form action="" class="form-container">
        <label id="label-msg" for="msg">
          <b>Message To The Victim</b>
        </label>
        <textarea
          id="textField"
          type="message"
          placeholder="Type message.."
          name="msg"
          onChange={(e) => setMess(e.target.value)}
          required
        ></textarea>
        <button type="button" class="btn" onClick={hangleChange}>
          Send
        </button>
      </form>
    </div>
  );
};
