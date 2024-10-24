import React, { useState } from "react";

const ChatBox = ({ onSendMessage }) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage("");
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                backgroundColor: "#2c313c",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    width: "100%",
                }}
            >
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu mensaje..."
                    style={{
                        flex: 1,
                        padding: "10px",
                        borderRadius: "20px",
                        border: "none",
                        outline: "none",
                        backgroundColor: "#23272a", 
                        color: "#fff",
                        fontSize: "16px",
                        marginRight: "10px",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        backgroundColor: "transparent",
                        border: "none", 
                        cursor: "pointer", 
                        padding: "0 10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            width: "24px",
                            height: "24px",
                            color: "#7289da", // Color del icono (similar a Discord)
                        }}
                    >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default ChatBox;
