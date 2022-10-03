import React from "react";
import PropTypes from "prop-types";

import { USERS_LIST } from "../../copy";

import "./usersList.css";

const UsersList = ({
  messages,
  users,
  currentUser,
  searchValue,
  selectedFriend,
  handleSelectedFriend,
}) => {
  const filteredUsers = currentUser
    ? users.filter((user) => user.id !== currentUser.id)
    : [];

  const sortedUsers = filteredUsers.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const getData = (user, value) => {
    const currentMessage = messages[user.id + currentUser.id];
    const lastMessage = currentMessage?.length - 1;

    return currentMessage[lastMessage][value];
  };

  return (
    <div className="sidebar-users">
      {sortedUsers.length === 0 ? (
        <p className="no-users-found">{USERS_LIST.NO_USERS_FOUND}</p>
      ) : (
        sortedUsers.map((user) => (
          <div
            key={user.id}
            className="sidebar-user"
            onClick={() => handleSelectedFriend(user)}
            style={{
              backgroundColor:
                user?.name === selectedFriend?.name ? "#3c374c" : null,
            }}
          >
            <div className="user-info time">
              <img src={user?.picture} alt="user-pic" />
              <p style={{ textAlign: "start" }}>{user?.name}</p>
              <p className="time">
                {messages.hasOwnProperty(user.id + currentUser.id)
                  ? getData(user, "time")
                  : null}
              </p>
            </div>
            {messages.hasOwnProperty(user.id + currentUser.id) &&
            // if the number of messages in the conversation is greater than 1
            // then display last message in user's sidebar
            messages[user.id + currentUser.id].length > 1 ? (
              <p>
                {getData(user, "sender")}: {getData(user, "text")}
              </p>
            ) : (
              <p>{USERS_LIST.NO_MESSAGES}</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

UsersList.prototype = {
  users: PropTypes.array,
  messages: PropTypes.object,
  currentUser: PropTypes.any,
  searchValue: PropTypes.string,
  selectedFriend: PropTypes.any,
  handleSelectedFriend: PropTypes.func,
};

export default UsersList;
