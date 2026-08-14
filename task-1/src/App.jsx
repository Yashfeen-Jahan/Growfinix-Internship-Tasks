import React from 'react';
import Dashboard from './pages/Dashboard';
import { EnquiryProvider } from './context/EnquiryContext';

function App() {
  return (
    <EnquiryProvider>
      <div className="w-full min-h-screen bg-slate-50overflow-x-hidden">
        <Dashboard />
          
      </div> 
    </EnquiryProvider>
  );
}

export default App;