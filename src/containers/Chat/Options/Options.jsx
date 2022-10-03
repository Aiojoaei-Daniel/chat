import React from "react";
import PropTypes from "prop-types";

import { ChatLogo, CurrentUserInfo, OptionsBody, Logout } from "./components";
import { chatIcon, logout } from "../../../assets";

import "./options.css";

const Options = ({
  currentUser,
  setCurrentUser,
  setSelectedFriend,
  setMessages,
}) => {
  return currentUser ? (
    <div className="options-container">
      <CurrentUserInfo
        currentUser={currentUser}
        setSelectedFriend={setSelectedFriend}
      />
      <OptionsBody />
      <Logout
        logout={logout}
        setCurrentUser={setCurrentUser}
        setSelectedFriend={setSelectedFriend}
        setMessages={setMessages}
      />
    </div>
  ) : (
    <ChatLogo chatIcon={chatIcon} />
  );
};

Options.prototype = {
  currentUser: PropTypes.any,
  setMessages: PropTypes.func,
  setCurrentUser: PropTypes.func,
  setSelectedFriend: PropTypes.func,
};

export default Options;
