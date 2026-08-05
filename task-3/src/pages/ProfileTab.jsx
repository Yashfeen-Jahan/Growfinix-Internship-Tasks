import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function ProfileTab() {
  return (
    <div className="flex bg-[#d6e8ee] min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-gray-500 mb-6">
            Update your personal information
          </p>

          <div className="bg-white rounded-2xl shadow p-8 max-w-3xl">
            
            {/* Profile Header */}
            <div className="flex items-center gap-6 mb-8">
              <div className="h-50 w-50 rounded-full bg-white/20 flex items-center justify-center text-8xl">
                <img
                  src="https://tse3.mm.bing.net/th/id/OIP.X0PQSMf-a1-rpq1GlTflugHaHa?r=0&pid=Api&P=0&h=180"
                />
              </div>
              <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
                Change Photo
              </button>
            </div>

            {/* Full Name */}
            <div className="mb-5">
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                defaultValue="Yashfeen Jahan"
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                defaultValue="yashfeen@gmail.com"
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label className="block mb-2 font-medium">
                Phone
              </label>

              <input
                type="text"
                defaultValue="9876543210"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <button className="w-full bg-[#0077b6] text-white py-3 rounded-lg hover:bg-blue-700">
              Save Changes
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileTab;