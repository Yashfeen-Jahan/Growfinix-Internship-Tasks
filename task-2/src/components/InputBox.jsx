import React, { useState } from 'react';
import { Paperclip, Send } from 'lucide-react';

export default function InputBox({ onSendMessage, disabled }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && !disabled) {
      onSendMessage(text);
      setText(''); 
    }
  };

  return (
    <div className="px-3 sm:p-8 pb-3 sm:pb-4 bg-[#f8fafc]">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 sm:gap-3 bg-white border border-slate-200 rounded-2xl px-3 sm:px-4 py-2.5 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition"
      >
        {/* Paperclip Icon */}
        <button
          type="button"
          className="text-slate-400 hover:text-slate-600 transition"
        >
          <Paperclip className="w-5 h-5 sm:w-5 sm:h-5" />
        </button>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message..."
          disabled={disabled}
          className="flex-1 bg-transparent text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none disabled:opacity-50 min-w-0"
        />

        {/* Send Button */}
        <button
          type="submit"
          disabled={!text.trim() || disabled}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center transition disabled:opacity-40 disabled:hover:bg-indigo-600 shadow-md shrink-0"
        >
          <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </form>

     
      <p className="text-[9px] sm:text-[11px] text-center text-slate-900 mt-2 px-2 truncate sm:whitespace-normal">
        Smart Chat Interface Simulator | Built with ❤️ using React, Tailwind CSS & Framer Motion
      </p>
    </div>
  );
}