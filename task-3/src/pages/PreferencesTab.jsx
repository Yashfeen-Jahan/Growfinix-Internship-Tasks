import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LogoutModal from "../components/LogoutModal";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PreferencesTab() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-[#d6e8ee] relative">
  
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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Preferences</h1>
          <p className="text-gray-500 text-sm sm:text-base mt-1 mb-6">
            Customize your experience
          </p>


          <div className="bg-white rounded-2xl shadow-sm border p-5 sm:p-8 max-w-3xl space-y-6">

            <div className="flex justify-between items-center gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Dark Mode</h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Enable or disable dark mode
                </p>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0077b6]"></div>
              </label>
            </div>

            <hr className="border-gray-100" />

            <div className="flex justify-between items-center gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Notifications</h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Enable or disable notifications
                </p>
              </div>

              {/* Styled Toggle Switch */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0077b6]"></div>
              </label>
            </div>

            <hr className="border-gray-100" />

            <div>
              <label className="block font-semibold text-gray-800 text-sm sm:text-base mb-2">
                Language
              </label>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full border rounded-lg p-3 text-sm sm:text-base bg-white outline-none focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] transition-all cursor-pointer"
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Marathi">Marathi</option>
              </select>
            </div>

            <button className="w-full bg-[#0077b6] text-white py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-[#02457a] transition-colors">
              Save Preferences
            </button>

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

export default PreferencesTab;