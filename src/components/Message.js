import React from "react";

const Message = ({ text, isUser }) => {
    return (
        <div
            style={{
                textAlign: isUser ? "right" : "left",
                margin: "10px 0",
            }}
        >
            <span
                style={{
                    backgroundColor: isUser ? "#DCF8C6" : "#FFF",
                    padding: "10px",
                    borderRadius: "5px",
                    display: "inline-block",
                    maxWidth: "80%",
                }}
            >
                {text}
            </span>
        </div>
    );
};

export default Message;
