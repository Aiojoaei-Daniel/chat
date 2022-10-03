import React from "react";
import PropTypes from "prop-types";

import { OPTIONS } from "./../copy";

import "./logout.css";

const Logout = ({ logout, setCurrentUser, setSelectedFriend, setMessages }) => {
  console.log(typeof logout);
  const handleUser = () => {
    setSelectedFriend();
    setMessages({});
    setCurrentUser();
  };

  return (
    <div className="logout" onClick={handleUser}>
      <img src={logout} alt="logout pic" />
      <p>{OPTIONS.LOGOUT}</p>
    </div>
  );
};

Logout.prototype = {
  logout: PropTypes.string,
  setMessages: PropTypes.func,
  setCurrentUser: PropTypes.func,
  setSelectedFriend: PropTypes.func,
};

export default Logout;
