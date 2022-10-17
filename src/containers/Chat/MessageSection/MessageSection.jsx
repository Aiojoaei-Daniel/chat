import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import {
  TextSection,
  FriendInfo,
  MessageInput,
  CurrentUserInfo,
} from "./components";

import { COLLECTION_NAME, STORAGE_PATH } from "./copy";

import "./messageSection.css";

const MessageSection = ({
  messages,
  setMessages,
  currentUser,
  selectedFriend,
}) => {
  const [message, setMessage] = useState({});

  const dummy = useRef();
  const key = currentUser?.id + selectedFriend?.id;

  const onStorageUpdate = (storageData) => {
    const { key, newValue } = storageData;

    if (key === COLLECTION_NAME) {
      setMessages(JSON.parse(newValue));
    }
  };

  const setMessageToLocalStorage = () => {
    let newMessages = {};

    if (
      currentUser?.id &&
      selectedFriend?.id &&
      !messages.hasOwnProperty(key)
    ) {
      // create a new conversation with a selected friend

      newMessages = {
        ...messages,
        [key]: [{}],
      };

      localStorage.setItem(COLLECTION_NAME, JSON.stringify(newMessages));
    } else {
      localStorage.setItem(COLLECTION_NAME, JSON.stringify(messages));
    }
  };

  useEffect(() => {
    setMessageToLocalStorage();

    // if an update occurs in local storage,
    // it will call a function to update our state
    window.addEventListener(STORAGE_PATH, onStorageUpdate);

    return () => {
      window.removeEventListener(STORAGE_PATH, onStorageUpdate);
    };
  }, [messages, selectedFriend]);

  const handleMessage = (event) => {
    const message = event.target.value;
    const time = new Date();

    let [hoursPrefix, minutesPrefix] = ["", ""];

    // 3:20 => 03:20
    if (time.getHours() < 10) hoursPrefix = "0";
    // 03:5 => 03:05
    if (time.getMinutes() < 10) minutesPrefix = "0";

    setMessage({
      sender: currentUser.name,
      text: message,
      time: `${hoursPrefix}${time.getHours()}:${minutesPrefix}${time.getMinutes()}`,
    });
  };

  const handleSendMessage = (event) => {
    event.preventDefault();

    // get old messages from local storage to add new message to them
    const data = JSON.parse(localStorage.getItem(COLLECTION_NAME));

    const newMessages = {
      ...data,
      [key]: [...data[key], message],
    };

    // update local storage with new messages and get updated messages so we can access them in a new tab
    localStorage.setItem(COLLECTION_NAME, JSON.stringify(newMessages));

    const updatedData = JSON.parse(localStorage.getItem(COLLECTION_NAME));

    setMessages(updatedData);

    setMessage({});

    // automatically scroll to the bottom when a new message is sent
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
            dummy={dummy}
            messages={messages}
            currentUser={currentUser}
            selectedFriend={selectedFriend}
          />
          <MessageInput
            message={message}
            handleMessage={handleMessage}
            handleSendMessage={handleSendMessage}
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
