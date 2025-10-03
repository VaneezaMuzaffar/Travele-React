import React, { useState, useEffect } from "react";
import PageHeader from "../Component/PageHeader";
import bgImg from "../assets/destination.jpg"; 
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const TourPackages = () => {
  const [showPopup, setShowPopup] = useState(false);

  // ✅ Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // ✅ Load saved data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("contactForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // ✅ Save data to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formData));
  }, [formData]);

  // ✅ Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    // Auto-hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <PageHeader 
        title="Contact" 
        subtitle="Contact with us" 
        background={bgImg} 
      />

      {/* ✅ Popup Message */}
      {showPopup && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50">
          ✅ Your message has been submitted successfully!
        </div>
      )}

      {/* Contact Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          {/* Left: Contact Form */}
          <div>
            <p className="text-red-500 uppercase font-semibold tracking-widest">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Contact Us To Get More Info
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name*"
                required
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email*"
                required
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message*"
                rows="5"
                required
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Need help ?? Feel free to contact us !
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
                <p>411 D Avenue, San Francisco, CS 91950</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-red-500 text-xl" />
                <p>domain@company.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-red-500 text-xl" />
                <p>619-270-8578 / +91 1987 123 88</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-red-500 hover:text-red-600 text-xl"><FaFacebook /></a>
              <a href="#" className="text-red-500 hover:text-red-600 text-xl"><FaTwitter /></a>
              <a href="#" className="text-red-500 hover:text-red-600 text-xl"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="w-full h-96">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19809.44190750153!2d-0.135713991063232!3d51.50329777942709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce554f9cd5%3A0xf81f8a58bb3a0f16!2sRiverside%20Building%2C%20County%20Hall%2C%20London!5e0!3m2!1sen!2suk!4v1633095786812!5m2!1sen!2suk"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </section>
    </>
  );
};

export default TourPackages;
