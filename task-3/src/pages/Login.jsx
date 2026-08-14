import { Eye } from 'lucide-react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#d6e8ee] flex items-center justify-center p-4 sm:p-6">
     
      <div className="w-full max-w-5xl min-h-[550px] bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">

        <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-10">
          <form onSubmit={handleLogin} className="w-full max-w-sm">

            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-violet-100 flex items-center justify-center bg-violet-600">
                <img 
                  src="https://i.pinimg.com/1200x/ca/e7/a8/cae7a8b38bcc9abb3046c39016615650.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
              Welcome back
            </h2>
            <p className="text-gray-500 text-center text-sm sm:text-base mt-2 mb-6">
              Login to your account
            </p>

            <label className="block mb-1.5 font-medium text-gray-700 text-sm sm:text-base">
              Email
            </label>
            <input 
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg p-3 mb-4 outline-none focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] transition-all"
              required
            />

            <label className="block mb-1.5 font-medium text-gray-700 text-sm sm:text-base">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg p-3 outline-none focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] transition-all"
              required
            />

            <div className="flex justify-between items-center mt-4 mb-6 text-xs sm:text-sm">
              <label className="flex items-center gap-2 cursor-pointer select-none text-gray-600">
                <input type="checkbox" className="rounded text-[#0077b6]" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-[#0077b6] hover:underline font-medium">
                Forgot password?
              </a>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#0077b6] text-white py-3 rounded-lg font-medium hover:bg-[#02457a] transition-colors"
            >
              Login
            </button>          
          </form>
        </div>

        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-slate-50 to-blue-50 flex-col items-center justify-center p-8 text-center border-l border-gray-100">
          <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-blue-100/50 flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
            <img
              src="https://i.pinimg.com/1200x/cd/d4/bf/cdd4bfb65c69a8f62b734f04b05704f3.jpg"
              alt="Login graphic"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold mt-6 text-[#02457a]"> 
            Secure Login
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xs leading-relaxed">
            Manage your profile, security settings and preferences from one place.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;
