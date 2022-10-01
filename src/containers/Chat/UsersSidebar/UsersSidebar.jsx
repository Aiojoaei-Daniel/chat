import React from "react";
import PropTypes from "prop-types";

import "./usersSidebar.css";

const UsersSidebar = ({
  users,
  selectedUser,
  setSelectedUser,
  currentUser,
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
              <img src={user?.picture} alt="poza" />
              <p>{user?.name}</p>
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
