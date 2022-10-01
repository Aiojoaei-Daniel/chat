import React from "react";

import { logout } from "../../../assets";
import "./options.css";

const Options = ({ currentUser, setCurrentUser, setSelectedUser }) => {
  const handleUser = () => {
    setSelectedUser();
    setCurrentUser();
  };

  return (
    <div className="options-container">
      <div className="sidebar-header">
        {/* <img src={chatIcon2} alt="" />
        <p>CHAT</p> */}
        <div className="current-user-info">
          <img src={currentUser?.picture} alt="" />
          <p>{currentUser?.name}</p>
        </div>
      </div>
      <div className="options">
        <p>
          <b>+</b> New Conversation
        </p>
        <p>Chat</p>
        <p>Contacts</p>
        <p>Deleted</p>
        <p>Favorite</p>
        <p>Setting</p>
        <p>About us</p>
      </div>
      {currentUser ? (
        <div className="logout" onClick={handleUser}>
          <img src={logout} alt="" onClick={handleUser} />
          <p>Logout</p>
        </div>
      ) : null}
    </div>
  );
};

export default Options;
