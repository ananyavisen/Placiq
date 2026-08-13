import React, { useState } from "react";
import {
  Bot,
  Send,
  ExternalLink,
  CheckCheck,
  Sparkles,
} from "lucide-react";

const BotAvatar = () => {
  return (
    <div className="ai-bot-avatar">
      <Bot size={24} />
    </div>
  );
};

const Message = ({
  children,
  user = false,
  time,
}) => {
  return (
    <div
      className={`ai-message-row ${
        user ? "ai-user-row" : ""
      }`}
    >
      {!user && <BotAvatar />}

      <div
        className={`ai-message ${
          user
            ? "ai-user-message"
            : "ai-bot-message"
        }`}
      >
        {children}

        <div className="ai-message-time">
          <span>{time}</span>

          {user && (
            <CheckCheck size={14} />
          )}
        </div>
      </div>
    </div>
  );
};

const ChatPanel = () => {
  const [input, setInput] = useState("");
  const [userMessages, setUserMessages] = useState([]);

  const sendMessage = () => {
    const message = input.trim();

    if (!message) {
      return;
    }

    setUserMessages((previous) => [
      ...previous,
      {
        text: message,
        time: "Now",
      },
    ]);

    setInput("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <section className="ai-chat-card">

      {/* Messages */}
      <div className="ai-messages">

        {/* First bot message */}
        <Message time="9:30 PM">
          <p>
            <strong>Hi Anek! 👋</strong>
          </p>

          <p>
            I'm your AI Coach. Ask me anything about DSA,
            System Design, OS, Aptitude, or interview prep.
            I'm here to help you improve every day!
          </p>
        </Message>

        {/* User message */}
        <Message user time="9:31 PM">
          Can you help me revise Operating System concepts?
        </Message>

        {/* Bot response */}
        <Message time="9:31 PM">
          <p>
            Sure! Here's a quick revision list for Operating System:
          </p>

          <ul>
            <li>Processes & Threads</li>
            <li>CPU Scheduling</li>
            <li>Memory Management</li>
            <li>File Systems</li>
            <li>Deadlocks</li>
          </ul>

          <p>
            Would you like a quiz or notes on any of these topics?
          </p>
        </Message>

        {/* User message */}
        <Message user time="9:32 PM">
          Give me a 5 question quiz on CPU Scheduling.
        </Message>

        {/* Bot quiz response */}
        <Message time="9:32 PM">
          <p>
            Great! I've generated a 5 question quiz on CPU
            Scheduling.
          </p>

          <p>
            Click below to start the quiz.
          </p>

          <button className="ai-quiz-button">
            <ExternalLink size={16} />
            Start Quiz
          </button>
        </Message>

        {/* Newly sent messages */}
        {userMessages.map((message, index) => (
          <Message
            key={index}
            user
            time={message.time}
          >
            {message.text}
          </Message>
        ))}

      </div>

      {/* Input */}
      <div className="ai-chat-input-container">

        <input
          type="text"
          value={input}
          onChange={(event) =>
            setInput(event.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Ask anything..."
        />

        <button
          className="ai-send-button"
          onClick={sendMessage}
        >
          <Send size={18} />
        </button>

      </div>

      {/* Disclaimer */}
      <div className="ai-disclaimer">
        <Sparkles size={12} />

        <span>
          AI Coach can make mistakes. Please verify important information.
        </span>
      </div>

    </section>
  );
};

export default ChatPanel;