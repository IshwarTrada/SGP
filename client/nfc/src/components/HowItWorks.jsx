const HowItWorks = () => {
     return (
          <>
               <div>
                    <div className="bg-[#f0f0f0] py-16">
                         <div className="max-w-7xl mx-auto">
                              <h2 className="text-6xl font-bold mb-4 text-center">How It Works</h2>
                              <p className="text-gray-500 mb-10 text-center">
                                   Learn how to use the NFC business card and experience its convenience.
                              </p>
                              <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
                                   {/* Step 1 */}
                                   <div className="flex-1">
                                        <div className="relative flex flex-col">
                                             <div className="w-16 h-16 rounded-full bg-[#191919] text-white flex items-center justify-center mb-4 text-4xl ">
                                                  1
                                             </div>
                                             <div className="ml-16 w-[1230px] h-[2px] bg-black absolute top-8"></div>
                                             <div className="bg-[#f8f8f8] p-6 rounded-2xl shadow-xl min-h-[204px] flex flex-col justify-between relative">
                                                  <h2 className="text-3xl font-bold text-black"><strong>Tap and Share</strong></h2>
                                                  <p className="text-[#aaaaaa] mt-4">
                                                       Simply tap your NFC-enabled smartphone on the business card to instantly share your contact information.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>

                                   {/* Step 2 */}
                                   <div className="flex-1">
                                        <div className="relative flex flex-col">
                                             <div className="w-16 h-16 rounded-full bg-[#191919] text-white flex items-center justify-center mb-4 text-4xl">
                                                  2
                                             </div>
                                             {/* <div className="w-1 h-32 bg-gray-300 absolute top-8"></div> */}

                                             <div className="bg-[#f8f8f8] p-6 rounded-2xl shadow-xl min-h-[180px] flex flex-col justify-between relative">
                                                  <h3 className="text-3xl font-bold text-black"><strong>Smartphone Compatibility</strong></h3>
                                                  <p className="text-[#aaaaaa] mt-4">
                                                       The NFC business card is compatible with most smartphones, ensuring seamless connectivity.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>

                                   {/* Step 3 */}
                                   <div className="flex-1">
                                        <div className="relative flex flex-col">
                                             <div className="w-16 h-16 rounded-full bg-[#191919] text-white flex items-center justify-center mb-4 text-4xl">
                                                  3
                                             </div>
                                             {/* <div className="w-1 h-32 bg-gray-300 absolute top-8"></div> */}
                                             <div className="bg-[#f8f8f8] p-6 rounded-2xl shadow-xl min-h-[180px] flex flex-col justify-between relative">
                                                  <h3 className="text-3xl font-bold text-black"><strong>Convenience at Your Fingertips</strong></h3>
                                                  <p className="text-[#aaaaaa] mt-4">
                                                       Experience the convenience of having all your contact information readily available with just a tap.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default HowItWorks;
