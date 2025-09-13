// src/components/Chatbot.tsx
import React, { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;

    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Sorry, this is a demo bot. For assistance, contact support." },
      ]);
    }, 1000);
  }

  return (
    <div
      className="fixed bottom-5 right-5 w-72 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col"
      style={{ fontFamily: "Arial, sans-serif", color: "#000" }}
    >
      <div
        className="bg-black text-white p-3 rounded-t-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Chat {isOpen ? "▲" : "▼"}
      </div>
      {isOpen && (
        <>
          <div
            className="flex-grow p-3 overflow-auto max-h-64 space-y-2"
            style={{ minHeight: "200px" }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded ${
                  msg.from === "bot" ? "bg-gray-200 text-black" : "bg-black text-white text-right"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-gray-300 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow border border-gray-300 rounded-l px-2 py-1 focus:outline-none"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-black text-white px-4 rounded-r hover:bg-gray-900"
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}
