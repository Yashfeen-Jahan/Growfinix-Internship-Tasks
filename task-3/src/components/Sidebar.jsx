import {
  LayoutDashboard,
  User,
  Shield,
  Settings,
  LogOut,
} from "lucide-react";
import {NavLink} from "react-router-dom";

function Sidebar( {setShowLogout}) {
  return (
    <div className="w-64 min-h-screen bg-white shadow-lg p-5">
      <h1 className="text-2xl font-bold text-[#02457a] mb-8">
        User Panel
      </h1>

      <ul className="space-y-3">
        <NavLink 
          to="/dashboard"
          className={({isActive})=> 
            isActive 
            ? "flex items-center gap-3 bg-blue-300 px-4 py-3 rounded-lg font-medium"
            : "flex items-center gap-3 text-gray-700 px-4 py-3 rounded-lg hover:bg-blue-200"
          }>
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/profile" 
          className={({isActive})=> 
            isActive 
            ? "flex items-center gap-3 bg-blue-300 px-4 py-3 rounded-lg font-medium"
            : "flex items-center gap-3 text-gray-700 px-4 py-3 rounded-lg hover:bg-blue-200"
          }>
          <User size={20} />
          Profile
        </NavLink>

        <NavLink
          to="/security" 
          className={({isActive})=> 
            isActive 
            ? "flex items-center gap-3 bg-blue-300 px-4 py-3 rounded-lg font-medium"
            : "flex items-center gap-3 text-gray-700 px-4 py-3 rounded-lg hover:bg-blue-200"
          }>
          <Shield size={20} />
          Security
        </NavLink>

        <NavLink 
          to="/preferences"
          className={({isActive})=> 
            isActive 
            ? "flex items-center gap-3 bg-blue-300 px-4 py-3 rounded-lg font-medium"
            : "flex items-center gap-3 text-gray-700 px-4 py-3 rounded-lg hover:bg-blue-200"
          }>
          <Settings size={20} />
          Preferences
        </NavLink>

        <button 
          onClick={()=> setShowLogout(true)}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-100 text-red-500 cursor-pointer">
            <LogOut size={20} />
            Logout
        </button>
      </ul>
    </div>
  );
}

export default Sidebar;