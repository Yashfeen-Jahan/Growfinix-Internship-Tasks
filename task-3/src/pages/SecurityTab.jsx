import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function SecurityTab() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#d6e8ee]">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold">Security</h1>
          <p className="text-gray-500 mb-6">
            Update your password
          </p>

          <div className="bg-white rounded-2xl shadow p-8 max-w-3xl">

            {/* Current Password */}
            <label className="font-medium">Current Password</label>

            <div className="relative mt-2 mb-5">
              <input
                type={showCurrent ? "text" : "password"}
                placeholder="Enter current password"
                className="w-full border rounded-lg p-3"
              />

              <button
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-4 top-3"
              >
                {showCurrent ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* New Password */}
            <label className="font-medium">New Password</label>

            <div className="relative mt-2 mb-5">
              <input
                type={showNew ? "text" : "password"}
                placeholder="Enter new password"
                className="w-full border rounded-lg p-3"
              />

              <button
                onClick={() => setShowNew(!showNew)}
                className="absolute right-4 top-3"
              >
                {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password */}
            <label className="font-medium">Confirm Password</label>

            <div className="relative mt-2 mb-6">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm new password"
                className="w-full border rounded-lg p-3"
              />

              <button
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-3"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button className="w-full bg-[#0077b6] text-white py-3 rounded-lg hover:bg-blue-700">
              Update Password
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityTab;