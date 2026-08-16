import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import products from "./data/products";
import useDebounce from "./hooks/useDebounce";


function App(){
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [rating, setRating] = useState("All");
  const debouncedSearch = useDebounce(searchTerm, 300);


  // Filtering Logic
  const filteredProducts = products.filter((product) => {

    // Search condition
    const searchValue = debouncedSearch.toLowerCase().trim();

    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchValue) || 
      product.category.toLowerCase().includes(searchValue);

    // Category condition
    const matchesCategory =
      category === "All" || product.category === category;

    // Price condition
    let matchesPrice = true;

    if (price === "Under ₹1000") {
      matchesPrice = product.price < 1000;
    } else if (price === "₹1000 - ₹5000") {
      matchesPrice = product.price >= 1000 && product.price <= 5000;
    } else if (price === "Above ₹5000") {
      matchesPrice = product.price > 5000;
    }

    // Rating condition
    let matchesRating = true;

    if (rating === "4+") {
      matchesRating = product.rating >= 4;
    } else if (rating === "3+") {
      matchesRating = product.rating >= 3;
    } else if (rating === "2+") {
      matchesRating = product.rating >= 2;
    }

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice &&
      matchesRating
    );
  });

    const clearFilters = () => {
      setSearchTerm("");
      setCategory("All");
      setPrice("All");
      setRating("All");
    };

  return(
    <div className="min-h-screen bg-cover bg-center bg-fixed text-white font-sans relative"style={{
      backgroundImage: `url('https://i.pinimg.com/736x/7a/3b/ea/7a3bea611feca693e7534358bdd9f8a1.jpg')`
    }}>
      <Navbar />
      <Searchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <main className="max-w-7xl mx-auto px-6 pb-10">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            rating={rating}
            setRating={setRating}
            onClear={clearFilters}
          />

          <ProductList products={filteredProducts}/>
        </div>
      </main>
      
      
    </div>
  )
}

export default App