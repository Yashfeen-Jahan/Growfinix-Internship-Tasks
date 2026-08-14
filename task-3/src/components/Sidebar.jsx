import {
  LayoutDashboard,
  User,
  Shield,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar({ setShowLogout, isOpen, setIsOpen }) {
  // Common nav link style function taaki code repetitive na ho
  const getNavClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors w-full ${
      isActive
        ? "bg-blue-500 text-white shadow-sm"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <>
      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen && setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white shadow-lg p-5 flex flex-col justify-between transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-[#02457a]">User Panel</h1>
            {setIsOpen && (
              <button
                onClick={() => setIsOpen(false)}
                className="md:hidden p-1 rounded-lg hover:bg-gray-100 text-gray-500"
              >
                <X size={22} />
              </button>
            )}
          </div>

          <nav className="space-y-2">
            <NavLink
              to="/dashboard"
              className={getNavClass}
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              <LayoutDashboard size={20} />
              Dashboard
            </NavLink>

            <NavLink
              to="/profile"
              className={getNavClass}
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              <User size={20} />
              Profile
            </NavLink>

            <NavLink
              to="/security"
              className={getNavClass}
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              <Shield size={20} />
              Security
            </NavLink>

            <NavLink
              to="/preferences"
              className={getNavClass}
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              <Settings size={20} />
              Preferences
            </NavLink>
          </nav>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <button
            onClick={() => {
              if (setIsOpen) setIsOpen(false);
              setShowLogout(true);
            }}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 font-medium transition-colors cursor-pointer"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;