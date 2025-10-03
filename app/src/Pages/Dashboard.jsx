import React from "react";
import PageHeader from "../Component/PageHeader";
import bgImg from "../assets/destination.jpg";

const Dashboard = () => {
  return (
    <>
      <PageHeader title="Dashboard" background={bgImg} />
      <section className="p-6">
        <h2 className="text-2xl font-bold">Dashboard Section</h2>
        <p>Content here...</p>
      </section>
    </>
  );
};

export default Dashboard; // ✅ default export
