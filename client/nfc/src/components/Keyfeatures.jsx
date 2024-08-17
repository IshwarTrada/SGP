const KeyFeatures = () => {
     return (
          <div className="Key-feature bg-white mb-10">
               <div className="text-center py-6">
                    <h1 className="text-3xl font-bold">Key Features</h1>
               </div>
               <div className="px-2">
                    <div className="flex justify-center">
                         
                         <video className="w-auto h-[300px] p-1 rounded-3xl" autoPlay muted loop>
                              <source src="./src/assets/video.mp4" type="video/mp4"/>
                              Your browser does not support the video tag.
                         </video>

                    </div>
                    <br /><br />
                    <div className="flex justify-around items-center flex-wrap">
                         <div className="relative w-[38rem] h-32 m-4 rounded-lg shadow-md text-center p-[0rem] bg-gray-100">
                              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                   <img src="./src/assets/upload.png" alt="Upload" className="h-20 w-20 rounded-full shadow-lg" />
                              </div>
                              <h2 className="font-bold mt-12 mb-2 text-xl">Instant Contact Sharing</h2>
                              <p className="text-medium text-gray-600">Share your contact information with a simple tap.</p>
                         </div>

                         <div className="relative w-[38rem] h-32 m-4 rounded-lg shadow-md text-center p-[0rem] bg-gray-100">
                              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                   <img src="./src/assets/chart.png" alt="Analytics" className="h-20 w-20 rounded-full shadow-lg" />
                              </div>
                              <h2 className="font-bold mt-12 mb-2 text-xl">Analytics and Insights</h2>
                              <p className="text-medium text-gray-600">Track and analyze the performance of your business card.</p>
                         </div>
                    </div>
                    <br /><br />
                    <div className="flex justify-around items-center flex-wrap">
                         <div className="relative w-[38rem] h-32 m-4 rounded-lg shadow-md text-center p-[0rem] bg-gray-100">
                              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                   <img src="./src/assets/avatar.png" alt="Avatar" className="h-20 w-20 rounded-full shadow-lg" />
                              </div>
                              <h2 className="font-bold text-xl mt-12 mb-2">Instant Contact Sharing</h2>
                              <p className="text-medium text-gray-600">Share your contact information with a simple tap.</p>
                         </div>

                         <div className="relative w-[38rem] h-32 m-4 rounded-lg shadow-md text-center p-[0rem] bg-gray-100">
                              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                   <img src="./src/assets/medal.png" alt="Medal" className="h-20 w-20 rounded-full shadow-lg" />
                              </div>
                              <h2 className="font-bold mt-12 mb-2 text-xl">Easy Updates</h2>
                              <p className="text-medium text-gray-600">Make changes to your business card anytime, anywhere.</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default KeyFeatures;
