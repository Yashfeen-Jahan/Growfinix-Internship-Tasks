import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 mt-12 border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        {/* Left Side: Copyright */}
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Tour/Property Enquiry Dashboard</span>. All rights reserved.
        </p>

        {/* Right Side: Quick Links */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
          <a href="#" className="hover:text-blue-400 transition">Support</a>
        </div>
      </div>
    </footer>
  );
}