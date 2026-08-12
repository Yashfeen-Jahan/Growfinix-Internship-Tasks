import React, { useState } from 'react';
import Header from './components/Header';
import InputCard from './components/InputCard';
import OutputCard from './components/OutputCard';
import Footer from './components/Footer';
import { fetchSummary } from './services/aiService';
import { FileText } from 'lucide-react';

export default function App() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setError('');
    setSummary('');

    try {
      const result = await fetchSummary(text);
      setSummary(result);
    } catch (err) {
      setError(err.message || 'Something went wrong while generating summary!');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setText('');
    setSummary('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed text-white font-sans backgrop-blur-md relative"style={{
      backgroundImage: `url('https://i.pinimg.com/736x/cb/66/6e/cb666e40acec29346fe0a5c4005a0136.jpg')`
    }}>
      <Header />

      <main className="max-w-4xl w-full mx-auto px-4 py-10 flex-grow">
        {/* Title / Hero Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-2xl mb-4 text-amber-700 shadow-sm border border-amber-200">
            <FileText className="w-8 h-8 text-[#801818]"/>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            AI-Powered Text Summarizer
          </h1>
          <p className="text-red-800 mt-2 text-sm md:text-base">
            Paste your long text below and get an AI-generated summary in seconds.
          </p>
        </div>

        {/* Input Form Card */}
        <InputCard
          text={text}
          setText={setText}
          onClear={handleClear}
          onSummarize={handleSummarize}
          loading={loading}
        />

        {/* Error Alert Box */}
        {error && (
          <div className="p-4 mb-6 text-sm text-red-700 bg-red-100 rounded-xl border border-red-200">
            {error}
          </div>
        )}

        {/* AI Output Summary Card */}
        <OutputCard summary={summary} />
      </main>

      <Footer />
    </div>
  );
}