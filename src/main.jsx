import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Store from "./pages/Store/Store";
import Orders from "./pages/Orders/Orders";
import Wishlist from "./pages/Wishlist/Wishlist";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>

      <Route path="/" element={<Dashboard />} />

      <Route path="store" element={<Store />} />

      <Route path="orders" element={<Orders />} />

      <Route path="wishlist" element={<Wishlist />} />

      <Route path="profile" element={<Profile />} />

      <Route path="contact" element={<Contact />} />

      <Route path="about" element={<About />} />

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);