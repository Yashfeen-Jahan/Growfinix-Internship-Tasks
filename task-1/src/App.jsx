import React from 'react';
import Navbaar from './components/Navbaar';
import EnquiryForm from './components/EnquiryForm';
import DashboardCards from './components/DashboardCards';
import SearchBaar from './components/SearchBaar';
import EnquiryTable from './components/EnquiryTable';
import Footer from './components/Footer';
import { EnquiryProvider } from './context/EnquiryContext';

export default function App() {
  return (
    <EnquiryProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-between font-sans">
        <div>
          <Navbaar />
          {/* Main Container */}
          <div className="max-w-7xl mx-auto p-6 grid grid-cols-12 gap-6">
            {/* Left 4-Columns: Form */}
            <div className="col-span-4">
              <EnquiryForm />
            </div>

            {/* Right 8-Columns: Stats + Filters + Table */}
            <div className="col-span-8">
              <DashboardCards />
              <SearchBaar />
              <EnquiryTable />
              <Footer />
            </div>
          </div>
        </div>

       
      </div>
    </EnquiryProvider>
  );
}