import React from "react";

function BillingInformation() {
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
              className=" mt-2 h-11 pl-4 py-3 w-52 border border-[#E4E7E9] rounded-sm"
            />
          </div>
          <div className="flex place-items-end">
            <input
              type="text"
              placeholder="Last name"
              className="h-11 pl-4 py-3 w-52 border border-[#E4E7E9] rounded-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-[#191C1F]">
              {" "}
              CompanyName (Optional){" "}
            </label>
            <input
              type="text"
              placeholder="First name"
              className=" mt-2 h-11 pl-4 py-3 pr-40 border border-[#E4E7E9] rounded-sm"
            />
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
            className=" mt-2 h-11 pl-4 py-3  border border-[#E4E7E9] rounded-sm"
          />
        </div>
        <div className=" mt-4 flex gap-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-[#191C1F]">
              Zip Code
            </label>
            <input
              type="text"
              placeholder="i.e 380009"
              className=" mt-2 h-11 pl-4 py-3 w-52 border border-[#E4E7E9] rounded-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-[#191C1F]">
              City
            </label>
            <select
              name="state"
              className="mt-2 h-11 pl-4 py-3 w-52 border border-[#E4E7E9] rounded-sm"
            >
              <option value="">Surat</option>
              <option value="">Ahmedabad</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-[#191C1F]">
              Region/State
            </label>
            <select
              name="state"
              className="mt-2 h-11 pl-4 py-3 w-52  border border-[#E4E7E9] rounded-sm"
            >
              <option value="">Gujarat</option>
              <option value="">Goa</option>
            </select>
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="name" className="text-sm text-[#191C1F]">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="i.e 380009"
            className=" mt-2 h-11 pl-4 py-3 w-52 border border-[#E4E7E9] rounded-sm"
          />
        </div>
      </div>
    </>
  );
}

export default BillingInformation;
