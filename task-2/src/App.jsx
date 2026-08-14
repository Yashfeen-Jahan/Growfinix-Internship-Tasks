import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import InputBox from './components/InputBox';
import { initialMessages, mockResponses } from './data/mockData';

function App() {
  const [messages, setMessages] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] =useState(false);
  
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };


  const handleSendMessage = (text) => {
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: getCurrentTime()
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true); // Typing indicator start

    
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
    <div className="flex h-screen bg-slate-900 overflow-hidden font-sans relative">
      
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      <div className="flex-1 flex flex-col h-full w-full min-w-0">
        <div className="md:hidden flex items-center justify-between p-4 bg-slate-800 text-white border-b border-slate-700 z-10">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 focus:outline-none"
            aria-label="Open Sidebar"
          >
            <Menu className='w-6 h-6 text-white'/>
          </button>
          <h1 className="font-semibold text-lg">AI Chat Simulator</h1>
          <div className="w-6"></div> 
        </div>

        <ChatArea messages={messages} isTyping={isTyping} />
        <InputBox onSendMessage={handleSendMessage} disabled={isTyping} />
      </div>

    </div>
  );
}

export default App;