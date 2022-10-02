import React, { useState, useEffect } from "react";

import MessageSection from "./MessageSection/MessageSection";
import UsersSidebar from "./UsersSidebar/UsersSidebar";
import Options from "./Options/Options";

import { getUsers } from "../../utils/getUsers";

import "./chatPage.css";

const ChatPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const users = getUsers();
    setUsers(users);
  }, []);
  return (
    <div className="chat-page">
      <Options
        users={users}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setSelectedUser={setSelectedUser}
        setMessages={setMessages}
      />
      <UsersSidebar
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        messages={messages}
      />
      <MessageSection
        users={users}
        selectedUser={selectedUser}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
};

ChatPage.propTypes = {};

export default ChatPage;
