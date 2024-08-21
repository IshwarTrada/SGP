import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Navi from "../components/Navbar.jsx";
// import StaticFooter from '../components/Staticfooter.jsx';
import SignIn from "./SignIn.jsx";



function Signup() {

 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log('Form submitted:', formData);
  };

  const handleGoogleSignIn = () => {
    // Placeholder function for Google Sign-In
    // You can add the logic for Google API integration here later
    console.log('Google Sign-In clicked');
  };

  return (
    <>
    {/* <Navi/> */}
      <div className="pd-12 bg-cover w-[100%]" style={{ backgroundImage: 'url("./src/assets/Backimage.jpg")' }}>
        
        <div className="flex justify-center pb-10 pt-[6rem]">
          <div className="bg-[#fefefe] w-120 p-[0.9rem] rounded-2xl shadow-[rgba(0,0,0,0.35)_0px_5px_15px]">
            <div className="bg-[#ffffff] p-5 border-[1px] border-black rounded-2xl shadow-sm">
              <h1 className="text-center text-3xl font-black mb-2">Register</h1>
              <p className="text-center text-xl mb-6">to <strong>"Connect with the Future"</strong></p>
              <form onSubmit={handleSubmit}>
                <div className="flex">
                  <div className="w-1/2 pr-2">
                    <label htmlFor="firstName" className="block mb-1 ml-[1px]">First name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="i.e. John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <label htmlFor="lastName" className="block mb-1 ml-[1px]">Last name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="i.e. Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label htmlFor="email" className="block mb-1 ml-[1px]">E-mail</label>
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
                  <label htmlFor="password" className="block mb-1 ml-[1px]">Password</label>
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
                <div className="mt-2">
                  <label htmlFor="confirmPassword" className="block mb-1 ml-[1px]">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="w-full mt-4 bg-black text-white p-2 rounded-md">Register</button>
              </form>
              <button
                className="w-full mt-4 flex items-center justify-center bg-white text-[#808080] font-semibold p-2 rounded-md shadow-[rgba(0,0,0,0.3)_0px_4px_12px]"
                onClick={handleGoogleSignIn}
              >
                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" className="h-5 mr-2" />
                Continue with Google
              </button>
              <p className="text-center mt-4 text-sm text-[#7d7d7d]">
                Already have an Account? <Link to="/SignIn" className="text-black"><strong>Sign In</strong></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=""><StaticFooter/></div> */}
    </>
  );
}

export default Signup;
