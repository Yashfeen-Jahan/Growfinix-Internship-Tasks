import React from 'react';
import { Sparkles, Trash2 } from 'lucide-react';

export default function InputCard({ text, setText, onClear, onSummarize, loading }) {
  
  // Real-time Words Count Logic
  const wordCount = text.trim() 
    ? text.trim().split(/\s+/).filter(Boolean).length 
    : 0;

  // Real-time Sentences Count Logic
  const sentenceCount = text.trim() 
    ? text.split(/[.!?]+/).filter(s => s.trim().length > 0).length 
    : 0;

  return (
    <div className="bg-[#fef3c7] rounded-2xl p-6 shadow-sm mb-6">
      <label className="block text-red-900 font-bold mb-3 text-base">
        Your Text
      </label>
      
      <div className="relative">
        <textarea
          rows="7"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your long text below and get an AI-generated summary in seconds..."
          className="w-full p-4 border border-[#801818] rounded-xl focus:ring-2 focus:ring-red-900 focus:border-red-900 outline-none resize-y text-stone-800 text-sm leading-relaxed transition"
        ></textarea>
        
        {/* Real-Time Stats Bar */}
        <div className="flex gap-3 justify-end mt-2 text-xs font-medium text-red-900">
          <span>Characters: {text.length}</span>
          <span>•</span>
          <span>Words: {wordCount}</span>
          <span>•</span>
          <span>Sentences: {sentenceCount}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        {/* Clear Button */}
        <button
          onClick={onClear}
          type="button"
          className="flex items-center space-x-1.5 px-4 py-2 bg-[#047857] hover:bg-[#065F46] text-white rounded-lg text-sm font-medium transition"
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear</span>
        </button>

        {/* Summarize Button */}
        <button
          onClick={onSummarize}
          disabled={loading || !text.trim()}
          type="button"
          className={`flex items-center space-x-2 px-6 py-2.5 bg-red-800 hover:bg-red-600 text-white rounded-lg text-sm font-semibold shadow-md transition ${
            (loading || !text.trim()) && 'opacity-60 cursor-not-allowed'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>{loading ? 'Summarizing...' : 'Summarize Text'}</span>
        </button>
      </div>
    </div>
  );
}