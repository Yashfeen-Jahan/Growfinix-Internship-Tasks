import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-[#cfbb99]/80 backdrop-blur-md border border-[#4c3d19] rounded-2xl p-4 flex flex-col justify-between shadow-xl hover:scale-105 transition duration-500 hover:shadow-xl">
      
      {/* Product Image */}
      <div className="relative h-48 w-full rounded-xl overflow-hidden bg-[#ab8d64]/40 mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center"
        />
        <span className="absolute top-2 left-2 bg-[#ab8d6f] text-[#354024] text-xs px-2.5 py-1 rounded-md font-medium border border-[#ab8d6f]/30">
          {product.category}
        </span> 
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-semibold text-[#354024] text-base truncate">{product.title}</h3>
        
        {/* Rating */}
        <div className="flex items-center space-x-1 text-orange-400 text-sm">
          <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
          <span className="font-bold">{product.rating}</span>
        </div>

        {/* Price */}
        <div className="text-xl font-bold text-stone-900">
          ₹{product.price.toLocaleString('en-IN')}
        </div>
      </div>

      {/* add to cart button */}
      <button className="mt-4 w-full bg-[#354024] hover:bg-[#889063] text-white py-2.5 rounded-xl font-medium border border-[#896448]/40 transition flex items-center justify-center space-x-2 shadow-md">
        <ShoppingCart className="w-4 h-4" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
}