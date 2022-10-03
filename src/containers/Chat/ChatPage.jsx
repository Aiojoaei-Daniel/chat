import React, { useState, useEffect } from "react";

import { Options, MessageSection, UsersList, UsersSidebar } from "./";
import { getUsers } from "../../utils/getUsers";

import "./chatPage.css";

const ChatPage = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState({});
  const [currentUser, setCurrentUser] = useState();
  const [selectedFriend, setSelectedFriend] = useState();

  useEffect(() => {
    const users = getUsers();
    setUsers(users);
  }, []);

  return (
    <div className="chat-page">
      <Options
        users={users}
        setMessages={setMessages}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setSelectedFriend={setSelectedFriend}
      />
      <UsersSidebar
        users={users}
        messages={messages}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
      {currentUser ? (
        <MessageSection
          users={users}
          messages={messages}
          setMessages={setMessages}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          selectedFriend={selectedFriend}
        />
      ) : (
        <UsersList setCurrentUser={setCurrentUser} users={users} />
      )}
    </div>
  );
};

export default ChatPage;
