import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import InputBox from './components/InputBox';
import { initialMessages, mockResponses } from './data/mockData';

function App() {
  const [messages, setMessages] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);

  
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };


  const handleSendMessage = (text) => {
    // 1. User ka message add karein
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: getCurrentTime()
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true); // Typing indicator START

    
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      
     
      let botReplyText = mockResponses["default"];
      for (const key in mockResponses) {
        if (lowerText.includes(key)) {
          botReplyText = mockResponses[key];
          break;
        }
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReplyText,
        time: getCurrentTime()
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false); // Typing indicator STOP
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-slate-900 overflow-hidden font-sans">
      {/* 1. Left Sidebar */}
      <Sidebar />

   
      <div className="flex-1 flex flex-col h-full">
        <ChatArea messages={messages} isTyping={isTyping} />
        <InputBox onSendMessage={handleSendMessage} disabled={isTyping} />
      </div>
    </div>
  );
}

export default App;