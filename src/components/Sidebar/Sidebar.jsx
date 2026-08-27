import { NavLink } from "react-router-dom";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";


function Sidebar() {

  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "🏠",
    },
    {
      name: "Store",
      path: "/store",
      icon: "🛍️",
    },
    {
      name: "Orders",
      path: "/orders",
      icon: "📦",
    },
    {
      name: "Wishlist",
      path: "/wishlist",
      icon: "❤️",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "👤",
    },
    {
      name: "Contact",
      path: "/contact",
      icon: "📞",
    },
    {
      name: "About",
      path: "/about",
      icon: "ℹ️",
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    console.log("Before Logout:", user);

    dispatch(logout());

    console.log("Redux Cleared");

    navigate("/login");
  }

  return (
    <aside className="hidden md:flex w-60 min-h-[calc(100vh-4rem)] border-r bg-white p-4">

      <div className="flex w-full flex-col">

        <div className="space-y-2">

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 font-medium transition ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              {link.icon} {link.name}
            </NavLink>
          ))}

        </div>

        <button onClick={handleLogout} className="mt-auto w-full rounded-lg px-4 py-3 text-left font-medium text-red-500 hover:bg-red-50">
          🚪 Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;