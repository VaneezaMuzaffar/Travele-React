import React from "react";

const PageHeader = ({ title, subtitle = "Explore the world with us", background }) => {
  return (
    <section
      className="relative w-full h-[60vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url("${background}")`, // ✅ fixed with quotes
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Center Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-2 text-lg md:text-xl">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;
