import { Link } from "react-router-dom";

import React, { useState } from "react";
import StaticFooter from "../components/Staticfooter";
import Navi from "../components/Navbar";
import Signup from "./SignUp";

const API = "http://localhost:3000/api/v1/users/sign-in";

function SignIn() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loggedInUser = async (data) => {
    // Clear previous messages
    setError("");
    setSuccess("");

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await res.json();

      if (res.ok) {
        setSuccess("Logged In Successfully");
        setFormData({
          email: "",
          password: "",
        });
      } else {
        setError(response.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", formData);

    loggedInUser(formData);
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
  };

  return (
    <>
      <Navi />
      <div
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("./src/assets/Background.svg")' }}
      >
        <div className="flex justify-center items-center h-[inherit]">
          <div className="bg-[#fefefe] w-120 p-[0.5rem] rounded-2xl shadow-[rgba(0,0,0,0.35)_0px_5px_15px]">
            <div className="bg-[#ffffff] p-5 border-[1px] border-black rounded-2xl shadow-sm">
              <h2 className="text-center text-3xl font-black mb-2">Sign In</h2>
              <p className="text-center text-xl mb-6">
                into <strong>"Future of Networking"</strong>
              </p>
              {error && (
                <p className="text-red-500 text-center mb-3">{error}</p>
              )}
              {success && (
                <p className="text-green-500 text-center mb-3">{success}</p>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mt-2">
                  <label htmlFor="email" className="block mb-1 ml-[1px]">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="password" className="block mb-1 ml-[1px]">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex mt-4 mb-4">
                  <input type="checkbox" className="mr-2 accent-black" />
                  <label htmlFor="rememberMe" className=" text-black text-xs">
                    Remember me
                  </label>
                  <a href="#" className="ml-[2.25rem] text-[#202020] text-xs">
                    <strong>Forgot Password?</strong>
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-2 rounded-md"
                >
                  Login
                </button>
              </form>
              <button
                className="w-full mt-4 flex items-center justify-center bg-white text-[#808080] font-semibold p-2 rounded-md shadow-[rgba(0,0,0,0.3)_0px_4px_12px] "
                onClick={handleGoogleSignIn}
              >
                <img
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  alt="Google Icon"
                  className="h-5 mr-2"
                />
                Continue with Google
              </button>
              <p className="text-center mt-4 text-sm text-[#7d7d7d]">
                Don’t have an Account?{" "}
                <Link to="/" className="text-black">
                  <strong>Register</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <StaticFooter />
    </>
  );
}

export default SignIn;
