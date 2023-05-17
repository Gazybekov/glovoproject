import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import "./Comment.css";

const Comment = () => {
  const [messages, setMessages] = useState([]);
  const { email, user } = useAuth();

  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className="forum-container">
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div className="message" key={index}>
              <div className="avatar">
                <img
                  src="https://www.pngall.com/wp-content/uploads/10/Message-Logo-PNG-Photo.png"
                  alt="Avatar"
                />
              </div>
              <div>
                <h2>{user.email}</h2>
                <h5>{Date()}</h5>
              </div>
              <div className="content">{message}</div>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={newMessage}
            onChange={handleInputChange}
            placeholder="Введите ваш отзыв"
          />
          <button onClick={handleSendMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
