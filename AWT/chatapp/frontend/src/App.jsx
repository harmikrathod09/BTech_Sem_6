import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:5000");

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("receive_message");
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && isUsernameSet) {
      const messageData = {
        text: message,
        username: username,
        timestamp: new Date().toLocaleTimeString(),
        id: Date.now() + Math.random()
      };
      socket.emit("send_message", messageData);
      setMessage("");
    }
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setIsUsernameSet(true);
    }
  };

  if (!isUsernameSet) {
    return (
      <div className="app">
        <div className="username-setup">
          <h1>Chat App</h1>
          <form onSubmit={handleUsernameSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              maxLength={20}
              required
            />
            <button type="submit">Join Chat</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="chat-container">
        <div className="chat-header">
          <h1>Chat Room</h1>
          <div className={`connection-status ${isConnected ? 'connected' : 'disconnected'}`}>
            {isConnected ? '🟢 Connected' : '🔴 Disconnected'}
          </div>
        </div>

        <div className="messages-container">
          {chat.length === 0 ? (
            <div className="no-messages">
              <p>No messages yet. Start the conversation!</p>
            </div>
          ) : (
            chat.map((msg) => (
              <div
                key={msg.id}
                className={`message ${msg.username === username ? 'own-message' : 'other-message'}`}
              >
                <div className="message-header">
                  <span className="username">{msg.username}</span>
                  <span className="timestamp">{msg.timestamp}</span>
                </div>
                <div className="message-text">{msg.text}</div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="message-form" onSubmit={sendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            maxLength={500}
            disabled={!isConnected}
          />
          <button type="submit" disabled={!message.trim() || !isConnected}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;