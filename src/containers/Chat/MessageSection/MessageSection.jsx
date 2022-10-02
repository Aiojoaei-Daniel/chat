import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { add, send } from "../../../assets";
import "./messageSection.css";

const MessageSection = ({
  users,
  selectedUser,
  currentUser,
  setCurrentUser,
  messages,
  setMessages,
}) => {
  const [message, setMessage] = useState({});
  const dummy = useRef();

  const onStorageUpdate = (storageData) => {
    const { key, newValue } = storageData;

    if (key === "messages") {
      setMessages(JSON.parse(newValue));
    }
  };

  useEffect(() => {
    let newMessages = {};
    if (
      currentUser?.id &&
      selectedUser?.id &&
      !messages.hasOwnProperty(currentUser.id + selectedUser.id)
    ) {
      newMessages = {
        ...messages,
        [currentUser.id + selectedUser.id]: [{}],
      };

      localStorage.setItem("messages", JSON.stringify(newMessages));
    } else {
      localStorage.setItem("messages", JSON.stringify(messages));
    }

    console.log(newMessages, messages);

    window.addEventListener("storage", onStorageUpdate);
    return () => {
      window.removeEventListener("storage", onStorageUpdate);
    };
  }, [messages, selectedUser]);

  const handleCurrentUser = (user) => {
    setCurrentUser(user);
  };

  const handleMessage = (event) => {
    const message = event.target.value;
    const time = new Date();
    let [hours, minutes] = ["", ""];
    console.log(typeof time.getHours());
    if (time.getHours() < 10) hours = "0";
    if (time.getMinutes() < 10) minutes = "0";
    setMessage({
      sender: currentUser.name,
      text: message,
      time: `${hours}${time.getHours()}:${minutes}${time.getMinutes()}`,
    });
  };

  const handleSendMessage = (event) => {
    event.preventDefault();

    const data = JSON.parse(localStorage.getItem("messages"));

    const newMessages = {
      ...data,
      [currentUser.id + selectedUser.id]: [
        ...data[currentUser.id + selectedUser.id],
        message,
      ],
    };

    localStorage.setItem("messages", JSON.stringify(newMessages));

    const updatedData = JSON.parse(localStorage.getItem("messages"));

    setMessages(updatedData);

    setMessage({});

    dummy.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="chat-info">
      {!currentUser ? (
        <div className="container-users">
          <div className="users-title">
            <p>Users</p>
          </div>
          <div className="select-user">
            {users.map((user, index) => (
              <p key={index} onClick={() => handleCurrentUser(user)}>
                {user.name}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div className="chat-section">
          {selectedUser ? (
            <div className="selected-user-info">
              <img src={selectedUser?.picture} alt="" />
              <p>{selectedUser?.name}</p>
            </div>
          ) : null}
          <div
            className="message-section"
            style={{
              display: !selectedUser ? "flex" : "block",
              justifyContent: !selectedUser ? "center" : null,
              alignItems: !selectedUser ? "flex-end" : null,
            }}
          >
            {!selectedUser ? (
              <div className="current-user-details">
                <img src={currentUser?.picture} alt="Current User Picture" />
                <p>{currentUser?.name}</p>
                <p>Incepe conversatia cu unul din prietenii tai.</p>
              </div>
            ) : messages.hasOwnProperty(currentUser.id + selectedUser.id) ? (
              messages[currentUser.id + selectedUser.id].map(
                (message, index) => (
                  <div
                    className="container-message"
                    style={{
                      display: "flex",
                      justifyContent:
                        message.sender === currentUser.name
                          ? "flex-end"
                          : "flex-start",
                    }}
                  >
                    {message.text ? (
                      <div
                        key={index}
                        className="message"
                        style={{
                          backgroundColor:
                            message.sender === currentUser.name
                              ? "#3c374c"
                              : "#5C42AC",
                        }}
                      >
                        <p>{message?.text}</p>
                      </div>
                    ) : null}
                    <p>{message?.time}</p>
                  </div>
                )
              )
            ) : null}
            <div
              style={{
                height: "2rem",
              }}
              ref={dummy}
            ></div>
          </div>
          {selectedUser ? (
            <form onSubmit={handleSendMessage} className="message-input">
              <div className="add">
                <img src={add} alt="add icon" />
              </div>
              <input
                type="text"
                name=""
                onChange={handleMessage}
                placeholder="Type a message..."
                value={Object.keys(message).length !== 0 ? message.text : ""}
              />
              <button className="send" type="submit" disabled={!message.text}>
                <img
                  src={send}
                  alt="send icon"
                  style={{ cursor: !message.text ? "not-allowed" : "pointer" }}
                />
              </button>
            </form>
          ) : null}
        </div>
      )}
    </div>
  );
};

MessageSection.propTypes = {
  users: PropTypes.array,
};

export default MessageSection;
