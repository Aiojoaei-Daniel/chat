import React from "react";
import PropTypes from "prop-types";

import { add, send } from "../../../../../assets";

import "./messageInput.css";

const MessageInput = ({ message, handleMessage, handleSendMessage }) => {
  return (
    <form onSubmit={handleSendMessage} className="message-input">
      <div className="add">
        <img src={add} alt="add icon" />
      </div>
      <input
        type="text"
        onChange={handleMessage}
        placeholder="Type a message..."
        value={Object.keys(message).length !== 0 ? message.text : ""}
      />
      <button className="send" type="submit" disabled={!message.text}>
        <img
          src={send}
          alt="send icon"
          style={{ cursor: !message.text ? "not-allowed" : "pointer" }}
        />
      </button>
    </form>
  );
};

MessageInput.prototype = {
  message: PropTypes.object,
  handleMessage: PropTypes.func,
  handleSendMessage: PropTypes.func,
};

export default MessageInput;
