import { useState } from "react";
import {Filter, Tag, DollarSign, Star} from "lucide-react";

function Sidebar({
  category,
  setCategory,
  price,
  setPrice,
  rating,
  setRating,
  onClear,
}){
  
  return (
    <aside className="w-full shrink-0 sm:p-4 md:w-64 bg-[#4c3d19]/85 backdrop-blur-md m-5 p-5 rounded-2xl border border-[#354024] text-white shadow-2xl space-y-6 mx-auto">

      {/* Heading */}
        <div className="flex items-center justify-center space-x-2">
          <Filter className="w-5 h-5 text-white" />
          <h2 className="text-lg font-bold text-white">Filters</h2>
        </div>
      {/* Category */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Tag className="w-4 h-4 text-white" />
          <h3 className="text-sm font-semibold text-white">Category</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          {["All", "Electronics", "Shoes", "Clothing", "Books", "Accessories"].map(
            (item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <input
                  type="radio"
                  name="category"
                  value={item}
                  checked={category === item}
                  onChange={(e) => setCategory(e.target.value)}
                  className="accent-[#354024]"
                />

                <span className="text-[#cfbb99]">
                  {item}
                </span>
              </label>
            )
          )}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <DollarSign className="w-4 h-4 text-white" />
          <h3 className="text-sm font-semibold text-white">Price Range</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">
          {[
            "All",
            "Under ₹1000",
            "₹1000 - ₹5000",
            "Above ₹5000",
          ].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <input
                type="radio"
                name="price"
                value={item}
                checked={price === item}
                onChange={(e) => setPrice(e.target.value)}
                className="accent-[#354024]"
              />

              <span className="text-[#cfbb99]">
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <div className="flex items-center space-x-2 mb-3">
          <Star className="w-4 h-4 text-white" />
          <h3 className="text-sm font-semibold text-white">Rating</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          {["All", "4+", "3+", "2+"].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <input
                type="radio"
                name="rating"
                value={item}
                checked={rating === item}
                onChange={(e) => setRating(e.target.value)}
                className="accent-[#354024]"
              />

              <span className="text-[#cfbb99]">
                {item === "All" ? "All Ratings" : `${item} ⭐`}
              </span>
            </label>
          ))}
        </div>
      </div>
      <button
        onClick={onClear}
        className="w-full bg-[#cfbb99] hover:bg-[#e5d7c4] text-[#354024] font-semibold py-2.5 rounded-xl border border-[#cfbb99]/30 transition shadow-md"
      >
        Clear Filters
      </button>
    </aside>
  );
};

export default Sidebar;