import React from 'react';
import { Plus, MessageSquare, Settings, Bot } from 'lucide-react';
import { chatHistory } from '../data/mockData';
// 1. Framer Motion ko import karein
import { motion } from 'framer-motion';

export default function Sidebar() {
  return (
   
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-64 bg-[#0f172a] text-white flex flex-col justify-between p-4 border-r border-slate-800 h-screen"
    >
   
      <div>
   
        <div className="flex items-center gap-2 mb-6 px-2">
          <div className="p-2 bg-indigo-600 rounded-lg">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-lg font-bold text-slate-100">AI Chat Simulator</h1>
        </div>

   
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-200 shadow-md">
          <Plus className="w-5 h-5" />
          <span>New Chat</span>
        </button>

        <p className="text-xs font-semibold text-slate-400 mt-6 mb-3 px-2">Chats</p>

        
        <div className="space-y-1">
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center justify-between p-2.5 rounded-xl text-sm cursor-pointer transition ${
                chat.active
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5 truncate">
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span className="truncate">{chat.title}</span>
              </div>
              <span className="text-[10px] text-slate-400 shrink-0">{chat.time}</span>
            </div>
          ))}
        </div>
      </div>

    
      <div className="pt-4 border-t border-slate-800 flex items-center justify-between px-1">
        <div className="flex items-center gap-3">
      
          <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-200">
            U
          </div>
     
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-200">User</span>
            <span className="text-xs text-slate-400">user@example.com</span>
          </div>
        </div>
    
        <button className="text-slate-400 hover:text-white p-1">
          <Settings className="w-5 h-5" />
        </button>
      </div>

    </motion.div>
  );
}