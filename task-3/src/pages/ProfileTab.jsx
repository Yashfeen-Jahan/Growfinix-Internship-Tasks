import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LogoutModal from "../components/LogoutModal";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProfileTab() {

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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Profile</h1>
          <p className="text-gray-500 text-sm sm:text-base mt-1 mb-6">
            Update your personal information
          </p>

          <div className="bg-white rounded-2xl shadow-sm border p-5 sm:p-8 max-w-3xl">
          
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 mb-8 text-center sm:text-left">
              <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0">
                <img
                  src="https://tse3.mm.bing.net/th/id/OIP.X0PQSMf-a1-rpq1GlTflugHaHa?r=0&pid=Api&P=0&h=180"
                  alt="Profile Avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              <button className="border px-4 py-2 text-sm sm:text-base text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Change Photo
              </button>
            </div>

            <div className="space-y-5">
   
              <div>
                <label className="block mb-1.5 font-medium text-gray-700 text-sm sm:text-base">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Yashfeen Jahan"
                  className="w-full border rounded-lg p-3 text-sm sm:text-base outline-none focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] transition-all"
                />
              </div>

              <div>
                <label className="block mb-1.5 font-medium text-gray-700 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="yashfeen@gmail.com"
                  className="w-full border rounded-lg p-3 text-sm sm:text-base outline-none focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] transition-all"
                />
              </div>

              <div>
                <label className="block mb-1.5 font-medium text-gray-700 text-sm sm:text-base">
                  Phone
                </label>
                <input
                  type="text"
                  defaultValue="9876543210"
                  className="w-full border rounded-lg p-3 text-sm sm:text-base outline-none focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] transition-all"
                />
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#0077b6] text-white py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-[#02457a] transition-colors mt-2">
                Save Changes
              </button>

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

export default ProfileTab;