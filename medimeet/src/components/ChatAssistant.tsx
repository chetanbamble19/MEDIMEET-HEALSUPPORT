"use client";
import { useState } from "react";
import { Bot, X } from "lucide-react";
import { Button } from "./ui/button";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm your MediBot 🤖. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];

    // Dummy response logic – can be replaced with API later
    let botReply = "Sorry, I didn't understand. Try asking about your diet or appointment.";
    if (input.toLowerCase().includes("diet")) botReply = "Your current plan includes high protein and low carb meals.";
    if (input.toLowerCase().includes("doctor")) botReply = "Dr. Smith (Cardiologist) is available tomorrow at 10 AM.";
    if (input.toLowerCase().includes("medicine")) botReply = "You have 2 pending medicines: Metformin, Atorvastatin.";
    

    setMessages([...newMessages, { from: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
          <div className="bg-emerald-600 text-white px-4 py-3 flex justify-between items-center">
            <span>MediBot Assistant</span>
            <button onClick={() => setIsOpen(false)}><X className="h-4 w-4" /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 h-72 bg-muted">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 ${msg.from === "user" ? "text-right" : "text-left"}`}>
                <div className={`inline-block px-3 py-2 rounded-lg text-sm ${msg.from === "user" ? "bg-emerald-600 text-green ml-auto" : "bg-gray-200 text-black"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t bg-black flex items-center gap-2">
            <input
              className="flex-1 px-3 py-2 text-sm border rounded-md outline-none"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button size="sm" onClick={handleSend}>Send</Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-emerald-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
        >
          <Bot className="w-100 h-100" /> Chat Assistant
        </Button>
      )}
    </div>
  );
};

export default ChatAssistant;

