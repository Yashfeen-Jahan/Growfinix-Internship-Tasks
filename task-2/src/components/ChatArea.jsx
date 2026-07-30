import React, { useEffect, useRef } from 'react';
import { Moon, Bot, CheckCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatArea({ messages, isTyping }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex-1 flex flex-col h-full bg-[#f8fafc] text-slate-800 overflow-hidden">
      
      {/* 1. Header Bar */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-slate-200 bg-white shrink-0">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Smart Chat Interface Simulator</h2>
          <p className="text-xs text-slate-500">Built with React, Tailwind CSS & Framer Motion</p>
        </div>
        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition">
          <Moon className="w-5 h-5" />
        </button>
      </div>

      {/* 2. Messages Container */}
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        
        {/* Date Tag */}
        <div className="flex justify-center">
          <span className="bg-slate-200/60 text-slate-600 text-xs px-3 py-1 rounded-full font-medium">
            Today
          </span>
        </div>

        {/* Animated Message Loop */}
        <AnimatePresence>
          {messages.map((msg) => {
            const isBot = msg.sender === 'bot';

            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`flex items-start gap-3 ${
                  isBot ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Bot Avatar Icon */}
                {isBot && (
                  <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 shadow-md">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                )}

                {/* Message Bubble */}
                <div
                  className={`max-w-xl p-4 rounded-2xl text-sm leading-relaxed ${
                    isBot
                      ? 'bg-slate-100 text-slate-800 rounded-tl-none shadow-sm'
                      : 'bg-indigo-600 text-white rounded-tr-none shadow-md'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  
                  <div
                    className={`flex items-center gap-1 text-[10px] mt-1.5 ${
                      isBot ? 'text-slate-400' : 'text-indigo-200 justify-end'
                    }`}
                  >
                    <span>{msg.time}</span>
                    {!isBot && <CheckCheck className="w-3.5 h-3.5" />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Typing Indicator with Animation */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-3 justify-start"
            >
              <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 shadow-md">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none flex flex-col gap-1 items-start">
                <div className="flex gap-1.5 items-center py-1">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">AI is typing...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Anchor element for Auto-Scroll */}
        <div ref={messagesEndRef} />

      </div>

    </div>
  );
}