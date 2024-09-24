import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProdReview from './ProdReview'; // Import the ProdReview component
import ProdSpec from './ProdSpecification';

const ProductInformation = () => {
     const [activeTab, setActiveTab] = useState('description');
     

     const getTabClass = (tab) =>
          `px-8 py-5 text-xl uppercase font-medium ${activeTab === tab ? 'text-black border-b-2 border-gray-900' : 'text-[#c1ccdb]'
          }`;

     return (
          <>
               <div className="mt-12">
                    <div className="w-auto p-4 flex flex-col items-start justify-start text-left border border-gray-500 overflow-hidden ">
                         <div className="relative w-full border-b border-gray-200">
                              <div className="flex justify-center">
                                   <Link to="/prod-description"><button className={getTabClass('description')} onClick={() => setActiveTab('description')}>Description</button></Link>
                                   <Link to="#specs"><button
                                        className={getTabClass('specification')}
                                        onClick={() => setActiveTab('specification')}>Specification
                                   </button></Link>
                                   <Link to="#review"><button
                                        className={getTabClass('review')}
                                        onClick={() => setActiveTab('review')}>Review
                                   </button></Link>
                              </div>
                         </div>

                         <section className="w-full flex flex-col lg:flex-row items-start justify-between p-8 gap-8">
                              {activeTab === 'description' && (
                                   <>
                                        <div className="flex-1">
                                             <h2 className="text-xl font-semibold text-gray-900">Description</h2>
                                             <p className="text-sm text-gray-700 mt-4 text-justify">
                                                  A Business NFC Card is a cutting-edge digital business card that leverages Near Field Communication (NFC) technology. Designed for seamless information sharing, it allows you to instantly transfer your contact details, website links, and social media profiles by simply tapping the card against an NFC-enabled smartphone or tablet. This modern alternative to traditional paper cards is easily updatable, eco-friendly, and enhances your professional image. Ideal for tech-savvy professionals and businesses looking to make a lasting impression, the Business NFC Card offers a convenient, interactive, and sustainable solution for networking and personal branding.
                                             </p>
                                        </div>

                                        {/* Feature Section */}
                                        <div id="#specs" className="flex-1 max-w-md ml-16">
                                             <h2 className="text-lg font-semibold text-gray-900">Feature</h2>
                                             <ul className="mt-4 space-y-3 text-sm text-gray-700">
                                                  <li className="flex items-center">
                                                       <img className="h-6 w-6 mr-3" src="./src/assets/medal.png" alt="Free 1 Year Warranty" />
                                                       Free 1 Year Warranty
                                                  </li>
                                                  <li className="flex items-center">
                                                       <img className="h-6 w-6 mr-3" src="./src/assets/medal.png" alt="Free Shipping & Fasted Delivery" />
                                                       Free Shipping & Fasted Delivery
                                                  </li>
                                                  <li className="flex items-center">
                                                       <img className="h-6 w-6 mr-3" src="./src/assets/medal.png" alt="100% Money-back guarantee" />
                                                       100% Money-back guarantee
                                                  </li>
                                                  <li className="flex items-center">
                                                       <img className="h-6 w-6 mr-3" src="./src/assets/medal.png" alt="24/7 Customer support" />
                                                       24/7 Customer support
                                                  </li>
                                                  <li className="flex items-center">
                                                       <img className="h-6 w-6 mr-3" src="./src/assets/medal.png" alt="Secure payment method" />
                                                       Secure payment method
                                                  </li>
                                             </ul>
                                        </div>

                                        {/* Shipping Information Section */}
                                        <div className="flex-1 max-w-md">
                                             <h2 className="text-lg font-semibold text-gray-900">Shipping Information</h2>
                                             <ul className="mt-4 space-y-3 text-sm text-gray-700">
                                                  <li className="flex">
                                                       <span className="font-medium mr-2">Courier:</span> 2 - 4 days, free shipping
                                                  </li>
                                                  <li className="flex">
                                                       <span className="font-medium mr-2">Local Shipping:</span> up to one week, Rs.119.00
                                                  </li>
                                                  <li className="flex">
                                                       <span className="font-medium mr-2">UPS Ground Shipping:</span> 4 - 6 days, Rs.229.00
                                                  </li>
                                                  <li className="flex">
                                                       <span className="font-medium mr-2">Unishop Global Export:</span> 3 - 4 days, Rs.339.00
                                                  </li>
                                             </ul>
                                        </div>
                                   </>
                              )}

                              {activeTab === 'specification' && (

                                   <div className="flex-1" id="#review">
                                        <ProdSpec /> {/* Use the ProdReview component */}
                                   </div>
                                   // <div className="flex-1">
                                   //      <div className="w-full px-4 py-6">
                                   //           <table className="w-[1200px] bg-white rounded-lg border border-gray-200">
                                   //                <thead>
                                   //                     <tr>
                                   //                          <th className="text-left px-6 py-3 bg-gray-100 text-gray-700 font-bold border-r-[1px]">Brand</th>
                                   //                          <th className="text-left px-6 py-3 bg-gray-100 text-gray-700 font-bold border-r-[1px]">CardWave</th>
                                   //                     </tr>
                                   //                </thead>
                                   //                <tbody>
                                   //                     <tr className="border">
                                   //                          <td className="px-6 py-4 text-gray-600 border-r-[1px]">Manufacturer</td>
                                   //                          <td className="px-6 py-4 text-gray-600 border-r-[1px]">CardWave</td>
                                   //                     </tr>
                                   //                     <tr className="border-t bg-gray-50">
                                   //                          <td className="px-6 py-4 text-gray-600 border-r-[1px]">Country of Origin</td>
                                   //                          <td className="px-6 py-4 text-gray-600 border-r-[1px]">India</td>
                                   //                     </tr>
                                   //                     <tr className="border-t">
                                   //                          <td className="px-6 py-4 text-gray-600 border-r-[1px]">Material</td>
                                   //                          <td className="px-6 py-4 text-gray-600 border-r-[1px]">PVC</td>
                                   //                     </tr>
                                   //                     <tr className="border-t bg-gray-50">
                                   //                          <td className="px-6 py-4 text-gray-600 border-r-[1px]">Use Case</td>
                                   //                          <td className="px-6 py-4 text-gray-600 border-r-[1px]">Smart NFC Business, Visiting and ID Cards</td>
                                   //                     </tr>
                                   //                     <tr className="border-t">
                                   //                          <td className="px-6 py-4 text-gray-600 border-r-[1px]">Dimension</td>
                                   //                          <td className="px-6 py-4 text-gray-600 border-r-[1px]">8.56 x 5.4 x 0.1 cm</td>
                                   //                     </tr>
                                   //                     <tr className="border-t bg-gray-50">
                                   //                          <td className="px-6 py-4 text-gray-600 border-r-[1px]">Item Weight</td>
                                   //                          <td className="px-6 py-4 text-gray-600 border-r-[1px]">20 g</td>
                                   //                     </tr>
                                   //                </tbody>
                                   //           </table>
                                   //      </div>
                                   // </div>
                              )}

                              {activeTab === 'review' && (
                                   <div className="flex-1" id="#review">
                                        <ProdReview /> {/* Use the ProdReview component */}
                                   </div>
                              )}
                         </section>
                    </div>
               </div>
          </>
     );
};

export default ProductInformation;
