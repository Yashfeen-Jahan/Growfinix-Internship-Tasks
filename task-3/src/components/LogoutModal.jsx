function LogoutModal({ isOpen, onClose, onLogout }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-5 sm:p-6 w-full max-w-md shadow-lg transform transition-all">
        <h2 className="text-lg sm:text-base text-gray-500 mt-2">Logout</h2>

        <p className=" text-sm sm:text-base text-gray-500 mt-2">
          Are you sure you want to logout?
        </p>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg text-sm sm:text-base text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm sm:text-base hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;