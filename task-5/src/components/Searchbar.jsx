import {useState} from "react";
import {Search} from "lucide-react";

function Searchbar({searchTerm, setSearchTerm}){
    
    const handleSearch = (e) =>{
        setSearchTerm(e.target.value);
    }

    return(
        <div className="w-full max-w-3xl mx-auto my-6 bg-[#4c3d19]/85 backdrop-blur-md border border-[#4c3d19] rounded-2xl">
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Search className="w-4 h-4 text-white"/>
                </span>

                <input
                    type="text"
                    placeholder="Search products...."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full rounded-2xl py-3 pl-12 pr-4 outline-none transition  focus:ring-2 focus:ring-[#354024]"
                />
            </div>
        </div>
    )
}

export default Searchbar