import React from "react";
import PageHeader from "../Component/PageHeader";
import ContactImage from "../assets/girsl.jpg";
import bgImg from "../assets/destination.jpg"; // ✅ make sure file exists in src/assets

const TourPackages = () => {
  const packages = [
  {
    id: 1,
    country: "CANADA",
    title: "Experience the natural beauty of glacier",
    oldPrice: 1500,
    newPrice: 1200,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    country: "NEW ZEALAND",
    title: "Trekking to the mountain camp site",
    oldPrice: 1300,
    newPrice: 1105,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    country: "MALAYSIA",
    title: "Sunset view of beautiful lakeside city",
    oldPrice: 1800,
    newPrice: 1476,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    country: "SWITZERLAND",
    title: "Hiking to the far west mount region",
    oldPrice: 2200,
    newPrice: 1868,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    country: "SOUTH WALES",
    title: "Couple vacation to South Wales",
    oldPrice: 1099,
    newPrice: 956,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    country: "DUBAI (UAE)",
    title: "Aerial view from the Burj Khalifa",
    oldPrice: 1300,
    newPrice: 1076,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
];
  return (
    <>
      {/* Hero Section */}
      <PageHeader 
        title="Package Offer" 
        subtitle="We Are provide Good Offers" 
        background={bgImg} 
      />
{/* grid images */}
       <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative rounded-lg overflow-hidden shadow-md group"
            >
              {/* Discount Badge */}
              <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full z-10">
                {pkg.discount}% off
              </div>

              {/* Image */}
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Content */}
              <div className="bg-white p-4">
                <p className="text-xs uppercase text-blue-600 font-bold">
                  {pkg.country}
                </p>
                <h3 className="text-lg font-semibold mb-2">{pkg.title}</h3>
                <p className="text-sm">
                  Price:{" "}
                  <span className="line-through text-gray-400 mr-2">
                    ${pkg.oldPrice}
                  </span>
                  <span className="text-red-500 font-bold">
                    ${pkg.newPrice}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* --- Contact Section --- */}
      <section className="bg-cyan-700 text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={ContactImage}
              alt="Contact"
              className="w-full h-[320px] object-cover"
            />
          </div>
      
          {/* Right Info */}
          <div className="w-full md:w-1/2 px-10 py-6">
            {/* Top row with 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Email */}
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p>support@gmail.com</p>
                <p>info@domain.com</p>
                <p>name@company.com</p>
              </div>
      
              {/* Phone */}
              <div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p>+132 (599) 254 669</p>
                <p>+123 (669) 255 587</p>
                <p>+01 (977) 2599 12</p>
              </div>
      
              {/* Address */}
              <div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p>3146 Koontz, California</p>
                <p>Quze.24 Second floor</p>
                <p>36 Street, Melbourne</p>
              </div>
            </div>
      
            {/* Bottom row with message + button */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <h3 className="text-lg font-semibold">
                LET'S JOIN US FOR MORE UPDATE !!
              </h3>
              <button className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-md font-semibold">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourPackages;
