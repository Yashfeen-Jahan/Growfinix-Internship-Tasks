import React from 'react';
import Navbaar from '../components/Navbaar';
import EnquiryForm from '../components/EnquiryForm';
import DashboardCards from '../components/DashboardCards';
import SearchBaar from '../components/SearchBaar';
import EnquiryTable from '../components/EnquiryTable';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen overflow-hidden">
        <Navbaar />

        <div className="flex-1 p-3 sm:p-5 flex flex-col lg:flex-row gap-5 max-w-[1400px] mx-auto w-full">
        
            <div className="w-full lg:w-[380px] shrink-0">
                <EnquiryForm />
            </div>
            <div className="w-full flex-1 space-y-4 min-w-0">
                <DashboardCards />
                <SearchBaar />
                <EnquiryTable />
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Dashboard;