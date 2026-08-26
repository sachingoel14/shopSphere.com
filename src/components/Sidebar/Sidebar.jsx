function Sidebar() {
  return (
    <aside className="hidden md:flex w-60 min-h-[calc(100vh-4rem)] border-r bg-white p-4 flex-col">

      <div className="space-y-2">

        <button className="w-full rounded-lg bg-indigo-50 px-4 py-3 text-left font-medium text-indigo-600">
          🏠 Dashboard
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left font-medium text-gray-600 hover:bg-gray-100">
          🛍️ Store
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left font-medium text-gray-600 hover:bg-gray-100">
          📦 Orders
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left font-medium text-gray-600 hover:bg-gray-100">
          ❤️ Wishlist
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left font-medium text-gray-600 hover:bg-gray-100">
          👤 Profile
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left font-medium text-gray-600 hover:bg-gray-100">
          📞 Contact
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left font-medium text-gray-600 hover:bg-gray-100">
          ℹ️ About
        </button>

      </div>

      {/* Logout */}
      <div className="mt-auto">
        <button className="w-full rounded-lg px-4 py-3 text-left font-medium text-red-500 hover:bg-red-50">
          🚪 Logout
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;