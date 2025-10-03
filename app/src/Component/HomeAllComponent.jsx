import { FaChevronLeft, FaChevronRight,FaMountain, FaHiking, FaFire, 
  FaCar, FaCampground, FaMapMarkedAlt, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import BgImage from "../assets/boat.jpg"; // adjust path

// Example logo imports (replace with your real logo images)
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";
import Logo5 from "../assets/logo5.png";

// 2nd last section  images
import Person1 from "../assets/imgm1.jpg";
import Person2 from "../assets/imgg1.jpg";
import Person3 from "../assets/imgm2.jpg";
import ContactImage from "../assets/girsl.jpg";
import BgLight from "../assets/tree.jpg"; // 👈 faint tree image

export default function HomeAllComponent() {
  const [current, setCurrent] = useState(0);
  

  // ✅ HERO SLIDES DATA
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
      title: "Experience the Nature's Beauty",
      text: "Explore breathtaking landscapes and discover the serenity of nature like never before.",
      button: "Continue Reading",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
      title: "Adventure Awaits You",
      text: "Take a journey into the wild and feel the thrill of real adventure in every step.",
      button: "Discover More",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      title: "Find Your Inner Peace",
      text: "Reconnect with yourself while enjoying the calmness of untouched natural wonders.",
      button: "Learn More",
    },
  ];

  // ✅ DESTINATION DATA
  const destinations = [
    {
      country: "Thailand",
      image: "https://picsum.photos/id/1025/600/400",
      title: "Disney Land",
      rating: 4,
    },
    {
      country: "Norway",
      image: "https://picsum.photos/id/1011/600/400",
      title: "Besseggen Ridge",
      rating: 5,
    },
    {
      country: "New Zealand",
      image: "https://picsum.photos/id/1012/600/400",
      title: "Oxolotan City",
      rating: 5,
    },
    {
      country: "Singapore",
      image: "https://picsum.photos/id/1013/600/400",
      title: "Marina Bay Sand City",
      rating: 5,
    },
  ];

  // ✅ SLIDER FUNCTIONS
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // ✅ image thumbnail with play button
   const [playVideo, setPlayVideo] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    tours: 0,
    reviews: 0,
    destinations: 0,
  });

  const sectionRef = useRef(null);
  const started = useRef(false);

  // Animate numbers when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;

          let interval = setInterval(() => {
            setCounts((prev) => {
              let next = {
                clients: prev.clients < 500 ? prev.clients + 10 : 500,
                tours: prev.tours < 250 ? prev.tours + 5 : 250,
                reviews: prev.reviews < 15 ? prev.reviews + 1 : 15,
                destinations: prev.destinations < 10 ? prev.destinations + 1 : 10,
              };
              if (
                next.clients === 500 &&
                next.tours === 250 &&
                next.reviews === 15 &&
                next.destinations === 10
              ) {
                clearInterval(interval);
              }
              return next;
            });
          }, 50);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

