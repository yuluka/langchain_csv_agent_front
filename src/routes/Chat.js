import React, { useState } from "react";
import ChatBox from "../components/ChatBox";
import Message from "../components/Message";

const Chat = () => {
    const [messages, setMessages] = useState([]);

    const sendMessage = (message) => {
        const newMessage = { text: message, isUser: true };
        setMessages([...messages, newMessage]);

        fetch(`https://langchain-csv-agent-api.vercel.app/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer ygm-ACsiCoZwPVENdb8BRRk7rae3E5XPHCEZeGhWFwxVh1LaVJU8UGORK7QVNX3IbmTAjqxPK1jtxglzTlPdEoO4eFY8P7RVljMtOTuNZ8wfcI8rSjPP7f4MvV4HNUTZ",
            },
            body: JSON.stringify({ "query": message }),
        })
            .then((response) => response.json())
            .then((data) => {
                const botMessage = { text: data.bot_response, isUser: false };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            })
            .catch((error) => console.error("Error:", error));
    };

    return (
        <div
            style={{
                backgroundColor: "#2c313c",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "100px",
                    marginRight: "100px",
                    marginBottom: 10,
                    backgroundColor: "#f0f0f0",
                    flexGrow: 1,
                    borderRadius: "10px",
                    padding: "20px",
                    maxHeight: "100vh", 
                    overflowY: "auto", // Desplazamiento solo en el área de mensajes
                }}
            >
                {messages.map((msg, index) => (
                    <Message key={index} text={msg.text} isUser={msg.isUser} />
                ))}
            </div>
            <div
                style={{
                    marginLeft: "100px",
                    marginRight: "100px",
                }}
            >
                <ChatBox onSendMessage={sendMessage} />
            </div>
        </div>
    );
};

export default Chat;
