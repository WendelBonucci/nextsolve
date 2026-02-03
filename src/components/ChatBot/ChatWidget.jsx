"use client";
import { useState, useRef, useEffect } from 'react';
import { getOpenRouterResponse } from '@/utils/chatbotService.js'; 
import ClickableMessage from './ClickableMessage';
import styles from './ChatWidget.module.css';

export default function ChatWidget({ isOpen, onClose }) {
   console.log("ChatWidget recebeu isOpen com o valor:", isOpen);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Olá! Como posso te ajudar?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!userInput.trim() || isLoading) return;
    const userMessage = { sender: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);
    try {
      const botResponse = await getOpenRouterResponse(userInput);
      const botMessage = { sender: 'bot', text: botResponse };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = { sender: 'bot', text: 'Desculpe, ocorreu um erro. Tente novamente.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div
      className={`${styles.widgetContainer} ${
        isOpen ? styles.widgetOpen : styles.widgetClosed
      }`}
    >
      <div className={styles.header}>
        <span>Atendimento Virtual</span>
        <button onClick={onClose} className={styles.closeButton}>&times;</button>
      </div>

      <div ref={chatBoxRef} className={styles.messagesBox}>
        {messages.map((msg, index) => (
          <div key={index} className={`${styles.messageRow} ${msg.sender === 'user' ? styles.messageRowUser : ''}`}>
            <span className={`${styles.bubble} ${msg.sender === 'user' ? styles.bubbleUser : styles.bubbleBot}`}>
              <ClickableMessage text={msg.text} />
            </span>
          </div>
        ))}
        {isLoading && (
          <div className={styles.messageRow}>
            <span className={`${styles.bubble} ${styles.bubbleBot}`}>Digitando...</span>
          </div>
        )}
      </div>

      <div className={styles.inputArea}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Digite sua mensagem..."
          className={styles.textInput}
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>
          Enviar
        </button>
      </div>
    </div>
  );
}