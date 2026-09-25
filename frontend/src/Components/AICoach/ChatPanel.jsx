import React, { useEffect, useState } from "react";

import {
    Bot,
    Send,
    CheckCheck,
    Sparkles,
} from "lucide-react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const API_BASE_URL = "http://localhost:8000/api/ai-coach";

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

const ChatPanel = ({ quickQuery }) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [conversationId, setConversationId] = useState(null);
    const [loading, setLoading] = useState(false);

    const [userProfile, setUserProfile] = useState({
        name: "",
        career_goal: "",
    });

    // --------------------------------
    // Get CSRF cookie
    // --------------------------------
    useEffect(() => {
        fetch(API_BASE_URL + "/csrf/", {
            credentials: "include",
        })
            .then((response) => {
                if (!response.ok) {
                    console.error(
                        "Failed to get CSRF token:",
                        response.status
                    );
                }
            })
            .catch((error) => {
                console.error("CSRF error:", error);
            });
    }, []);

    // --------------------------------
    // Fetch logged-in user's profile
    // --------------------------------
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(
                    API_BASE_URL + "/profile/",
                    {
                        credentials: "include",
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.error || "Failed to fetch profile"
                    );
                }

                setUserProfile(data);

            } catch (error) {
                console.error(
                    "Profile fetch error:",
                    error
                );
            }
        };

        fetchProfile();
    }, []);

    // --------------------------------
    // Send message to AI Coach
    // --------------------------------
    const sendMessage = async (query = input) => {
        const message = query.trim();

        if (!message || loading) {
            return;
        }

        // Add user message immediately
        setMessages((previous) => [
            ...previous,
            {
                text: message,
                user: true,
                time: "Now",
            },
        ]);

        setInput("");
        setLoading(true);

        try {
            const csrfToken = getCookie("csrftoken");

            console.log("CSRF TOKEN:", csrfToken);
            console.log(
                "POST URL:",
                API_BASE_URL + "/chat/"
            );

            const response = await fetch(
                API_BASE_URL + "/chat/",
                {
                    method: "POST",
                    credentials: "include",

                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": csrfToken,
                    },

                    body: JSON.stringify({
                        message: message,
                        conversation_id: conversationId,
                    }),
                }
            );

            const text = await response.text();

            console.log("STATUS:", response.status);
            console.log("RESPONSE:", text);

            let data;

            try {
                data = JSON.parse(text);
            } catch {
                throw new Error(
                    `Server returned non-JSON response (${response.status})`
                );
            }

            if (!response.ok) {
                throw new Error(
                    data?.error ||
                    data?.detail ||
                    "Unable to get a response from AI Coach."
                );
            }

            if (data.conversation_id) {
                setConversationId(
                    data.conversation_id
                );
            }

            if (data.message?.content) {
                setMessages((previous) => [
                    ...previous,
                    {
                        text: data.message.content,
                        user: false,
                        time: "Now",
                    },
                ]);
            }

        } catch (error) {
            console.error(
                "AI Coach error:",
                error
            );

            setMessages((previous) => [
                ...previous,
                {
                    text:
                        error.message ||
                        "Something went wrong. Please try again.",
                    user: false,
                    time: "Now",
                },
            ]);

        } finally {
            setLoading(false);
        }
    };

    // --------------------------------
    // Handle Quick Question
    // --------------------------------
    useEffect(() => {
        if (quickQuery?.text) {
            sendMessage(quickQuery.text);
        }
    }, [quickQuery]);

    // --------------------------------
    // Enter key
    // --------------------------------
    const handleKeyDown = (event) => {
        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <section className="ai-chat-card">

            <div className="ai-messages">

                {/* Permanent welcome message */}

                <Message time="Now">
                    <p>
                        <strong>
                            Hi {userProfile.name || "there"}! 👋
                        </strong>
                    </p>

                    <p>
                        I’m your AI Coach, here to help you
                        prepare for placements, coding
                        interviews, and anything else on
                        your path to becoming a Software Engineer.
                    </p>

                    {userProfile.career_goal && (
                        <p>
                            I’ll keep your goal of becoming a{" "}
                            <strong>
                                {userProfile.career_goal}
                            </strong>{" "}
                            in mind while guiding you.
                        </p>
                    )}
                </Message>


                {/* Real messages */}

                {messages.map((message, index) => (
                    <Message
                        key={index}
                        user={message.user}
                        time={message.time}
                    >
                        {message.user ? (
                            message.text
                        ) : (
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                            >
                                {message.text}
                            </ReactMarkdown>
                        )}
                    </Message>
                ))}


                {/* Loading */}

                {loading && (
                    <Message time="Now">
                        <p>
                            AI Coach is thinking...
                        </p>
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
                    onClick={() => sendMessage()}
                    disabled={
                        loading ||
                        !input.trim()
                    }
                >
                    <Send size={18} />
                </button>

            </div>


            {/* Disclaimer */}

            <div className="ai-disclaimer">

                <Sparkles size={12} />

                <span>
                    AI Coach can make mistakes.
                    Please verify important information.
                </span>

            </div>

        </section>
    );
};

export default ChatPanel;