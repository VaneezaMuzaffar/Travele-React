import React , { useState } from "react";
import PageHeader from "../Component/PageHeader";
import bgImg from "../assets/destination.jpg"; // ✅ make sure file exists in src/assets

const Confirmation = () => {
    const [confirmed, setConfirmed] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    country: "",
    zip: "",
    address: "",
  });

  const costs = {
    package: 300,
    guide: 34,
    insurance: 34,
    taxRate: 0.13,
  };
  const totalCost =
    costs.package + costs.guide + costs.insurance + costs.package * costs.taxRate;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFinish = () => {
    setConfirmed(true);
  };

  return (
    <>
      {/* Hero Section */}
      <PageHeader 
        title="Confirmation" 
        subtitle="Tour Confirmation on time " 
        background={bgImg} 
      />
        <div className="min-h-screen bg-gray-100 p-6">
      {!confirmed ? (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
          {/* Step Indicator */}
          <div className="flex justify-between mb-6">
            {["Your Cart", "Your Details", "Finish"].map((s, i) => (
              <div
                key={i}
                className={`flex-1 text-center ${
                  step === i + 1 ? "text-red-500 font-bold" : "text-gray-400"
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <>
              <h2 className="text-xl font-bold mb-4">Your Details</h2>
              <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <button
                onClick={() => setStep(2)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              <h2 className="text-xl font-bold mb-4">Payment Information</h2>
              <input
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <input
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <input
                name="zip"
                placeholder="Zip Code"
                value={formData.zip}
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <textarea
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Back
                </button>
                <button
                  onClick={handleFinish}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Finish Booking
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        // Confirmation Page
        <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Step Tracker */}
            <div className="flex justify-between items-center mb-6">
              {["Your cart", "Your Details", "Finish"].map((stepName, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center flex-1 relative"
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 ${
                      i === 2 ? "bg-red-500 border-red-500" : "border-gray-400"
                    }`}
                  />
                  <p className="mt-2 text-sm">{stepName}</p>
                </div>
              ))}
            </div>

            {/* Payment Confirmed */}
            <div className="bg-blue-600 text-white p-4 rounded">
              <h3 className="font-bold">PAYMENT CONFIRMED</h3>
              <p>
                Thank you, your payment has been successful and your booking is
                now confirmed. A confirmation email has been sent to{" "}
                {formData.email}.
              </p>
            </div>

            {/* Booking Details */}
            <div>
              <h3 className="font-bold text-lg mb-2">BOOKING DETAILS</h3>
              <div className="space-y-2">
                {Object.entries(formData).map(([label, value]) => (
                  <div
                    key={label}
                    className="flex border border-gray-200 rounded p-2 bg-gray-50"
                  >
                    <span className="w-40 font-medium capitalize">
                      {label.replace(/([A-Z])/g, " $1")}:
                    </span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Section */}
            <div>
              <h3 className="font-bold text-lg mb-2">PAYMENT</h3>
              <div className="border border-gray-200 rounded p-2 bg-gray-50">
                Payment is successful via Master Card
              </div>
            </div>

            {/* Booking Link */}
            <div>
              <h3 className="font-bold text-lg mb-2">VIEW BOOKING DETAILS</h3>
              <a
                href="https://www.travele.com/sadsf6466556"
                className="text-blue-600 underline"
              >
                https://www.travele.com/sadsf6466556
              </a>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <div className="border rounded p-4 shadow">
              <h4 className="font-bold bg-blue-600 text-white p-2 rounded">
                Summary
              </h4>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between">
                  <span>Packages cost</span>
                  <span>${costs.package}</span>
                </div>
                <div className="flex justify-between">
                  <span>Dedicated tour guide</span>
                  <span>${costs.guide}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insurance</span>
                  <span>${costs.insurance}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>{costs.taxRate * 100}%</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold">
                  <span>Total cost</span>
                  <span>${totalCost.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="border rounded p-4 shadow text-center">
              <p className="text-2xl">📞</p>
              <h4 className="font-bold">HELP AND SUPPORT</h4>
              <p className="text-xl font-semibold">+11 234 889 00</p>
              <p className="text-sm text-gray-600">
                Monday to Friday 9:00am - 7:30pm
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Confirmation;
