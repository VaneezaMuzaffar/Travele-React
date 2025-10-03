import React, { useState, useEffect } from "react";
import PageHeader from "../Component/PageHeader";
import bgImg from "../assets/destination.jpg"; // ✅ make sure file exists

// ✅ Import your images
import img1 from "../assets/img5.jpg";
import img2 from "../assets/img6.jpg";
import img3 from "../assets/img7.jpg";

const TourCart = () => {
  // ✅ Initial products
  const defaultCart = [
    {
      id: 1,
      name: "Sunset view of beautiful lakeside resident",
      price: 1100,
      quantity: 1,
      img: img1,
    },
    {
      id: 2,
      name: "Experience the natural beauty of island",
      price: 1150,
      quantity: 1,
      img: img2,
    },
    {
      id: 3,
      name: "Vacation to the water city of Portugal",
      price: 1150,
      quantity: 1,
      img: img3,
    },
  ];

  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // ✅ checkout popup
  const [isConfirmed, setIsConfirmed] = useState(false); // ✅ success confirmation

  // ✅ Load from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart.length > 0 ? parsedCart : defaultCart);
    } else {
      setCart(defaultCart);
    }
  }, []);

  // ✅ Save to localStorage when cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // ✅ Update quantity
  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // ✅ Remove item
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Totals
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const vat = 18; // static VAT
  const grandTotal = subtotal + vat;

  // ✅ Checkout popup open
  const handleCheckout = () => {
    setShowPopup(true);
    setIsConfirmed(false);
  };

  // ✅ Confirm order
  const handleConfirmOrder = () => {
    setIsConfirmed(true);
    // clear cart after confirm
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="Tour Cart"
        subtitle="Here Tour cart"
        background={bgImg}
      />

      <div className="max-w-5xl mx-auto my-10 p-4">
        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-10">
          {["Your cart", "Your Details", "Finish"].map((step, index) => (
            <div key={index} className="flex items-center w-full">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  index === 0
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {index + 1}
              </div>
              <span className="ml-2 text-sm">{step}</span>
              {index < 2 && <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>}
            </div>
          ))}
        </div>

        {/* Cart Table */}
        <div className="overflow-x-auto border rounded-lg bg-white shadow">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-sm uppercase">
              <tr>
                <th className="p-3"></th>
                <th className="p-3">Product Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-3">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      ✕
                    </button>
                  </td>
                  <td className="p-3 flex items-center space-x-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="text-black">{item.name}</span>
                  </td>
                  <td className="p-3">${item.price.toFixed(2)}</td>
                  <td className="p-3">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-1 border rounded hover:bg-gray-200"
                      >
                        –
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-1 border rounded hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-3 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Coupon + Update */}
        <div className="border p-4 rounded-lg bg-white shadow flex justify-between items-center flex-col sm:flex-row gap-4 mt-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="I have a discount coupon"
              className="border p-2 rounded w-60"
            />
            <button className="px-4 py-2 border rounded hover:bg-gray-100">
              Apply Coupon
            </button>
          </div>
          <button className="px-4 py-2 border rounded hover:bg-gray-100">
            Update Cart
          </button>
        </div>

        {/* Totals */}
        <div className="border mt-6 p-4 rounded-lg bg-white shadow w-full sm:w-80 ml-auto">
          <div className="flex justify-between py-1">
            <span>Sub Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Vat</span>
            <span>${vat.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold py-2 border-t mt-2">
            <span>Grand Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Checkout
          </button>
        </div>
      </div>

      {/* ✅ Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            {!isConfirmed ? (
              <>
                <h2 className="text-lg font-bold mb-4">Confirm Your Order</h2>
                <ul className="space-y-2 mb-4">
                  {cart.map((item) => (
                    <li key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleConfirmOrder}
                  className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                >
                  Confirm Order
                </button>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-bold text-green-600">
                  ✅ Your order has been placed successfully!
                </h2>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TourCart;
