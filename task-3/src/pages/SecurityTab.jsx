import { useState } from "react";
import { Eye, EyeOff, Menu } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LogoutModal from "../components/LogoutModal";
import { useNavigate } from "react-router-dom";

function SecurityTab() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-[#d6e8ee] relative">
      {/* Sidebar Component */}
      <Sidebar 
        setShowLogout={setShowLogout} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />

      {/* Main Content Area */}
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

        {/* Page Content Container */}
        <div className="p-4 sm:p-8 flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Security</h1>
          <p className="text-gray-500 text-sm sm:text-base mt-1 mb-6">
            Update your password
          </p>

          <div className="bg-white rounded-2xl shadow-sm border p-5 sm:p-8 max-w-3xl">

            <div className="mb-5">
              <label className="block mb-1.5 font-medium text-gray-700 text-sm sm:text-base">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrent ? "text" : "password"}
                  placeholder="Enter current password"
                  className="w-full border rounded-lg p-3 pr-11 text-sm sm:text-base outline-none focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1"
                >
                  {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="mb-5">
              <label className="block mb-1.5 font-medium text-gray-700 text-sm sm:text-base">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNew ? "text" : "password"}
                  placeholder="Enter new password"
                  className="w-full border rounded-lg p-3 pr-11 text-sm sm:text-base outline-none focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1"
                >
                  {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-1.5 font-medium text-gray-700 text-sm sm:text-base">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm new password"
                  className="w-full border rounded-lg p-3 pr-11 text-sm sm:text-base outline-none focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button className="w-full bg-[#0077b6] text-white py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-[#02457a] transition-colors">
              Update Password
            </button>

          </div>
        </div>

        {/* Logout Modal */}
        <LogoutModal 
          isOpen={showLogout}
          onClose={() => setShowLogout(false)}
          onLogout={handleLogout}  
        />
      </div>
    </div>
  );
}

export default SecurityTab;