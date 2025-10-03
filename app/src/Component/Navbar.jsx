import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/travele-logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null); // ✅ for User & Packages

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    setActiveSubDropdown(null); // close submenus when switching main dropdown
  };

  const toggleSubDropdown = (submenu) => {
    setActiveSubDropdown(activeSubDropdown === submenu ? null : submenu);
  };

  const menus = [
    { title: "Home", path: "/home", items: ["Home 1", "Home 2"] },

    {
      title: "Tour",
      path: "/tour",
      items: [
        { name: "Destination", path: "/tour/destination" },
        { name: "Tour Packages", path: "/tour/packages" },
        { name: "Package Offer", path: "/tour/offer" },
        { name: "Package Detail", path: "/tour/detail" },
        { name: "Tour Cart", path: "/tour/cart" },
        { name: "Package Booking", path: "/tour/booking" },
        { name: "Confirmation", path: "/tour/confirmation" },
      ],
    },

    {
      title: "Pages",
      path: "/pages",
      items: [
        "About",
        "Service",
        "Career",
        "Career Detail",
        "Tour Guide",
        "Gallery",
        "Single Page",
        "FAQ Page",
        "Testimonial Page",
        "Popup",
        "Search Page",
        { name: "Contact", path: "contact" },
      ],
    },
    {
      title: "Shop",
      path: "/shop",
      items: ["Shop Archive", "Shop Single", "Shop Checkout", "Shop Cart"],
    },
    {
      title: "Blog",
      path: "/blog",
      items: ["Blog List", "Blog Left Sidebar", "Blog Both Sidebar", "Blog Single"],
    },
  ];

  return (
    <header className="w-full z-50 relative">
      {/* 🔹 Top Header */}
      <div className="bg-[#2b3a4a] text-white text-sm flex justify-between items-center px-4 py-2 z-50 relative">
        <div className="flex flex-wrap space-x-6">
          <span>📞 +01 (977) 2599 12</span>
          <span>✉️ company@domain.com</span>
          <span>📍 3146 Koontz Lane, California</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaFacebookF className="cursor-pointer hover:text-blue-500" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
          <FiSearch className="cursor-pointer" />
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="bg-[#3c4b5a] relative z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium text-white z-50">
            {menus.map((menu) => (
              <li key={menu.title} className="relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => toggleDropdown(menu.title)}
                >
                  <Link
                    to={menu.path}
                    className="hover:text-red-400 transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {menu.title}
                  </Link>
                  <span className="ml-1">▾</span>
                </div>

                {/* Dropdown */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 mt-2 w-56 text-center bg-white shadow-lg rounded border-t-2 border-red-500 transform transition-all duration-300 ease-in-out z-50 ${
                    activeDropdown === menu.title
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible"
                  }`}
                >
                  {menu.items.map((item, index) => (
                    <Link
                      key={index}
                      to={
                        typeof item === "string"
                          ? `${menu.path}/${item.toLowerCase().replace(/\s+/g, "-")}`
                          : item.path
                      }
                      className="block px-4 py-2 hover:bg-gray-100 text-black"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {typeof item === "string" ? item : item.name}
                    </Link>
                  ))}
                </div>
              </li>
            ))}

            {/* Dashboard Menu (desktop) */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("Dashboard")}
                className="flex items-center cursor-pointer"
              >
                Dashboard ▾
              </button>
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-2 w-60 text-center bg-white shadow-lg rounded border-t-2 border-red-500 transform transition-all duration-300 ease-in-out z-50 ${
                  activeDropdown === "Dashboard"
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100 text-black"
                  onClick={() => setActiveDropdown(null)}
                >
                  Dashboard
                </Link>

                {/* User Flyout */}
                <div className="relative group text-left">
                  <button className="w-full px-4 py-2 text-black text-left flex justify-between items-center">
                    User ▾
                  </button>
                  <div className="absolute top-0 left-full ml-2 w-40 bg-white shadow-lg rounded border-t-2 border-red-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                    {["User List", "User Edit", "New User"].map((item) => (
                      <Link
                        key={item}
                        to={`/dashboard/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 hover:bg-gray-100 text-black"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Packages Flyout */}
                <div className="relative group text-left">
                  <button className="w-full px-4 py-2 text-black text-left flex justify-between items-center">
                    Packages ▾
                  </button>
                  <div className="absolute top-0 left-full ml-2 w-48 bg-white shadow-lg rounded border-t-2 border-red-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                    {["Packages Active", "Packages Pending", "Packages Expire"].map((item) => (
                      <Link
                        key={item}
                        to={`/dashboard/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 hover:bg-gray-100 text-black"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Other Links */}
                {["Booking", "Comments", "Wishlist", "Login", "Forget Password"].map((item) => (
                  <Link
                    key={item}
                    to={`/dashboard/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 hover:bg-gray-100 text-black"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </li>
          </ul>

          {/* Buy Button */}
          <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded">
            Buy Now
          </button>

          {/* Mobile Hamburger */}
          <div className="md:hidden text-white">
            {mobileMenu ? (
              <HiX onClick={() => setMobileMenu(false)} className="text-2xl cursor-pointer" />
            ) : (
              <HiMenu onClick={() => setMobileMenu(true)} className="text-2xl cursor-pointer" />
            )}
          </div>
        </div>

        {/* 🔹 Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-[#3c4b5a] text-white px-6 py-4 space-y-4 z-50">
            {menus.map((menu) => (
              <div key={menu.title} className="relative">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDropdown(menu.title)}
                >
                  <span>{menu.title}</span>
                  <span>{activeDropdown === menu.title ? "▴" : "▾"}</span>
                </div>
                <div
                  className={`absolute left-0 mt-2 w-56 bg-white text-black shadow-lg rounded border-t-2 border-red-500 transform transition-all duration-300 ease-in-out z-50 ${
                    activeDropdown === menu.title
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible"
                  }`}
                >
                  {menu.items.map((item, index) => (
                    <Link
                      key={index}
                      to={
                        typeof item === "string"
                          ? `${menu.path}/${item.toLowerCase().replace(/\s+/g, "-")}`
                          : item.path
                      }
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setMobileMenu(false)}
                    >
                      {typeof item === "string" ? item : item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Dashboard for mobile */}
            <div className="relative">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown("Dashboard")}
              >
                <span>Dashboard</span>
                <span>{activeDropdown === "Dashboard" ? "▴" : "▾"}</span>
              </div>
              <div
                className={`absolute left-0 mt-2 w-60 bg-white text-black shadow-lg rounded border-t-2 border-red-500 transform transition-all duration-300 ease-in-out z-50 ${
                  activeDropdown === "Dashboard"
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setMobileMenu(false)}
                >
                  Dashboard
                </Link>

                {/* User Submenu */}
                <div className="relative">
                  <div
                    className="flex justify-between items-center cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => toggleSubDropdown("User")}
                  >
                    <span>User</span>
                    <span>{activeSubDropdown === "User" ? "▴" : "▾"}</span>
                  </div>
                  <div
                    className={`absolute left-full top-0 ml-2 w-40 bg-white text-black shadow-lg rounded border-t-2 border-red-500 transform transition-all duration-300 ease-in-out z-50 ${
                      activeSubDropdown === "User"
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }`}
                  >
                    {["User List", "User Edit", "New User"].map((item) => (
                      <Link
                        key={item}
                        to={`/dashboard/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setMobileMenu(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Packages Submenu */}
                <div className="relative">
                  <div
                    className="flex justify-between items-center cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => toggleSubDropdown("Packages")}
                  >
                    <span>Packages</span>
                    <span>{activeSubDropdown === "Packages" ? "▴" : "▾"}</span>
                  </div>
                  <div
                    className={`absolute left-full top-0 ml-2 w-48 bg-white text-black shadow-lg rounded border-t-2 border-red-500 transform transition-all duration-300 ease-in-out z-50 ${
                      activeSubDropdown === "Packages"
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }`}
                  >
                    {["Packages Active", "Packages Pending", "Packages Expire"].map((item) => (
                      <Link
                        key={item}
                        to={`/dashboard/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setMobileMenu(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Other Links */}
                {["Booking", "Comments", "Wishlist", "Login", "Forget Password"].map((item) => (
                  <Link
                    key={item}
                    to={`/dashboard/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setMobileMenu(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <button className="bg-red-500 text-white px-4 py-2 rounded w-full">
              Buy Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
