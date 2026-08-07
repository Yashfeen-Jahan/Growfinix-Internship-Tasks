import React from 'react';
import { Sparkles, Info } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#801818] text-[#f0bebd] py-4 px-6 md:px-12 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2 font-bold text-xl tracking-tight">
        <Sparkles className="w-5 h-5 text-[#ebd6dc]" />
        <span>AI Summarizer</span>
      </div>
      <button className="flex items-center space-x-1.5 border border-stone-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-[#e3c4a8] hover:text-black transition">
        <Info className="w-4 h-4" />
        <span>About</span>
      </button>
    </header>
  );
}