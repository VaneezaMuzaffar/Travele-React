import React, { useState, useEffect } from "react";
import PageHeader from "../Component/PageHeader";
import bgImg from "../assets/destination.jpg"; // ✅ make sure file exists

const TourPackages = () => {
  const [activeTab, setActiveTab] = useState("description");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    tourGuide: false,
    insurance: false,
    dinner: false,
  });

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("bookingForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookingForm", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="Package Detail"
        subtitle="Here we have different package details"
        background={bgImg}
      />

      {/* ✅ Toast Message */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          ✅ Booking submitted successfully!
        </div>
      )}

      {/* Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto grid md:grid-cols-3 gap-10 px-6">
          {/* Left Content */}
          <div className="md:col-span-2">
            {/* Title + Price */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold uppercase">
                Experience The Natural Beauty Of Island
              </h1>
              <div className="text-right">
                <p className="text-red-500 font-bold text-xl">$649</p>
                <p className="text-sm text-gray-600">per person</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
            </div>

            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
              alt="tour"
              className="rounded-lg shadow mb-6"
            />

            {/* Tabs */}
            <div className="border-b mb-4 flex space-x-6">
              {["description", "program", "review", "map"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`uppercase pb-2 ${
                    activeTab === tab
                      ? "border-b-2 border-red-500 text-red-500 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "description" && (
              <div className="bg-white p-6 border rounded">
                <p className="mb-4 text-gray-600">
                  Oceanic pariatur Quasrat ligil, ab consequuntur erat mauris
                  distinctio beatae sunt blanditiis. Dolorum, tempora!
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Travel cancellation insurance</li>
                  <li>Travel assistance & guidance</li>
                  <li>Meals and drinks included</li>
                  <li>Hotel stay included with all the amenities</li>
                  <li>Lower prices due to seasonal discounts</li>
                </ul>
              </div>
            )}

            {/* Gallery */}
            <div className="mt-8">
              <h3 className="mb-2 text-lg font-semibold">Gallery / Photos</h3>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                  alt="gallery"
                  className="w-full h-51 object-cover rounded shadow"
                />
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"
                  alt="gallery"
                  className="w-full h-51 object-cover rounded shadow"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Form */}
            <div className="bg-white border rounded-lg p-6 shadow">
              <h3 className="font-semibold text-lg mb-4">Booking</h3>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />

                {/* Options */}
                <div className="space-y-2 text-gray-600 text-sm">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="tourGuide"
                      checked={formData.tourGuide}
                      onChange={handleChange}
                    />
                    <span>Tour Guide</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="insurance"
                      checked={formData.insurance}
                      onChange={handleChange}
                    />
                    <span>Insurance</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="dinner"
                      checked={formData.dinner}
                      onChange={handleChange}
                    />
                    <span>Dinner</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                >
                  Book Now
                </button>
              </form>
            </div>

            {/* Travel Tips */}
            <div className="bg-white border rounded-lg p-6 shadow">
              <h3 className="font-semibold mb-3">Need Travel Related Tips?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Our experts will help you with essential tips and guidance before
                you start your journey.
              </p>
              <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                Get a Quote
              </button>
            </div>

            {/* More Packages (under Travel Tips) */}
            <div
              className="p-20 rounded-lg bg-cover bg-center text-white"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1000&q=80')",
              }}
            >
              <p className="uppercase text-red-500 font-semibold tracking-widest">
                More Packages
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4  text-red-600">
                Other Travel Packages
              </h2>
              <p className="mb-6 text-red-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 text-lg font-medium">
                <li className="bg-white text-gray-800 p-3 rounded shadow hover:bg-red-500 hover:text-white transition">
                  Vacation Packages
                </li>
                <li className="bg-white text-gray-800 p-3 rounded shadow hover:bg-red-500 hover:text-white transition">
                  Hneymoon Packages
                </li>
                <li className="bg-white text-gray-800 p-3 rounded shadow hover:bg-red-500 hover:text-white transition">
                  New Year Packages
                </li>
                <li className="bg-white text-gray-800 p-3 rounded shadow hover:bg-red-500 hover:text-white transition">
                  Weekend Packages
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourPackages;
