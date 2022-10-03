import React from "react";
import PropTypes from "prop-types";

import "./textSection.css";

const TextSection = ({ selectedFriend, messages, currentUser, dummy }) => {
  const key = currentUser.id + selectedFriend.id;

  return (
    <div
      className="message-section"
      style={{
        display: !selectedFriend ? "flex" : "block",
        justifyContent: !selectedFriend ? "center" : null,
        alignItems: !selectedFriend ? "flex-end" : null,
      }}
    >
      {messages.hasOwnProperty(key)
        ? messages[key].map((message, index) => (
            <div
              key={index}
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
          ))
        : null}
      <div
        style={{
          height: "2rem",
        }}
        ref={dummy}
      ></div>
    </div>
  );
};

TextSection.prototype = {
  dummy: PropTypes.any,
  messages: PropTypes.object,
  currentUser: PropTypes.any,
  selectedFriend: PropTypes.any,
};

export default TextSection;
