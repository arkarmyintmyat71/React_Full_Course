import { useAutoScroll } from '../hooks/useAutoScroll'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css'

export function ChatMessages({ chatMessages }) {
  const chatMessageRef = useAutoScroll([chatMessages]);

  return (
    <div className="chat-messages-container"
      ref={chatMessageRef}>
      {
        chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              currentTime={chatMessage.currentTime}
              key={chatMessage.id}
            />
          );
        })
      }

    </div>
  );
};