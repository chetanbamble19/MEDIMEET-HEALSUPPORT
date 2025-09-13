'use client';
import { useState } from 'react';

export default function ChatAssistant() {
  const [message, setMessage] = useState('');
  const [log, setLog] = useState<string[]>([]);

  const handleSend = () => {
    if (!message) return;
    setLog((prev) => [...prev, `You: ${message}`, "Bot: I'm here to help!"]);
    setMessage('');
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 border dark:border-gray-700">
      <div className="text-sm mb-2 font-medium text-gray-800 dark:text-white">💬 Assistant</div>
      <div className="h-32 overflow-y-auto mb-2 text-xs text-gray-700 dark:text-gray-200 space-y-1">
        {log.map((msg, idx) => <p key={idx}>{msg}</p>)}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 rounded border text-sm dark:bg-gray-800 dark:text-white"
          placeholder="Ask me anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
