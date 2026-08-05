import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function PreferencesTab() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  return (
    <div className="flex min-h-screen bg-[#d6e8ee]">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold">Preferences</h1>
          <p className="text-gray-500 mb-6">
            Customize your experience
          </p>

          <div className="bg-white rounded-2xl shadow p-8 max-w-3xl space-y-6">

            {/* Dark Mode */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Dark Mode</h3>
                <p className="text-gray-500 text-sm">
                  Enable or disable dark mode
                </p>
              </div>

              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </div>

            {/* Notifications */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Notifications</h3>
                <p className="text-gray-500 text-sm">
                  Enable or disable notifications
                </p>
              </div>

              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
            </div>

            {/* Language */}
            <div>
              <label className="font-semibold">Language</label>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full mt-2 border rounded-lg p-3"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Marathi</option>
              </select>
            </div>

            <button className="w-full bg-[#0077b6] text-white py-3 rounded-lg hover:bg-blue-700">
              Save Preferences
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PreferencesTab;