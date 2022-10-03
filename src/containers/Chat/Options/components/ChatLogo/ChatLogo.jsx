import React from "react";
import PropTypes from "prop-types";

import { OPTIONS } from "../copy";
import "./chatLogo.css";

const ChatLogo = ({ chatIcon }) => {
  return (
    <div className="chat-logo">
      <img src={chatIcon} alt="chat-icon" />
      <p>{OPTIONS.TITLE}</p>
    </div>
  );
};

ChatLogo.prototype = {
  chatIcon: PropTypes.string,
};

export default ChatLogo;
