import {Eye} from 'lucide-react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
    }
    return (
        <div className="min-h-screen bg-[#d6e8ee] flex items-center justify-center">
            <div className="w-[1100px] h-[600px] bg-white rounded-2xl shadow-xl flex overflow-hidden">
                {/* left side login page */}
                <div className="w-1/2 flex items-center justify-center">
                   <div className="w-[380px] bg-white p-8 rounded-2xl">
                    <div className="flex justify-center mb-5">
                        <div className="w-16 h-16 rounded-full bg-violet-600 flex- items-center justify-center text-white text-3xl ">
                            <img src="https://i.pinimg.com/1200x/ca/e7/a8/cae7a8b38bcc9abb3046c39016615650.jpg"/>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-center">
                        Welcome back
                    </h2>
                    <p className="text-gray-500 text-center mt-2 mb-6">
                        Login to your account
                    </p>

                    <label className="block mb-2 font-medium">
                        Email
                    </label>
                    <input 
                       type="email"
                       placeholder="Enter your email"
                       value={email}
                       onChange={(e) => 
                        setEmail(e.target.value)
                       }
                       className="w-full border rounded-lg p-3 mb-5 outline-none focus:border-[#]"
                    />
                    <label className="block mb-2 font-medium">
                        Password
                    </label>
                    
                    <input
                       type="password"
                       placeholder="Enter your password"
                       value={password}
                       onChange={(e) => 
                        setPassword(e.target.value)
                       }
                       className="w-full border rounded-lg p-3"
                    />
                       
                    
                       <div className="flex justify-between items-center mt-4 mb-6 text-sm">
                        <div className="flex items-center gap-2">
                            <input type="checkbox"/>
                            <span>Remember me</span>
                        </div>
                        <a href="#" className="text-[#0077b6]">
                            Forgot password?
                        </a>
                       </div>
                       <button 
                       onClick={handleLogin}
                       className="w-full bg-[#0077b6] text-white py-3 rounded-lg hover:bg-blue-700">
                         Login
                       </button>          
                   </div>
                </div>
                {/* Right side */}
                 <div className="w-1/2 bg-gardient-to-br from-violet-500 to-purple-700 flex flex-col items-center justify-center text-white p-10">
                 <div className="w-60 h-60 rounded-full bg-white/20 flex items-center justify-center text-8xl">
                 <img
                    src="https://i.pinimg.com/1200x/cd/d4/bf/cdd4bfb65c69a8f62b734f04b05704f3.jpg"
                    alt="login page"
                    className='h-65 w-70'
                 />
                 </div>
                 <h2 className="text-4xl font-bold mt-8 text-[#02457a]"> 
                    Secure Login
                 </h2>
                 <p className="text-center mt-4 text-lg text-[#0077b6]">
                    Manage your profile, security settings and preferences from one place.
                 </p>
                 </div>
            </div>
        </div>
    )
}

export default Login;