import React from "react";
import AdditionalInformation from "./AdditionalInformation";
import { useState } from "react";

function CheckoutAddress({ billingData }) {
  console.log("BILL>>>", billingData);

  const [selectedValue, setSelectedValue] = useState("option1");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  if (!billingData) {
    return <div>Loading billing data...</div>; // You can replace this with a spinner or loader
  }
  return (
    <>
    
      <div className="w-2/3  mt-16">
        <div>
          <span className="text-lg ">Shipping Address</span>
          <div className="mt-6 w-2/5">
            <div
              className={`flex gap-4 p-2 ${
                selectedValue === "option1"
                  ? "border border-black"
                  : "border-transparent"
              }`}
            >
              <input
                type="radio"
                name="Address"
                value="option1"
                checked={selectedValue === "option1"}
                onChange={handleRadioChange}
              />
              <div>
                <span className="font-medium text-lg">{billingData.firstName + " "+billingData.lastName} </span>
                <p className="mt-2  text-sm text-[#5F6C72] ">
                  {billingData.address+", "+billingData.city+", "+billingData.state}
                </p>
                <span className="text-sm">Phone Number:</span>
                <span className="text-sm ml-1 text-[#5F6C72]">
                  {billingData.phoneNumber}
                </span>
                <div>
                  <span className="text-sm">Email:</span>

                  <span className="text-sm ml-2 text-[#5F6C72]">
                    Dhairya@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`flex gap-4 mt-6 place-items-baseline p-2 ${
                selectedValue === "option2"
                  ? "border border-black "
                  : "border-transparent"
              }`}
            >
              <input
                type="radio"
                name="Address"
                value="option2"
                checked={selectedValue === "option2"}
                onChange={handleRadioChange}
              />
              <div>
                <p className="mt-2  text-sm text-[#5F6C72] ">
                  Ship into different address
                </p>
              </div>
            </div>
          </div>
          <div>
            <AdditionalInformation />
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutAddress;
