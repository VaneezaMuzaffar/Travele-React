import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AuthForm() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Detect mode from route
  const isLoginPage = location.pathname === "/login";

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginPage) {
      alert(`Logged in as ${formData.username}`);
      navigate("/home");
    } else {
      alert(`Account created for ${formData.username}`);
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#050816] to-[#0b1120] relative overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00bcd4" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad)" />
        </svg>
      </div>

      {/* Auth card */}
      <div className="bg-[#0e1726]/80 backdrop-blur-md text-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md z-10 border border-cyan-400/30">
        <h2 className="text-2xl font-semibold text-center mb-6 text-cyan-400">
          {isLoginPage ? "SECURE ACCESS" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-transparent border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />

          {!isLoginPage && (
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-transparent border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          )}

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-transparent border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />

          {!isLoginPage && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-transparent border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          )}

          <button
  type="submit"
  className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-2 rounded-md transition-all"
>
  {isLoginPage ? "Login to Home" : "Register & Get Started"}
</button>


          {isLoginPage ? (
            <>
              <p className="text-sm text-center text-gray-400 hover:text-cyan-400 cursor-pointer">
                Forgot Password?
              </p>
              <p className="text-sm text-center text-gray-400">
                Don’t have an account?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="text-cyan-400 cursor-pointer hover:underline"
                >
                  Sign Up
                </span>
              </p>
            </>
          ) : (
            <p className="text-sm text-center text-gray-400">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-cyan-400 cursor-pointer hover:underline"
              >
                Log In
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
