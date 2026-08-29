import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

function Navbar() {

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const cartItems = useSelector(
  (state) => state.cart.cartItems
  );

  const totalItems = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
  );

  const handleLogout = () => {
    console.log("Before Logout:", user);

    dispatch(logout());

    console.log("Redux Cleared");

    navigate("/login");
  };


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
        <div className="relative" onClick={() => navigate("/cart")}>
          🛒
          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {totalItems}
            </span>
          )}
      </div>

        {/* User */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-100 transition"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-600">
            {user?.firstName?.[0] || "U"}
          </div>

          <span className="hidden sm:block font-medium">
            {user?.firstName || "User"}
          </span>

          <span>▼</span>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-52 rounded-xl border bg-white p-2 shadow-xl">

            <button className="w-full rounded-lg px-3 py-2 text-left hover:bg-gray-100">
              👤 My Profile
            </button>

            <button className="w-full rounded-lg px-3 py-2 text-left hover:bg-gray-100">
              📦 Orders
            </button>

            <button className="w-full rounded-lg px-3 py-2 text-left hover:bg-gray-100">
              ❤️ Wishlist
            </button>

            <hr className="my-2"/>

            <button
              onClick={handleLogout}
              className="w-full rounded-lg px-3 py-2 text-left text-red-500 hover:bg-red-50"
            >
              🚪 Logout
            </button>

          </div>
        )}

      </div>

      </div>
    </nav>
  );
}

export default Navbar;