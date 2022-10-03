import React from "react";
import PropTypes from "prop-types";

import "./currentUserInfo.css";

const NO_SELECTED_CONVERSATION =
  "Start a conversation with one of your friends.";

const CurrentUserInfo = ({ currentUser }) => {
  return (
    <div className="current-user-details">
      <img src={currentUser?.picture} alt="Current User" />
      <p>{currentUser?.name}</p>
      <p>{NO_SELECTED_CONVERSATION}</p>
    </div>
  );
};

CurrentUserInfo.prototype = {
  currentUser: PropTypes.any,
};

export default CurrentUserInfo;
