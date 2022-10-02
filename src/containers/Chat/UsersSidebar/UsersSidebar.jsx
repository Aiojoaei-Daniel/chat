import React, { useState } from "react";
import PropTypes from "prop-types";

import { search } from "../../../assets";
import "./usersSidebar.css";

const UsersSidebar = ({
  users,
  selectedUser,
  setSelectedUser,
  currentUser,
  messages,
}) => {
  let filteredUsers = [];
  if (currentUser) {
    filteredUsers = users.filter((user) => user.id !== currentUser.id);
  }

  const [searchValue, setSearchValue] = useState("");

  const handleSelectedUser = (user) => {
    console.log(user?.name, selectedUser?.name);
    if (user?.name === selectedUser?.name) {
      setSelectedUser();
    } else {
      setSelectedUser(user);
    }
  };

  const sortedUsers = filteredUsers.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="sidebar">
      <div className="search-bar">
        <input
          type="text"
          name="search-bar"
          className="search-input"
          placeholder="Search here"
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <div className="search-icon">
          <img src={search} alt="search" />
        </div>
      </div>
      <div className="sidebar-users">
        {sortedUsers.length !== 0 ? (
          sortedUsers.map((user) => (
            <div
              key={user.id}
              className="sidebar-user"
              onClick={() => handleSelectedUser(user)}
              style={{
                backgroundColor:
                  user?.name === selectedUser?.name ? "#3c374c" : null,
              }}
            >
              <div>
                <img src={user?.picture} alt="poza" />
                <p>{user?.name}</p>
                <p className="time">
                  {messages.hasOwnProperty(user.id + currentUser.id) &&
                  (messages[user.id + currentUser.id][
                    messages[user.id + currentUser.id].length - 1
                  ].sender === currentUser?.name ||
                    messages[user.id + currentUser.id][
                      messages[user.id + currentUser.id].length - 1
                    ].sender === selectedUser?.name)
                    ? messages[user.id + currentUser.id][
                        messages[user.id + currentUser.id]?.length - 1
                      ]?.time
                    : null}
                </p>
              </div>
              {messages.hasOwnProperty(user.id + currentUser.id) &&
              (messages[user.id + currentUser.id][
                messages[user.id + currentUser.id].length - 1
              ].sender === currentUser?.name ||
                messages[user.id + currentUser.id][
                  messages[user.id + currentUser.id].length - 1
                ].sender === selectedUser?.name) ? (
                <p>
                  {
                    messages[user.id + currentUser.id][
                      messages[user.id + currentUser.id].length - 1
                    ].sender
                  }
                  :{" "}
                  {
                    messages[user.id + currentUser.id][
                      messages[user.id + currentUser.id].length - 1
                    ].text
                  }
                </p>
              ) : (
                <p>Nu sunt mesaje</p>
              )}
            </div>
          ))
        ) : (
          <div className="no-user-messages">
            <p>Conecteaza-te</p>
            <p>Poarta cele mai interesante conversatii cu prietenii tai.</p>
          </div>
        )}
      </div>
    </div>
  );
};

UsersSidebar.propTypes = {
  users: PropTypes.array,
};

export default UsersSidebar;
