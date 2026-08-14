import React from 'react';

export default function Navbaar() {
  return (
    <nav className="bg-[#0b1e3f] text-white px-4 md:px-6 py-4 flex justify-between items-center shadow-md">
      {/* Title with icon */}
      <div className="flex items-center space-x-2">
        <span className="text-base sm:etxt:lg md:text-xl font-bold whitespace-nowrap">🏢 Tour Enquiry Dashboard</span>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-3 md:gap-6 text-sm md:text-base">
        <a href="#" className="hover:text-blue-400 transition flex items-center gap-1">🏠<span className='hidden sm:inline'>Dashboard</span></a>
        <a href="#" className="hover:text-blue-400 transition flex items-center gap-1">📋 <span className='hidden sm:inline'>Enquiries</span></a>
        <a href="#" className="hover:text-blue-400 transition flex items-center gap-1">ℹ️ <span className='hidden sm:inline'>About</span></a>
        <a href="#" className="hover:text-blue-400 transition flex items-center gap-1">✉️ <span className='hidden sm:inline'>Contact</span></a>
      </div>
    </nav>
  );
}