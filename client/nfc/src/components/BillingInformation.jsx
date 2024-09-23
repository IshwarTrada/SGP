import React, { useState } from "react";

function BillingInformation({ formData, updateFormData, errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  return (
    <>
      <div>
        <span className="font-medium text-lg text-[#191C1F]">
          Shipping Information
        </span>
      </div>
      <div className=" mt-6 ">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-[#191C1F]">
              User name
            </label>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className=" mt-2 h-11 pl-4 py-3 w-52 border border-[#E4E7E9] rounded-sm"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
          </div>

          <div className="flex flex-col ">
            <label htmlFor="lastname" className="text-sm text-[#191C1F]">
              Last name
            </label>
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-2 h-11 pl-4 py-3 w-52 border border-[#E4E7E9] rounded-sm"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-[#191C1F]">
              {" "}
              CompanyName (Optional){" "}
            </label>
            <input
              type="text"
              placeholder="First name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className=" mt-2 h-11 pl-4 py-3 pr-40 border border-[#E4E7E9] rounded-sm"
            />
            {errors.companyName && (
              <span className="text-red-500 text-sm">{errors.companyName}</span>
            )}
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="name" className="text-sm text-[#191C1F]">
            {" "}
            Address{" "}
          </label>
          <input
            type="text"
            placeholder="i.e b-401, Siddhshila Appertment , Nr. Ekta tower "
            name="address"
            value={formData.address}
            onChange={handleChange}
            className=" mt-2 h-11 pl-4 py-3  border border-[#E4E7E9] rounded-sm"
          />
          {errors.address && (
            <span className="text-red-500 text-sm">{errors.address}</span>
          )}
        </div>
        <div className=" mt-4 flex gap-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-[#191C1F]">
              Zip Code
            </label>
            <input
              type="text"
              placeholder="i.e 380009"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className=" mt-2 h-11 pl-4 py-3 w-52 border border-[#E4E7E9] rounded-sm"
            />
            {errors.zipCode && (
              <span className="text-red-500 text-sm">{errors.zipCode}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-[#191C1F]">
              City
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-2 h-11 pl-4 py-3 w-52 border border-[#E4E7E9] rounded-sm"
            >
              <option value=""></option>
              <option value="Surat">Surat</option>
              <option value="Ahmedabad">Ahmedabad</option>
            </select>
            {errors.city && (
              <span className="text-red-500 text-sm">{errors.city}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-[#191C1F]">
              Region/State
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-2 h-11 pl-4 py-3 w-52  border border-[#E4E7E9] rounded-sm"
            >
              <option value=""></option>
              <option value="Gujarat">Gujarat</option>
              <option value="Goa">Goa</option>
            </select>
            {errors.state && (
              <span className="text-red-500 text-sm">{errors.state}</span>
            )}
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="name" className="text-sm text-[#191C1F]">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="i.e 380009"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className=" mt-2 h-11 pl-4 py-3 w-52 border border-[#E4E7E9] rounded-sm"
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
          )}
        </div>
      </div>
    </>
  );
}

export default BillingInformation;
