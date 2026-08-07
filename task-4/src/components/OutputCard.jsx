import React, { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';

export default function OutputCard({ summary }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!summary) return;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!summary) return null;

  return (
    <div className="bg-[#FEF3C7] border border-red-900 rounded-2xl p-6 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center mb-4 border-b border-red-900 pb-3">
        <div className="flex items-center space-x-2 text-stone-900 font-bold">
          <Sparkles className="w-5 h-5 text-amber-700" />
          <span>AI Summary</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1.5 border border-stone-400 bg-white px-3 py-1.5 rounded-lg text-xs font-medium text-stone-700 hover:bg-stone-50 transition"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
        </button>
      </div>
      
      <p className="text-stone-800 text-sm md:text-base leading-relaxed font-medium whitespace-pre-wrap">
        {summary}
      </p>
    </div>
  );
}