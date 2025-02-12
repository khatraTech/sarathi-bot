import React, { useState, useEffect, useRef } from 'react';
import { ChatBotProps, Message } from '../types';
import { generateStyles } from './styles';

const ChatBot: React.FC<ChatBotProps> = (props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const styles = generateStyles(props);

  useEffect(() => {
    if (props.initialMessage) {
      setMessages([
        {
          sender: 'bot',
          text: props.initialMessage,
          timestamp: Date.now(),
        },
      ]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      sender: 'user',
      text: inputValue,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue('');

    try {
      const response = await fetch(
        `${props.apiConfig.protocol}://${props.apiConfig.host}:${props.apiConfig.port}/chat`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: inputValue }),
        }
      );

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: data.response,
          timestamp: Date.now(),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'Sorry, I encountered an error. Please try again.',
          timestamp: Date.now(),
        },
      ]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div style={{ ...styles.chatBox, height: isMinimized ? '50px' : 'auto' }}>
      <div style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {props.logo && <img src={props.logo} alt="Logo" style={styles.logo} />}
          <span>{props.companyName}</span>
        </div>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
        >
          {isMinimized ? '+' : '-'}
        </button>
      </div>
      {!isMinimized && (
        <>
          <div style={styles.messagesContainer}>
            {messages.map((message, index) => (
              <div
                key={message.timestamp + index}
                style={{
                  ...styles.message,
                  ...(message.sender === 'user' ? styles.userMessage : styles.botMessage),
                }}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={props.placeholder || 'Type your message...'}
              style={styles.input}
            />
            <button onClick={sendMessage} style={styles.sendButton}>
              Send
            </button>
          </div>
          <div style={styles.footer}>
            <a
              href="https://www.khatratech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="powered-by-link"
              style={styles.poweredByLink}
            >
              Powered by Khatra Tech
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;