import React, { useState } from "react";
import {
  Bot,
  Send,
  ExternalLink,
  CheckCheck,
  Sparkles,
} from "lucide-react";

const API_BASE_URL = "http://127.0.0.1:8000/api/ai-coach";

const BotAvatar = () => {
  return (
    <div className="ai-bot-avatar">
      <Bot size={24} />
    </div>
  );
};

const Message = ({ children, user, time }) => {
  const rowClass = user
    ? "ai-message-row ai-user-row"
    : "ai-message-row";

  const messageClass = user
    ? "ai-message ai-user-message"
    : "ai-message ai-bot-message";

  return (
    <div className={rowClass}>
      {!user && <BotAvatar />}

      <div className={messageClass}>
        {children}

        <div className="ai-message-time">
          <span>{time}</span>

          {user && <CheckCheck size={14} />}
        </div>
      </div>
    </div>
  );
};

const getCookie = (name) => {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const parts = cookie.trim().split("=");

    const key = parts.shift();
    const value = parts.join("=");

    if (key === name) {
      return decodeURIComponent(value);
    }
  }

  return null;
};

const ChatPanel = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [conversationId, setConversationId] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const message = input.trim();

    if (!message || loading) {
      return;
    }

    setMessages((previous) => {
      return [
        ...previous,
        {
          text: message,
          user: true,
          time: "Now",
        },
      ];
    });

    setInput("");
    setLoading(true);

    try {
      const csrfToken = getCookie("csrftoken");

      const response = await fetch(
        API_BASE_URL + "/chat/",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            ...(csrfToken
              ? { "X-CSRFToken": csrfToken }
              : {}),
          },
          body: JSON.stringify({
            message: message,
            conversation_id: conversationId,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            data?.detail ||
            "Unable to get a response from AI Coach."
        );
      }

      if (data.conversation_id) {
        setConversationId(data.conversation_id);
      }

      if (data.message && data.message.content) {
        setMessages((previous) => {
          return [
            ...previous,
            {
              text: data.message.content,
              user: false,
              time: "Now",
            },
          ];
        });
      }
    } catch (error) {
      console.error("AI Coach error:", error);

      setMessages((previous) => {
        return [
          ...previous,
          {
            text:
              error.message ||
              "Something went wrong. Please try again.",
            user: false,
            time: "Now",
          },
        ];
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="ai-chat-card">

      <div className="ai-messages">

        {/* Initial bot message */}
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

        {/* Demo conversation */}
        <Message user time="9:31 PM">
          Can you help me revise Operating System concepts?
        </Message>

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

        <Message user time="9:32 PM">
          Give me a 5 question quiz on CPU Scheduling.
        </Message>

        <Message time="9:32 PM">
          <p>
            Great! I've generated a 5 question quiz on CPU Scheduling.
          </p>

          <p>
            Click below to start the quiz.
          </p>

          <button className="ai-quiz-button">
            <ExternalLink size={16} />
            Start Quiz
          </button>
        </Message>

        {/* Real messages */}
        {messages.map((message, index) => {
          return (
            <Message
              key={index}
              user={message.user}
              time={message.time}
            >
              {message.text}
            </Message>
          );
        })}

        {/* Loading */}
        {loading && (
          <Message time="Now">
            <p>AI Coach is thinking...</p>
          </Message>
        )}

      </div>

      {/* Input */}
      <div className="ai-chat-input-container">

        <input
          type="text"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything..."
          disabled={loading}
        />

        <button
          className="ai-send-button"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
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