import React, { useState } from "react";
import PropTypes from "prop-types";

import { NoUserSelected, SearchBar, UsersList } from "./components";
import { search } from "../../../assets";

import "./usersSidebar.css";

const UsersSidebar = ({
  users,
  messages,
  currentUser,
  selectedFriend,
  setSelectedFriend,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSelectedFriend = (user) => {
    return user?.name === selectedFriend?.name
      ? setSelectedFriend()
      : setSelectedFriend(user);
  };

  return currentUser ? (
    <div className="sidebar">
      <SearchBar search={search} setSearchValue={setSearchValue} />
      <UsersList
        users={users}
        messages={messages}
        currentUser={currentUser}
        searchValue={searchValue}
        selectedFriend={selectedFriend}
        handleSelectedFriend={handleSelectedFriend}
      />
    </div>
  ) : (
    <NoUserSelected />
  );
};

UsersSidebar.propTypes = {
  users: PropTypes.array,
  messages: PropTypes.object,
  currentUser: PropTypes.any,
  selectedFriend: PropTypes.any,
  setSelectedFriend: PropTypes.func,
};

export default UsersSidebar;
