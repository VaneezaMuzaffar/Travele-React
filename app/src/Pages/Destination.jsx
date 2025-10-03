import React from "react";
import PageHeader from "../Component/PageHeader";
import bgImg from "../assets/destination.jpg"; // ✅ Hero background
import { AiFillStar } from "react-icons/ai";
import BgImage from "../assets/boat.jpg"; // adjust path

// Example logo imports (replace with your real logo images)
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";
import Logo5 from "../assets/logo5.png";

// ✅ Import your images (put them in src/assets/)
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img1.jpg";
import img6 from "../assets/img2.jpg";
import img7 from "../assets/img3.jpg";

// ✅ Destination data
const destinations = [
  { id: 1, img: img1, title: "Sunny Beach", country: "Spain", rating: 5 },
  { id: 2, img: img2, title: "Mountain Escape", country: "Switzerland", rating: 4 },
  { id: 3, img: img3, title: "Desert Safari", country: "Dubai", rating: 4 },
  { id: 4, img: img4, title: "Rainforest Trek", country: "Brazil", rating: 5 },
  { id: 5, img: img5, title: "Urban Adventure", country: "Japan", rating: 3 },
  { id: 6, img: img6, title: "Island Getaway", country: "Maldives", rating: 5 },
  { id: 7, img: img7, title: "Historic Temple", country: "Thailand", rating: 4 },
];

export const Destination = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <PageHeader 
        title="Dashboard" 
        subtitle="" 
        background={bgImg} 
      />

      {/* ✅ Destinations Grid */}
      <section className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px] grid-flow-dense">
          {destinations.map((item, idx) => (
            <div
              key={item.id}
              className={`relative rounded-lg overflow-hidden shadow-md group ${
                idx % 4 === 0 ? "row-span-2" : ""
              }`}
            >
              {/* Background Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0  group-hover:bg-opacity-60 transition"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                {/* Country Tag */}
                <span className="bg-blue-600 text-xs font-bold px-2 py-1 rounded self-start">
                  {item.country}
                </span>

                {/* Title & Rating */}
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <div className="flex mt-1">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <AiFillStar key={i} className="text-yellow-400" />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
     
      {/* HOLIDAY SPECIAL 25% OFF ! */}
           <div>
           {/* Logos Row */}
           <div className="bg-cyan-700 py-8 mx-15 ">
             <div className="container mx-auto flex flex-wrap justify-center items-center gap-10">
               {[Logo1, Logo2, Logo3, Logo4, Logo5].map((logo, i) => (
                 <img key={i} src={logo} alt={`logo-${i}`} className="h-12 object-contain" />
               ))}
             </div>
           </div>
     
          {/* Offer Section with Background */}
     <section
       className="relative bg-cover bg-center bg-no-repeat bg-fixed py-20"
       style={{ backgroundImage: `url(${BgImage})` }}
     >
       {/* Dark Overlay */}
       <div className="absolute inset-0 bg-black/50"></div>
     
       {/* Content */}
       <div className="relative container mx-auto px-6 text-white max-w-3xl">
         <p className="uppercase tracking-widest text-sm mb-2">
           Holiday Package Offer
         </p>
         <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
           HOLIDAY SPECIAL 25% OFF !
         </h2>
         <p className="mb-6 text-lg">
           Sign up now to receive hot special offers and information about the
           best tour packages, updates and discounts !!
         </p>
     
         {/* Input + Button with White Border */}
         <div className="flex flex-col sm:flex-row items-center w-full max-w-xl mb-6 border border-white rounded-md overflow-hidden">
           <input
             type="email"
             placeholder="Your Email Address"
             className="flex-1 px-4 py-3 text-white bg-transparent focus:outline-none"
           />
           <button className="px-6 py-3 bg-red-500 hover:bg-red-600 font-semibold text-white">
             SIGN UP NOW!
           </button>
         </div>
     
         <p className="text-sm text-gray-200">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
           tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Eaque
           adipiscing, luctus eleifend temporibus occaecat luctus eleifend
           tempo ribus.
         </p>
       </div>
     </section>
           </div>
           
      
    </>
  );
};
