import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-4 px-6 md:px-12 text-xs text-white flex flex-col md:flex-row justify-between items-center gap-2 bg-[#801818]">
      <div className="flex items-center space-x-1">
        <Sparkles className="w-3.5 h-3.5 text-white" />
        <span>Summarize smarter, not harder.</span>
      </div>
      <div>
        Built with <span className="text-white">🤍</span> using React, Tailwind CSS & Google Gemini API
      </div>
    </footer>
  );
}