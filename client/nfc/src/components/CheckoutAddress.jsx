import React from "react";
import AdditionalInformation from "./AdditionalInformation";
import { useState } from "react";

function CheckoutAddress() {
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="w-2/3  mt-16">
      <div>
        <span className="text-lg ">Shipping Address</span>
        <div className="mt-6 w-2/5">
          <div
            className={`flex gap-4 p-2 ${
              selectedValue === "option1" ? "border border-black" : "border-transparent"
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
              <span className="font-medium text-lg">Dhairya vora</span>
              <p className="mt-2  text-sm text-[#5F6C72] ">
                East Tejturi Bazar, Word No. 04, Road No. 13/x, House no.
                1320/C, Flat No. 5D, Dhaka - 1200, Ahemdabad
              </p>
              <span className="text-sm">Phone Number:</span>
              <span className="text-sm ml-1 text-[#5F6C72]">
                +91-202-555-0118
              </span>
              <div>
                <span className="text-sm">Email:</span>

                <span className="text-sm ml-2 text-[#5F6C72]">
                  Dhairya@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className={`flex gap-4 mt-6 place-items-baseline p-2 ${
              selectedValue === "option2" ? "border border-black " : "border-transparent"
            }`}>
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
              <p>Selected value: {selectedValue}</p>
            </div>
          </div>
        </div>
        <div>
          <AdditionalInformation />
        </div>
      </div>
    </div>
  );
}

export default CheckoutAddress;
