import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navi from "../components/Navbar.jsx"; // Uncomment if needed
import StaticFooter from '../components/Staticfooter.jsx'; // Uncomment if needed

const API = "http://localhost:3000/api/v1/users/register";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const registerUser = async (data) => {
    // Clear previous messages
    setError("");
    setSuccess("");

    const res = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await res.json();
    console.log(response);

    if (res.ok) {
      setSuccess("Registration successful! Please log in.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setError(response.message || "Registration failed.");
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
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    registerUser({
      fname: formData.firstName,
      lname: formData.lastName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    });
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
  };

  return (
    <>
      <Navi />
      <div
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("./src/assets/Backimage.jpg")' }}
      >
        <div className="flex justify-center items-center h-[inherit]">
          <div className="bg-[#fefefe] w-[425px] p-[0.7rem] rounded-2xl shadow-[rgba(0,0,0,0.35)_0px_5px_15px]">
            <div className="bg-[#ffffff] p-5 border-[1px] border-black rounded-2xl shadow-sm h-full">
              <h1 className="text-center text-xl font-black mb-2">Register</h1>
              <p className="text-center pb-6">
                to <strong>"Connect with the Future"</strong>
              </p>
              {error && <p className="text-red-500 text-center mb-3">{error}</p>}
              {success && (
                <p className="text-green-500 text-center mb-3">{success}</p>
              )}
              <form onSubmit={handleSubmit}>
                <div className="flex">
                  <div className="w-1/2 pr-2">
                    <label htmlFor="firstName" className="block mb-1 ml-[1px] text-[0.9rem]">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full p-2 border border-gray-300 rounded-md text-[0.9rem]"
                      placeholder="i.e. John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <label htmlFor="lastName" className="block mb-1 ml-[1px] text-[0.9rem]">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full p-2 border border-gray-300 rounded-md  text-[0.9rem]"
                      placeholder="i.e. Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label htmlFor="email" className="block mb-1 ml-[1px]  text-[0.9rem]">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded-md  text-[0.9rem]"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="password" className="block mb-1 ml-[1px]  text-[0.9rem]">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-2 border border-gray-300 rounded-md text-[0.9rem]"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-2">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-1 ml-[1px]  text-[0.9rem]"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full p-2 border border-gray-300 rounded-md text-[0.9rem]"
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 bg-black text-white p-2 rounded-md text-[0.9rem]"
                >
                  Register
                </button>
              </form>
              <button
                className="w-full mt-4 flex items-center justify-center bg-white text-[#808080] font-semibold p-2 rounded-md shadow-[rgba(0,0,0,0.3)_0px_4px_12px]"
                onClick={handleGoogleSignIn}
              >
                <img
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  alt="Google icon"
                  className="h-5 mr-2"
                />
                Continue with Google
              </button>
              <p className="text-center mt-4 text-sm text-[#7d7d7d]">
                Already have an Account?{" "}
                <Link to="/signin" className="text-black">
                  <strong>Sign In</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=""><StaticFooter/></div>
    </>
  );
}

export default Signup;
