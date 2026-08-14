import { Bell, ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <nav className="h-16 bg-white shadow flex items-center justify-between px-8">
      {/* Dashboard Title */}
      <h2 className="text-2xl font-semibold text-gray-800">
        Dashboard
      </h2>

      {/* Right Menu Items */}
      <div className="flex items-center gap-6">
        
        {/* Notification Icon */}
        <button 
          type="button" 
          aria-label="Notifications"
          className="p-1 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
        >
          <Bell className="h-5 w-5 cursor-pointer" />
        </button>

        {/* Profile Dropdown */}
        <div className="flex items-center gap-2.5 cursor-pointer p-1.5 rounded-lg hover:bg-gray-50 transition-colors">
          <img 
            src="https://i.pinimg.com/1200x/ca/e7/a8/cae7a8b38bcc9abb3046c39016615650.jpg"
            alt="Yashfeen's Profile"
            className="h-10 w-10 rounded-full object-cover border border-gray-200"
          />
          <span className="font-medium text-gray-700">
            Yashfeen
          </span>
          <ChevronDown size={18} className="text-gray-500" />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;