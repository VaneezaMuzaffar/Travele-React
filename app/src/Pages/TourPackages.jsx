import React from "react";
import PageHeader from "../Component/PageHeader";
import bgImg from "../assets/destination.jpg"; // ✅ use your own background image

// ✅ Import required icons from react-icons
import { FaMountain, FaHiking, FaFire, FaCar, FaCampground, FaMapMarkedAlt } from "react-icons/fa";

const TourPackages = () => {
  return (
    <>
      {/* Hero Section */}
      <PageHeader title="Tour Packages" background={bgImg} />

      <div className="w-full bg-white text-gray-800">
        {/* Adventure & Activity Section */}
        <section className="py-16 text-center">
          <p className="uppercase text-red-500 font-semibold tracking-widest">
            Travel by Activity
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Adventure & Activity
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Mollit voluptatem perspiciatis convallis elementum corporis quo
            veritatis aliquid blandit, blandit torquent, odit placeat.
            Adipisicing repudiandae eius cursus? Nostrum magnis maxime curae
            placeat.
          </p>

          {/* Activity Icons */}
          <div className="container mx-auto mt-12 px-6 md:px-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {[
                { icon: <FaMountain size={30} />, title: "Adventure", desc: "15 Destination" },
                { icon: <FaHiking size={30} />, title: "Trekking", desc: "12 Destination" },
                { icon: <FaFire size={30} />, title: "Camp Fire", desc: "7 Destination" },
                { icon: <FaCar size={30} />, title: "Off Road", desc: "15 Destination" },
                { icon: <FaCampground size={30} />, title: "Camping", desc: "13 Destination" },
                { icon: <FaMapMarkedAlt size={30} />, title: "Exploring", desc: "25 Destination" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border p-6 rounded-md shadow-sm hover:shadow-md transition"
                >
                  <div className="text-blue-600 mb-3 flex justify-center">{item.icon}</div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TourPackages;
