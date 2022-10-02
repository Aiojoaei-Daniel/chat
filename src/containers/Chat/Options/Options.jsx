import React from "react";

import {
  chat,
  contact,
  favorite,
  info,
  logout,
  plus,
  setting,
  trash,
} from "../../../assets";
import "./options.css";

const Options = ({ currentUser, setCurrentUser, setSelectedUser }) => {
  const handleUser = () => {
    setSelectedUser();
    setCurrentUser();
  };

  return (
    <div className="options-container">
      {currentUser ? (
        <div className="current-user-info" onClick={() => setSelectedUser()}>
          <img src={currentUser?.picture} alt="" />
          <p>{currentUser?.name}</p>
        </div>
      ) : (
        <div>
          <img src="" alt="" />
          <p>CHAT</p>
        </div>
      )}
      {currentUser ? (
        <div className="options">
          <p>
            <img
              src={plus}
              style={{ width: "27px", height: "27px", objectFit: "cover" }}
              alt=""
            />
            New Conversation
          </p>
          <p>
            <img
              src={chat}
              style={{ width: "20px", height: "20px", objectFit: "cover" }}
              alt=""
            />
            Chat
          </p>
          <p>
            <img
              src={contact}
              style={{ width: "18px", height: "18px", objectFit: "cover" }}
              alt=""
            />
            Contacts
          </p>
          <p>
            <img
              src={trash}
              style={{ width: "25px", height: "25px", objectFit: "cover" }}
              alt=""
            />
            Deleted
          </p>
          <p>
            <img
              src={favorite}
              style={{ width: "25px", height: "25px", objectFit: "cover" }}
              alt=""
            />
            Favorite
          </p>
          <p>
            <img
              src={setting}
              style={{ width: "20px", height: "20px", objectFit: "cover" }}
              alt=""
            />
            Setting
          </p>
          <p>
            <img
              src={info}
              style={{ width: "20px", height: "20px", objectFit: "cover" }}
              alt=""
            />
            About us
          </p>
        </div>
      ) : null}
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
