import React from "react";
import PropTypes from "prop-types";

import { usersIcon } from "../../../assets";
import "./usersList.css";

const USERS_TITLE = "Users";

const UsersList = ({ setCurrentUser, users }) => {
  return (
    <div className="container-users">
      <div className="users-title">
        <p>{USERS_TITLE}</p>
        <img src={usersIcon} alt="users icon" />
      </div>
      <div className="select-user">
        {users.map((user, index) => (
          <p key={index} onClick={() => setCurrentUser(user)}>
            {user.name}
          </p>
        ))}
      </div>
    </div>
  );
};

UsersList.prototype = {
  users: PropTypes.array,
  setCurrentUser: PropTypes.func,
};

export default UsersList;
