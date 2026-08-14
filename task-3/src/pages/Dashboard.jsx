import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import LogoutModal from "../components/LogoutModal";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react"; // Mobile menu icon

function Dashboard() {
  const [showLogout, setShowLogout] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#d6e8ee] flex relative">
     
      <Sidebar 
        setShowLogout={setShowLogout} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />

      <div className="flex-1 md:ml-64 flex flex-col min-h-screen w-full transition-all">
        

        <div className="bg-white flex items-center justify-between px-4 sm:px-8 shadow-sm">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg focus:outline-none"
            aria-label="Open Sidebar"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex-1">
            <Navbar />
          </div>
        </div>

        <div className="p-4 sm:p-8 flex-1">

          <div className="bg-white rounded-2xl shadow-sm border p-6 sm:p-8 flex flex-col-reverse sm:flex-row justify-between items-center gap-6 mt-2 sm:mt-6">
            {/* Left side text */}
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Welcome back, Yashfeen! 👋
              </h2>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Manage your account settings and preferences
              </p>
            </div>

            <div className="flex-shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-blue-50 flex items-center justify-center overflow-hidden border-2 border-blue-100">
                <img 
                  src="https://tse4.mm.bing.net/th/id/OIP.DrTxWBf_vlCl18Mly_l2fwHaGE?r=0&pid=Api&P=0&h=180"
                  alt="Profile Illustration"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">

            <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 flex items-center gap-4 border border-gray-50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-violet-100 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                👤
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Profile</h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Manage your personal info
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 flex items-center gap-4 border border-gray-50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-violet-100 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                🔒
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Security</h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Update your password
                </p>
              </div>
            </div>

            {/* Preferences Card */}
            <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 flex items-center gap-4 border border-gray-50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-violet-100 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                ⚙️
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Preferences</h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Customize your experience
                </p>
              </div>
            </div>

          </div>

        </div>

        <LogoutModal 
          isOpen={showLogout}
          onClose={() => setShowLogout(false)}
          onLogout={handleLogout}  
        />
      </div>  
    </div>
  );
}

export default Dashboard;