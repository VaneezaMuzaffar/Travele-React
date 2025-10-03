import React from "react";
import PageHeader from "../Component/PageHeader";
import bgImg from "../assets/destination.jpg"; // ✅ make sure file exists in src/assets

const TourPackages = () => {
  return (
    <>
      {/* Hero Section */}
      <PageHeader 
        title="Tour" 
        subtitle="Find your dream place with us" 
        background={bgImg} 
      />
    </>
  );
};

export default TourPackages;

