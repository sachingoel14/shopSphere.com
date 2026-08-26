function Navbar() {
  return (
    <nav className="h-16 border-b bg-white px-6 flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900">
        Shop<span className="text-indigo-600">Sphere</span>
      </div>

      {/* Search */}
      <div className="hidden md:block w-96">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-indigo-500"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5">

        {/* Cart */}
        <button className="relative text-xl">
          🛒
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
            3
          </span>
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
            S
          </div>

          <span className="hidden sm:block font-medium">
            Sachin
          </span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;