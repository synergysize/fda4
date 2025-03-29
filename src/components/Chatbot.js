import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaPaperPlane, FaTimes, FaSpinner } from 'react-icons/fa';
import { chatWithAI } from '../services/api';

const ChatbotContainer = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: ${({ isOpen }) => (isOpen ? '350px' : 'auto')};
  background: ${({ isOpen }) => (isOpen ? 'rgba(20, 20, 40, 0.95)' : 'transparent')};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${({ isOpen }) => (isOpen ? '0 5px 30px rgba(0, 0, 0, 0.3)' : 'none')};
  backdrop-filter: blur(10px);
  border: ${({ isOpen }) => (isOpen ? '1px solid rgba(255, 215, 0, 0.2)' : 'none')};
  
  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? 'calc(100vw - 40px)' : 'auto')};
  }
`;

const ChatToggleButton = styled(motion.button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #ffd700, #ff8c00);
  color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.25);
  align-self: ${({ isOpen }) => (isOpen ? 'none' : 'flex-end')};
  margin: ${({ isOpen }) => (isOpen ? '0' : '0')};
`;

const ChatHeader = styled.div`
  padding: 15px 20px;
  background: rgba(30, 30, 50, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ChatTitle = styled.h3`
  margin: 0;
  color: #ffd700;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    font-size: 1.2rem;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  
  &:hover {
    color: #ffd700;
  }
`;

const ChatMessages = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 215, 0, 0.5);
    border-radius: 5px;
  }
`;

const Message = styled(motion.div)`
  padding: 10px 15px;
  border-radius: 15px;
  max-width: 80%;
  word-break: break-word;
  
  ${({ isUser }) => isUser ? `
    background: rgba(255, 215, 0, 0.2);
    color: #ffffff;
    align-self: flex-end;
    border-bottom-right-radius: 0;
  ` : `
    background: rgba(255, 255, 255, 0.1);
    color: #e0e0e0;
    align-self: flex-start;
    border-bottom-left-radius: 0;
  `}
`;

const ChatInputContainer = styled.form`
  display: flex;
  padding: 10px;
  gap: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 12px 15px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  outline: none;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    border-color: rgba(255, 215, 0, 0.5);
  }
`;

const SendButton = styled(motion.button)`
  background: linear-gradient(135deg, #ffd700, #ff8c00);
  color: #121212;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
`;

const SpinnerIcon = styled(FaSpinner)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const messageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.3 } }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I\'m the First Doge Agent ($FDA) AI. How can I help you with DOGE API data today?', isUser: false }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  const toggleChat = () => setIsOpen(!isOpen);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    const newUserMessage = { id: Date.now(), text: message, isUser: true };
    setMessages(prev => [...prev, newUserMessage]);
    setMessage('');
    setIsLoading(true);
    
    try {
      const response = await chatWithAI(message);
      
      // Simulate a slight delay for more natural conversation
      setTimeout(() => {
        const newAiMessage = { id: Date.now() + 1, text: response.message, isUser: false };
        setMessages(prev => [...prev, newAiMessage]);
        setIsLoading(false);
      }, 800);
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      setTimeout(() => {
        const errorMessage = { 
          id: Date.now() + 1, 
          text: 'Sorry, I encountered an error. Please try again later.',
          isUser: false 
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsLoading(false);
      }, 800);
    }
  };
  
  return (
    <ChatbotContainer
      isOpen={isOpen}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {isOpen ? (
        <>
          <ChatHeader>
            <ChatTitle>
              <FaRobot /> $FDA Assistant
            </ChatTitle>
            <CloseButton onClick={toggleChat}>
              <FaTimes />
            </CloseButton>
          </ChatHeader>
          
          <ChatMessages>
            <AnimatePresence>
              {messages.map(msg => (
                <Message
                  key={msg.id}
                  isUser={msg.isUser}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {msg.text}
                </Message>
              ))}
              {isLoading && (
                <Message
                  key="loading"
                  isUser={false}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <SpinnerIcon />
                </Message>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </ChatMessages>
          
          <ChatInputContainer onSubmit={handleSubmit}>
            <ChatInput
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about DOGE API data..."
              disabled={isLoading}
            />
            <SendButton
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={isLoading}
            >
              <FaPaperPlane />
            </SendButton>
          </ChatInputContainer>
        </>
      ) : (
        <ChatToggleButton
          isOpen={isOpen}
          onClick={toggleChat}
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaRobot />
        </ChatToggleButton>
      )}
    </ChatbotContainer>
  );
};

export default Chatbot;