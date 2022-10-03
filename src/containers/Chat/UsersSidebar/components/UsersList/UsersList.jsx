import React from "react";
import PropTypes from "prop-types";

import { USERS_LIST, PROPERTIES, SENDER_TEXT } from "../../copy";

import "./usersList.css";

const UsersList = ({
  messages,
  users,
  currentUser,
  searchValue,
  selectedFriend,
  handleSelectedFriend,
}) => {
  // remove the current user from the list of all users
  const filteredUsers = currentUser
    ? users.filter((user) => user.id !== currentUser.id)
    : [];

  const searchedUsers = filteredUsers.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const getData = (user, value) => {
    const currentMessage = messages[user.id + currentUser.id];
    const lastMessage = currentMessage?.length - 1;

    return currentMessage[lastMessage][value];
  };

  const getSenderAndMessageValues = (user) => {
    return getData(user, PROPERTIES.SENDER) !== currentUser.name
      ? `${getData(user, PROPERTIES.SENDER)}: ${getData(user, PROPERTIES.TEXT)}`
      : `${SENDER_TEXT}:  ${getData(user, PROPERTIES.TEXT)}`;
  };

  return (
    <div className="sidebar-users">
      {searchedUsers.length === 0 ? (
        <p className="no-users-found">{USERS_LIST.NO_USERS_FOUND}</p>
      ) : (
        searchedUsers.map((user) => (
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
                  ? getData(user, PROPERTIES.TIME)
                  : null}
              </p>
            </div>
            {messages.hasOwnProperty(user.id + currentUser.id) &&
            // if the number of messages in the conversation is greater than 1
            // then display last message in user's sidebar
            // the number of messages will be 1 when we click on a random conversation
            messages[user.id + currentUser.id].length > 1 ? (
              <p>{getSenderAndMessageValues(user)}</p>
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
