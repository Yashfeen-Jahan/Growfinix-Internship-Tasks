import React from "react";
import {ShoppingBag, ShoppingCart} from "lucide-react";

function Navbar(){
  return(
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#354024]/90 text-[#cfbb99] border-b border-[#354024] px-6 py-4 flex items-center justify-between shadow-xl">
      <div className="flex items-center space-x-2">
        <div className="bg-[#4c3d19] p-2 rounded-xl text-[#AB8D6F]">
          <ShoppingBag className="w-6 h-6 text-[#e5d7c4]" />
        </div>
        <span className="text-2xl font-extrabold text-[#e5d7c4] tracking-wide">
          Shop<span className="text-[#889063]">Hub</span>
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 text-sm font-medium">
        <a href="#" className="hover:text-white transition">Home</a>
        <a href="#" className="text-white border-b-2 border-[#cfbb99] pb-1">Products</a>
        <a href="#" className="hover:text-white transition">About</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </nav>

      {/* Cart Button */}
      <div className="relative cursor-pointer p-2.5 bg-[#4c3d19] hover:bg-[#cfbb99] rounded-xl transition border border-[#896448]/30">
        <ShoppingCart className="w-5 h-5 text-[#e5d7c4] hover:text-[#354024]"/> 
      </div>

    </header>
  )
}

export default Navbar