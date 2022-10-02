import React from "react";
import PropTypes from "prop-types";

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

  const handleSelectedUser = (user) => {
    console.log(user?.name, selectedUser?.name);
    if (user?.name === selectedUser?.name) {
      setSelectedUser();
    } else {
      setSelectedUser(user);
    }
  };
  console.log("messages de aici de la mn", messages);
  return (
    <div className="sidebar">
      <div className="search-bar"></div>
      <div className="sidebar-users">
        {filteredUsers.length !== 0 ? (
          filteredUsers.map((user) => (
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
                  {messages.hasOwnProperty(user.id + currentUser.id)
                    ? messages[user.id + currentUser.id][
                        messages[user.id + currentUser.id]?.length - 1
                      ]?.time
                    : null}
                </p>
              </div>
              {messages.hasOwnProperty(user.id + currentUser.id) ? (
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
