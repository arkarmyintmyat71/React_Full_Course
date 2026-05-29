import { useState } from 'react'
import './ChatInput.css'
import loadingSpanner from '../assets/loading-spinner.gif';
import { Chatbot } from 'supersimpledev';
import { useCurrentTime } from '../hooks/useCurrentTime';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const currentTime = useCurrentTime();

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }

  async function sendMessage() {
    if (isLoading || inputText === '') {
      return;
    }

    setIsLoading(true);
    setInputText('');

    const newChatMessage = [
      ...chatMessages,
      {
        message: inputText,
        currentTime: currentTime,
        sender: "user",
        id: crypto.randomUUID()
      }
    ];

    setChatMessages([
      ...newChatMessage,
      {
        message: <img src={loadingSpanner} className="loading-spinner" />,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessage,
      {
        message: response,
        currentTime: currentTime,
        sender: "robot",
        id: crypto.randomUUID()
      }
    ]);

    setIsLoading(false);
  }

  function clearMessage() {
    setChatMessages([]);
  }
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
        className="chat-input"
      />
      <button className="send-button" onClick={sendMessage}>Send</button>
      <button className="clear-button" onClick={clearMessage}>Clear</button>
    </div>
  );
}