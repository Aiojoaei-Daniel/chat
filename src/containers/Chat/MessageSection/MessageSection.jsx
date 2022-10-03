import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import {
  TextSection,
  CurrentUserInfo,
  FriendInfo,
  MessageInput,
} from "./components";

import { DATA_KEY_NAME, STORAGE_PATH } from "./copy";

import "./messageSection.css";

const MessageSection = ({
  selectedFriend,
  currentUser,
  messages,
  setMessages,
}) => {
  const [message, setMessage] = useState({});

  const dummy = useRef();
  const key = currentUser?.id + selectedFriend?.id;

  const onStorageUpdate = (storageData) => {
    const { key, newValue } = storageData;

    if (key === DATA_KEY_NAME) {
      setMessages(JSON.parse(newValue));
    }
  };

  useEffect(() => {
    let newMessages = {};

    if (
      currentUser?.id &&
      selectedFriend?.id &&
      !messages.hasOwnProperty(key)
    ) {
      newMessages = {
        ...messages,
        [key]: [{}],
      };

      localStorage.setItem(DATA_KEY_NAME, JSON.stringify(newMessages));
    } else {
      localStorage.setItem(DATA_KEY_NAME, JSON.stringify(messages));
    }

    window.addEventListener(STORAGE_PATH, onStorageUpdate);
    return () => {
      window.removeEventListener(STORAGE_PATH, onStorageUpdate);
    };
  }, [messages, selectedFriend]);

  const handleMessage = (event) => {
    const message = event.target.value;
    const time = new Date();

    let [hoursPrefix, minutesPrefix] = ["", ""];

    if (time.getHours() < 10) hoursPrefix = "0";
    if (time.getMinutes() < 10) minutesPrefix = "0";

    setMessage({
      sender: currentUser.name,
      text: message,
      time: `${hoursPrefix}${time.getHours()}:${minutesPrefix}${time.getMinutes()}`,
    });
  };

  const handleSendMessage = (event) => {
    event.preventDefault();

    const data = JSON.parse(localStorage.getItem(DATA_KEY_NAME));

    const newMessages = {
      ...data,
      [key]: [...data[key], message],
    };

    localStorage.setItem(DATA_KEY_NAME, JSON.stringify(newMessages));

    const updatedData = JSON.parse(localStorage.getItem(DATA_KEY_NAME));

    setMessages(updatedData);

    setMessage({});

    dummy.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="chat-container">
      {selectedFriend ? (
        <div className="chat-section">
          <FriendInfo selectedFriend={selectedFriend} />
          <TextSection
            selectedFriend={selectedFriend}
            messages={messages}
            currentUser={currentUser}
            dummy={dummy}
          />
          <MessageInput
            message={message}
            handleSendMessage={handleSendMessage}
            handleMessage={handleMessage}
          />
        </div>
      ) : (
        <CurrentUserInfo currentUser={currentUser} />
      )}
    </div>
  );
};

MessageSection.propTypes = {
  messages: PropTypes.object,
  currentUser: PropTypes.any,
  selectedFriend: PropTypes.any,
  setMessages: PropTypes.func,
};

export default MessageSection;
