import robotProfile from '../assets/robot.png';
import userProfile from '../assets/user.png';
import './ChatMessage.css'
export function ChatMessage({ message, sender }) {

  return (
    <div className={sender === "robot" ? "chat-message-robot" : "chat-message-user"}>
      {sender === "robot" && <img src= {robotProfile} width="45" />}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === "user" && <img src={userProfile} width="45" />}
    </div>
  );
}