// --- Testimonials Data ---
const testimonials = [
  {
    text: "Dolorum aenean dolorem minima! Voluptatum? Corporis condimentum ac primis fusce, atque! Vivamus. Non cupiditate natus excepturi, quod quae, odio facere? Deserunt aliquid, egestas ipsum, eu Dolorum aenean dolorem minima!",
    name: "Johny English",
    role: "Travel Agent",
    image: Person1,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Aliquam erat volutpat. Curabitur vitae sem sit amet libero pharetra facilisis.",
    name: "Sarah Parker",
    role: "Tour Guide",
    image: Person2,
  },
  {
    text: "Praesent sit amet neque nec massa malesuada volutpat. Integer dictum leo vitae nulla pharetra, eu imperdiet ipsum porttitor.",
    name: "Michael Smith",
    role: "Explorer",
    image: Person3,
  },
];
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
              <p className="mt-4 max-w-2xl text-lg md:text-xl">{slide.text}</p>
              <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-md text-lg font-medium">
                {slide.button}
              </button>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-20"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-20"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* ================= DESTINATION SECTION ================= */}
      <section className="py-16 bg-white relative z-0">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-red-500 uppercase tracking-widest">
              Popular Destination
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
              Top Notch Destination
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Aperiam sociosqu urna praesent, tristique, corrupti condimentum
              asperiores plateas ipsum ad arcu. Nostrum, ornare quas provident
              laoreet nesciunt.
            </p>
          </div>

          {/* Equal Height Destination Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg group flex flex-col"
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {dest.country}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {dest.title}
                  </h3>
                  <p className="text-yellow-400">
                    {"★".repeat(dest.rating)}{" "}
                    <span className="text-gray-300">
                      {"★".repeat(5 - dest.rating)}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center mt-10">
            <button className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
              More Destination
            </button>
          </div>
        </div>
      </section>

      {/* ================= POPULAR PACKAGES SECTION ================= */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-12">
      <p className="text-red-500 uppercase tracking-widest">Explore Great Places</p>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
        Popular Packages
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, 
        blandit torquent, odit placerat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.
      </p>
    </div>

    {/* Package Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
        <div className="relative">
          <img
            src="https://picsum.photos/id/1015/600/400"
            alt="Sunset View"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded">
            $1,900 <span className="text-xs font-normal">/ per person</span>
          </div>
        </div>
        <div className="p-5 space-y-3">
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span>🕒 7D/6N</span> | <span>👥 People: 5</span> | <span>📍 Malaysia</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Sunset view of beautiful lakeside resident
          </h3>
          <div className="text-sm text-gray-500">
            (25 reviews){" "}
            <span className="text-red-400">★★★★☆</span>
          </div>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam elit tellus.
          </p>
          <div className="flex justify-between pt-4 border-t">
            <button className="text-red-500 hover:underline text-sm">Book Now →</button>
            <button className="text-gray-500 hover:text-red-500 text-sm">Wish List ♡</button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
        <div className="relative">
          <img
            src="https://picsum.photos/id/1016/600/400"
            alt="Natural Beauty"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded">
            $1,230 <span className="text-xs font-normal">/ per person</span>
          </div>
        </div>
        <div className="p-5 space-y-3">
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span>🕒 5D/4N</span> | <span>👥 People: 9</span> | <span>📍 Canada</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Experience the natural beauty of island
          </h3>
          <div className="text-sm text-gray-500">
            (17 reviews){" "}
            <span className="text-red-400">★★★★★</span>
          </div>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam elit tellus.
          </p>
          <div className="flex justify-between pt-4 border-t">
            <button className="text-red-500 hover:underline text-sm">Book Now →</button>
            <button className="text-gray-500 hover:text-red-500 text-sm">Wish List ♡</button>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
        <div className="relative">
          <img
            src="https://picsum.photos/id/1018/600/400"
            alt="Portugal City"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded">
            $2,000 <span className="text-xs font-normal">/ per person</span>
          </div>
        </div>
        <div className="p-5 space-y-3">
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span>🕒 6D/5N</span> | <span>👥 People: 6</span> | <span>📍 Portugal</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Vacation to the water city of Portugal
          </h3>
          <div className="text-sm text-gray-500">
            (22 reviews){" "}
            <span className="text-red-400">★★★★☆</span>
          </div>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam elit tellus.
          </p>
          <div className="flex justify-between pt-4 border-t">
            <button className="text-red-500 hover:underline text-sm">Book Now →</button>
            <button className="text-gray-500 hover:text-red-500 text-sm">Wish List ♡</button>
          </div>
        </div>
      </div>
    </div>

    {/* View All Packages Button */}
    <div className="flex justify-center mt-10">
      <button className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
        View All Packages
      </button>
    </div>
  </div>
</section>
{/* Video thumbnail  section*/}

 <section
      ref={sectionRef}
      className="py-16 bg-[#0098c6] text-white relative"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Left Image / Video */}
        <div className="relative w-full md:w-1/2">
          {!playVideo ? (
            <div className="relative">
              <img
                src="https://picsum.photos/id/1005/600/400"
                alt="Travel"
                className="rounded-lg shadow-lg"
              />
              <button
                onClick={() => setPlayVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg"
              >
                <span className="bg-red-500 text-white p-4 rounded-full">
                  ▶
                </span>
              </button>
            </div>
          ) : (
            <iframe
              className="w-full h-80 md:h-[400px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Travel Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Right Text + Counters */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="uppercase tracking-widest">CALLBACK FOR MORE</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            GO TRAVEL. DISCOVER. <br /> REMEMBER US!!
          </h2>
          <p className="text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
              <h3 className="text-3xl font-bold">{counts.clients}K+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">{counts.tours}K+</h3>
              <p>Successful Tours</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">{counts.reviews}K+</h3>
              <p>Reviews</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">{counts.destinations}K+</h3>
              <p>Destinations</p>
            </div>
          </div>

          {/* Phone box */}
          <div className="bg-white text-gray-800 p-10 rounded-md shadow-md flex items-center gap-3">
            <span className="text-red-500 text-2xl">📞</span>
            <div>
              <p className="text-sm">Our 24/7 Emergency Phone Services</p>
              <p className="text-red-600 font-bold text-lg">
                Call: 123-456-7890
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

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
      

      {/* Special Travel Offer Section */}
      <section className="py-16 text-center bg-gray-50">
        <p className="uppercase text-red-500 font-semibold tracking-widest">
          Travel Offer & Discount
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Special Travel Offer
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-4">
          Mollit voluptatem perspiciatis convallis elementum corporis quo
          veritatis aliquid blandit, blandit torquent, odit placeat.
          Adipisicing repudiandae eius cursus? Nostrum magnis maxime curae
          placeat.
        </p>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6 md:px-0">
          {[
            {
              img: "https://picsum.photos/id/1015/600/400",
              country: "CANADA",
              title: "Experience the natural beauty of glacier",
              oldPrice: "$5000",
              newPrice: "$1200",
              discount: "20% off",
            },
            {
              img: "https://picsum.photos/id/1016/600/400",
              country: "NEW ZEALAND",
              title: "Trekking to the mountain camp site",
              oldPrice: "$3500",
              newPrice: "$1105",
              discount: "15% off",
            },
            {
              img: "https://picsum.photos/id/1018/600/400",
              country: "MALAYSIA",
              title: "Sunset view of beautiful lakeside city",
              oldPrice: "$1800",
              newPrice: "$1476",
              discount: "15% off",
            },
          ].map((offer, i) => (
            <div key={i} className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
              <img
                src={offer.img}
                alt={offer.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition"
              />

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                {offer.discount}
              </div>

              {/* Content */}
              <div className="p-6 text-left max-w-4xl mx-auto">
                <p className="text-blue-600 font-semibold text-sm">{offer.country}</p>
                <h3 className="text-lg font-bold mt-1">{offer.title}</h3>
                <p className="mt-3">
                  Price:{" "}
                  <span className="line-through text-gray-400 mr-2">{offer.oldPrice}</span>
                  <span className="text-red-500 font-bold">{offer.newPrice}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Best travler's shared photo */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* LEFT CONTENT */}
    <div className="flex flex-col justify-center">
      <p className="uppercase text-red-500 font-semibold tracking-wider">
        Our Tour Gallery
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug mt-2">
        Best Traveler's <br /> Shared Photos
      </h2>
      <p className="text-gray-600 mt-6 max-w-lg">
        Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores 
        platea ipsum ad arcu. Nostrum, ornare quas provident laoreet nesciunt odio 
        voluptates etiam, omnis.
      </p>

      {/* IMAGE UNDER CONTENT */}
      <div className="mt-8">
        <img
          src="https://picsum.photos/id/1015/600/400"
          alt="Traveler Highlight"
          className="rounded-lg shadow-lg object-cover w-full h-[338px]"
        />
      </div>
    </div>

    {/* RIGHT IMAGE GRID */}
    <div className="grid grid-cols-2 gap-4">
      {/* Top Row */}
      <img
        src="https://picsum.photos/id/1016/600/400"
        alt="Traveler 2"
        className="rounded-lg object-cover w-full h-[220px]"
      />
      <img
        src="https://picsum.photos/id/1011/600/400"
        alt="Traveler 3"
        className="rounded-lg object-cover w-full h-[220px]"
      />

      {/* Middle Row */}
      <img
        src="https://picsum.photos/id/1012/600/400"
        alt="Traveler 4"
        className="rounded-lg object-cover w-full h-[220px]"
      />
      <img
        src="https://picsum.photos/id/1013/600/400"
        alt="Traveler 5"
        className="rounded-lg object-cover w-full h-[220px]"
      />

      {/* Full-Width Bottom Image */}
      <div className="col-span-2">
        <img
          src="https://picsum.photos/id/1018/1200/600"
          alt="Traveler 6"
          className="rounded-lg object-cover w-full h-[160px]"
        />
      </div>
    </div>
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
      </div>
     {/* ================= POPULAR PACKAGES SECTION ================= */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-12">
      <p className="text-red-500 uppercase tracking-widest">From Our Blogs</p>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
        OUR RECENT POSTS
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, 
        blandit torquent, odit placerat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.
      </p>
    </div>

    {/* Package Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
        <div className="relative">
          <img
            src="https://picsum.photos/id/1015/600/400"
            alt="Sunset View"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded">
            $1,900 <span className="text-xs font-normal">/ per person</span>
          </div>
        </div>
        <div className="p-5 space-y-3">
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span>🕒 7D/6N</span> | <span>👥 People: 5</span> | <span>📍 Malaysia</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Sunset view of beautiful lakeside resident
          </h3>
          <div className="text-sm text-gray-500">
            (25 reviews){" "}
            <span className="text-red-400">★★★★☆</span>
          </div>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam elit tellus.
          </p>
          <div className="flex justify-between pt-4 border-t">
            <button className="text-red-500 hover:underline text-sm">Book Now →</button>
            <button className="text-gray-500 hover:text-red-500 text-sm">Wish List ♡</button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
        <div className="relative">
          <img
            src="https://picsum.photos/id/1016/600/400"
            alt="Natural Beauty"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded">
            $1,230 <span className="text-xs font-normal">/ per person</span>
          </div>
        </div>
        <div className="p-5 space-y-3">
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span>🕒 5D/4N</span> | <span>👥 People: 9</span> | <span>📍 Canada</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Experience the natural beauty of island
          </h3>
          <div className="text-sm text-gray-500">
            (17 reviews){" "}
            <span className="text-red-400">★★★★★</span>
          </div>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam elit tellus.
          </p>
          <div className="flex justify-between pt-4 border-t">
            <button className="text-red-500 hover:underline text-sm">Book Now →</button>
            <button className="text-gray-500 hover:text-red-500 text-sm">Wish List ♡</button>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
        <div className="relative">
          <img
            src="https://picsum.photos/id/1018/600/400"
            alt="Portugal City"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded">
            $2,000 <span className="text-xs font-normal">/ per person</span>
          </div>
        </div>
        <div className="p-5 space-y-3">
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span>🕒 6D/5N</span> | <span>👥 People: 6</span> | <span>📍 Portugal</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Vacation to the water city of Portugal
          </h3>
          <div className="text-sm text-gray-500">
            (22 reviews){" "}
            <span className="text-red-400">★★★★☆</span>
          </div>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam elit tellus.
          </p>
          <div className="flex justify-between pt-4 border-t">
            <button className="text-red-500 hover:underline text-sm">Book Now →</button>
            <button className="text-gray-500 hover:text-red-500 text-sm">Wish List ♡</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   <section>
      {/* --- Testimonial Section with background image --- */}
      <section
        className="text-center py-16 bg-white relative bg-cover bg-center"
        style={{ backgroundImage: `url(${BgLight})` }}
      >
        <div className="absolute inset-0 bg-white/80"></div> {/* overlay to keep text readable */}

        <div className="relative z-10">
          {/* User image */}
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-cyan-600"
          />

          {/* Text */}
          <p className="italic text-gray-700 max-w-3xl mx-auto px-4 mb-4">
            "{testimonials[current].text}"
          </p>
          <h3 className="font-bold text-cyan-600">
            {testimonials[current].name}
          </h3>
          <p className="text-sm text-gray-500">{testimonials[current].role}</p>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-cyan-600" : "bg-gray-300"
                }`}
              ></button>
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
    </section>
    </>
  );
}
