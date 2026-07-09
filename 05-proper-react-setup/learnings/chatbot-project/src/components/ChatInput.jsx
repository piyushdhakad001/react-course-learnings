import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import LoadingSpinnerImage from '../assets/loading-spinner.gif';
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
      const [inputText, setInputText] = useState('');
      const [isLoading, setIsLoading] = useState(false);


      function saveInputText(event) {

        setInputText(event.target.value);
      }

      function handleKeyDown(event) {
        if (event.key === 'Enter') {
          sendMessage();
        } else if (event.key === 'Escape') {
          setInputText('');
        }
      }


      async function sendMessage() {
        if (isLoading) {
          console.log('return');
          return;
        }

        setInputText('');
        setIsLoading(true);



        const newChatMessages = [
          ...chatMessages,
          {
            message: inputText,
            sender: "user",
            id: crypto.randomUUID(),
          }
        ];

        setChatMessages([
          ...newChatMessages,
          {
            message: <img src={LoadingSpinnerImage}
              className='loading-spinner' />,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
          ...newChatMessages,
          {
            message: response,
            sender: "robot",
            id: crypto.randomUUID()
          },
        ]);

        setIsLoading(false);
      }

      function clearMessages(){
      setChatMessages([])
      }
      return (
        <>
          {chatMessages.length === 0 ?
            <p className='welcome-text'>'Welcome to the chatbot project! Send a message using the textbox below'</p> :
            ''}
          <div className="chat-input-container">

            <input placeholder="Send a message to Chatbot" size="30"
              onChange={saveInputText}
              value={inputText}
              onKeyDown={handleKeyDown}
              className="chat-input"
            />
            <button
              onClick={sendMessage}
              className="send-button"
            >Send</button>
            <button 
            onClick={clearMessages}
            className="clear-message"
            >Clear</button>
          </div>
        </>
      );
    }