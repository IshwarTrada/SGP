import React from "react";

function AdditionalInformation() {
  return (
    <>
      <div className="mt-10">
        <div>
          <span className="font-medium text-lg text=[#191C1F]">
            Additional Information
          </span>
        </div>
        <div className="mt-6">
          <div>
            <span className="text-sm">Order Notes (Optional)</span>
            <hr />
          </div>
          <div>
            <textarea
              name="Additional Inforation"
              placeholder="Notes about your order, e.g. special notes for delivery"
              className="w-full mr-2 text-[#929FA5] text-sm pl-4 pt-3 h-32 border rounded-sm"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdditionalInformation;
