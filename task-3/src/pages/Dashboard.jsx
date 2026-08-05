import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import LogoutModal from "../components/LogoutModal";
import { useNavigate } from "react-router-dom";

function Dashboard(){

  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/")
  }

    return (
    <div className="flex">
      <Sidebar setShowLogout={setShowLogout}/>
      <div className="flex-1 bg-[#d6e8ee]">
        <Navbar />
        <div className="bg-white rounded-2xl shadow-sm border p-8 flex justify-between items-center mt-6">
          {/* left side */}
          <div>
            <h2 className="text-3xl font-bold">
              Welcome back, Yashfeen! 👋
            </h2>
            <p className="text-gray-500 mt-3">
              Manage your account settings and preferences
            </p>
          </div>

          {/* right side */}
          <div>
           <div className="w-45 h-45 rounded-full bg-white/20 flex items-center justify-center text-8xl">
                <img 
                  src="https://tse4.mm.bing.net/th/id/OIP.DrTxWBf_vlCl18Mly_l2fwHaGE?r=0&pid=Api&P=0&h=180"
                  alt="lady picture"
                  className="h-40 w-40"
                />
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center">
                👤
              </div>

              <div>
                 <h3 className="font-semibold">
                    Profile
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Manage your personal info
                  </p>
              </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center">
                🔒
              </div>

              <div>
                <h3 className="font-semibold">
                  Security
                </h3>

                <p className="text-gray-500 text-sm">
                  Update your password
                </p>
              </div>

          </div>

          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center">
                ⚙️
              </div>

              <div>
                <h3 className="font-semibold">
                  Preferences
                </h3>

                <p className="text-gray-500 text-sm">
                  Customize your experience
                </p>
              </div>

          </div>

        </div>

        <LogoutModal 
          isOpen={showLogout}
          onClose={()=> setShowLogout(false)}
          onLogout={handleLogout}  
        />
      </div>  
    </div>
  );
}
 
export default Dashboard;