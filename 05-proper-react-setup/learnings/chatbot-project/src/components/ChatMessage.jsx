
import { Chatbot } from 'supersimpledev';
import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css'
import dayjs from 'dayjs';

export function ChatMessage({ message, sender }) {
  const time = dayjs().valueOf();
      return (
        
        <div className={sender === 'user'
          ? 'chat-message-user'
          : 'chat-message-robot'}>
          {sender === "robot" && (
            <img src={RobotProfileImage}
              className="chat-message-profile"
            />
          )}
          <div className="chat-message-text">
            {message}
          <p className='time'>
            {dayjs(time).format('h:mma')}
            </p>
          </div>
          {sender === "user" && (
            <img src={UserProfileImage}
              className="chat-message-profile"
            />
          )}
        </div>
      );
    }
