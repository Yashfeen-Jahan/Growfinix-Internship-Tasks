import React from 'react';
import { useEnquiry } from '../context/EnquiryContext';

export default function SearchBaar(){
    const {searchTerm, setSearchTerm, statusFilter,setStatusFilter} = useEnquiry();

    return(
        <div className="space-y-4">
           {/* Search & Filter Bar */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-3">
               <input
                  type="text"
                  placeholder="Search by name or tour..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="p-2 border rounded-md text-sm bg-white outline-none">
         
                  <option value="All Status">All Status</option>
                  <option value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Closed">Closed</option>
                </select>
            </div>
        </div>  
    )
}   

