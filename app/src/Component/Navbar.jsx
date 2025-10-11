import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/travele-logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    setActiveSubDropdown(null);
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
          {/* ✅ Login Button added here */}
          <Link
            to="/login"
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm"
          >
            Login
          </Link>

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
      </nav>
    </header>
  );
};

export default Navbar;
