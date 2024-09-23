// import React, { useState } from "react";
// import BillingInformation from "./BillingInformation";
// import AdditionalInformation from "./AdditionalInformation";
// import axios from "axios";

// function CheckoutInformation() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     companyName: "",
//     address: "",
//     zipCode: "",
//     city: "",
//     state: "",
//     phoneNumber: "",
//   });

//   const [errors, setErrors] = useState({});

//   // Function to update form data
//   const updateFormData = (name, value) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   // Function to validate the form
//   const validateForm = () => {
//     let validationErrors = {};
//     if (!formData.firstName)
//       validationErrors.firstName = "First name is required";
//     if (!formData.lastName) validationErrors.lastName = "Last name is required";
//     if (!formData.address) validationErrors.address = "Address is required";
//     if (!formData.zipCode) validationErrors.zipCode = "Zip Code is required";
//     if (!formData.city) validationErrors.city = "City is required";
//     if (!formData.state) validationErrors.state = "State is required";
//     if (!formData.phoneNumber)
//       validationErrors.phoneNumber = "Phone number is required";
//     else if (!/^\d{10}$/.test(formData.phoneNumber)) {
//       validationErrors.phoneNumber = "Phone number must be 10 digits";
//     }

//     return validationErrors;
//   };

//   // Function to handle form submission
//   const handleSubmit = async () => {
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       console.log("data submited");

//       // try {
//       //   // API call to submit the data
//       //   const response = await axios.post("/api/submit-address", formData);
//       //   console.log("Data submitted successfully:", response.data);
//       //   alert("Form submitted successfully!");
//       // } catch (error) {
//       //   console.error("Error submitting the form:", error);
//       //   alert("Failed to submit the form.");
//       // }
//     }
//   };

//   return (
//     <div className="w-2/3 pt-20">
//       {/* <BillingInformation
//         formData={formData}
//         updateFormData={updateFormData}
//         errors={errors}
//       />
//       <AdditionalInformation 
//       handleSubmit={handleSubmit}/> */}
//     </div>
//   );
// }

// export default CheckoutInformation;
