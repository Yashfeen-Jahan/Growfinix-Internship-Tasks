import React from 'react';

export default function Navbaar() {
  return (
    <nav className="bg-[#0b1e3f] text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Title with icon */}
      <div className="flex items-center space-x-3">
        <span className="text-xl font-bold">🏢 Tour Enquiry Dashboard</span>
      </div>

      {/* Nav Links */}
      <div className="flex space-x-6 text-sm font-medium">
        <a href="#" className="hover:text-blue-400">🏠 Dashboard</a>
        <a href="#" className="hover:text-blue-400">📋 Enquiries</a>
        <a href="#" className="hover:text-blue-400">ℹ️ About</a>
        <a href="#" className="hover:text-blue-400">✉️ Contact</a>
      </div>
    </nav>
  );
}