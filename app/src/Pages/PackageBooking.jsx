import React , { useState, useEffect }from "react";
import PageHeader from "../Component/PageHeader";
import bgImg from "../assets/destination.jpg"; // ✅ make sure file exists in src/assets

const PackageBooking = () => {
   const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    cardName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    ccv: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    postal: "",
    agree: false,
  });

  const [showToast, setShowToast] = useState(false);

  const packageCost = 300;
  const tourGuide = 34;
  const insurance = 34;
  const tax = (packageCost + tourGuide + insurance) * 0.13;
  const total = packageCost + tourGuide + insurance + tax;

  // ✅ Load data from localStorage on first render
  useEffect(() => {
    const savedData = localStorage.getItem("bookingForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // ✅ Save data to localStorage whenever formData changes
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

    // ✅ Clear localStorage on successful booking
    localStorage.removeItem("bookingForm");

    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    
    <>
      {/* Hero Section */}
      <PageHeader 
        title="Package Booking" 
        subtitle="We giving package booking Details" 
        background={bgImg} 
      />

      <div className="container mx-auto py-10 px-4 md:px-12">
      {/* ✅ Toast */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          ✅ Booking Confirmed!
        </div>
      )}

      {/* ✅ Stepper */}
      <div className="flex justify-center mb-10 space-x-16 text-sm font-semibold">
        {["Your Cart", "Your Details", "Finish"].map((label, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                step > i + 1
                  ? "bg-green-500 text-white"
                  : step === i + 1
                  ? "bg-red-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {i + 1}
            </div>
            <p className="mt-2">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* ✅ Form Section */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 bg-white p-6 rounded-lg shadow space-y-6"
        >
          {/* STEP 1 - Your Details */}
          {step === 1 && (
            <div>
              <h2 className="text-lg font-bold mb-4">1. YOUR DETAILS</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name*"
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name*"
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  type="email"
                  name="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  placeholder="Confirm Email*"
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone*"
                className="border p-2 rounded w-full mt-4"
                required
              />
              <button
                type="button"
                onClick={() => setStep(2)}
                className="mt-4 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
              >
                Next
              </button>
            </div>
          )}

          {/* STEP 2 - Payment Info */}
          {step === 2 && (
            <div>
              <h2 className="text-lg font-bold mb-4">2. PAYMENT INFORMATION</h2>
              <input
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                placeholder="Name on card*"
                className="border p-2 rounded w-full mb-3"
                required
              />
              <input
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="Card number*"
                className="border p-2 rounded w-full mb-3"
                required
              />
              <div className="grid grid-cols-3 gap-4">
                <input
                  name="expiryMonth"
                  value={formData.expiryMonth}
                  onChange={handleChange}
                  placeholder="MM"
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  name="expiryYear"
                  value={formData.expiryYear}
                  onChange={handleChange}
                  placeholder="Year"
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  name="ccv"
                  value={formData.ccv}
                  onChange={handleChange}
                  placeholder="CCV"
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 - Billing */}
          {step === 3 && (
            <div>
              <h2 className="text-lg font-bold mb-4">3. BILLING ADDRESS</h2>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border p-2 rounded w-full mb-3"
                required
              >
                <option value="">Select your country</option>
                <option>USA</option>
                <option>UK</option>
                <option>Pakistan</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="street1"
                  value={formData.street1}
                  onChange={handleChange}
                  placeholder="Street line 1*"
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  name="street2"
                  value={formData.street2}
                  onChange={handleChange}
                  placeholder="Street line 2"
                  className="border p-2 rounded w-full"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-3">
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City*"
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="border p-2 rounded w-full"
                />
                <input
                  name="postal"
                  value={formData.postal}
                  onChange={handleChange}
                  placeholder="Postal Code*"
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
              <textarea
                name="notes"
                onChange={handleChange}
                placeholder="Additional Information"
                className="border p-2 rounded w-full mt-3"
              />

              {/* Policy */}
              <label className="flex items-center mt-4 space-x-2">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                />
                <span>I accept terms and conditions and general policy.</span>
              </label>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          )}
        </form>

        {/* ✅ Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-4">Summary</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between">
                <span>Packages cost</span> <span>${packageCost}</span>
              </li>
              <li className="flex justify-between">
                <span>Dedicated tour guide</span> <span>${tourGuide}</span>
              </li>
              <li className="flex justify-between">
                <span>Insurance</span> <span>${insurance}</span>
              </li>
              <li className="flex justify-between">
                <span>Tax</span> <span>${tax.toFixed(2)}</span>
              </li>
              <li className="flex justify-between font-bold border-t pt-2">
                <span>Total cost</span> <span>${total.toFixed(2)}</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <p className="font-bold">HELP AND SUPPORT</p>
            <p className="text-lg mt-2">📞 +11 234 889 00</p>
            <p className="text-sm text-gray-500">
              Monday to Friday 9:00am - 7:30pm
            </p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default PackageBooking;
