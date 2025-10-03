import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import Logo6 from "../assets/logo6.png";
import Logo7 from "../assets/logo7.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 border-l-2 border-cyan-500 pl-2">
            ABOUT TRAVEL
          </h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex items-center gap-4 mt-4">
           <img src={Logo6} alt="Award" className="h-10" />
           <img src={Logo7} alt="Magazine" className="h-10" />

          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 border-l-2 border-cyan-500 pl-2">
            CONTACT INFORMATION
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-500" /> +01 (977) 2599 12
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-500" /> company@domain.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-500" /> 3146 Koontz, California
            </li>
          </ul>
        </div>

        {/* Latest Post */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 border-l-2 border-cyan-500 pl-2">
            LATEST POST
          </h3>
          <ul className="text-sm space-y-4">
            <li>
              <p className="font-semibold text-white">
                Life is a beautiful journey not a destination
              </p>
              <span className="text-gray-400 text-xs">August 17, 2021 | No Comments</span>
            </li>
            <li>
              <p className="font-semibold text-white">
                Take only memories, leave only footprints
              </p>
              <span className="text-gray-400 text-xs">August 17, 2021 | No Comments</span>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 border-l-2 border-cyan-500 pl-2">
            SUBSCRIBE US
          </h3>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <input
            type="email"
            placeholder="Your Email.."
            className="w-full px-4 py-2 text-gray-900 rounded-md mb-3"
          />
          <button className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-md font-semibold">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-6 text-center text-sm text-gray-400">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Term & Condition</a>
            <a href="#">FAQ</a>
          </div>
          <p>
            © {new Date().getFullYear()} <span className="text-white font-bold">Travele</span>. All rights reserved
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 p-3 rounded-full text-white shadow-lg transition-all duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
