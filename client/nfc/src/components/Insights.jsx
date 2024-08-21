import React from 'react';

const Insights = () => {
     return (
          <div className="bg-gray-200 w-auto"> 
          <h1 className="text-5xl text-center pt-20"><strong>What our customers said about us!!!</strong></h1>
               <div className="w-[1250px] h-[940px] flex items-center justify-center ml-[3.5rem] mr-1 text-justify">
                   
                    <div className="transform scale-90 md:scale-70 lg:scale-100 m-4 grid gap-5 grid-rows-2 grid-cols-4">

                         {/* div1 */}
                         <div className="p-7  bg-[#3c3c3d] rounded-2xl shadow-lg text-white col-span-2 row-span-1">
                              <div className="flex items-center mb-4">
                                   <div className="mr-4">
                                        <img
                                             src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
                                             alt="Dhairya Vora"
                                             className="w-8 h-8 rounded-full border-2 border-gray-300"
                                        />
                                   </div>
                                   <div>
                                        <p className="text-white text-sm font-bold mb-1 pl-2">Dhairya Vora</p>
                                        <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full border border-black">
                                             Verified Purchase
                                        </span>
                                   </div>
                              </div>
                              <div>
                                   <h4 className="text-lg lg:text-xl font-semibold text-purple-200 mb-2 mt-[2.25rem]">Exceptional Quality and Design</h4>
                                   <p className="text-[#978d9e] font-bold opacity-80 mt-[1rem]">
                                        “When I first heard about Cardwave’s NFC cards, I was skeptical. As a small business owner, I often found traditional business cards to be ineffective and easily lost. However, after attending a networking event where several attendees used Cardwave’s NFC cards, I decided to give them a try. The moment I tapped my card against someone else’s phone and instantly shared my contact information, I knew this was a game-changer. Not only did it save time, but it also left a lasting impression on potential clients.Cardwave has transformed the way I network!”
                                   </p>
                              </div>
                         </div>

                         {/* div2 */}
                         <div className="p-7  bg-[#3c3f4c] rounded-2xl shadow-lg text-white col-span-1 row-span-1">
                              <div className="flex items-center mb-4">
                                   <div className="mr-4">
                                        <img
                                             src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg"
                                             alt="Akshat Contracter"
                                             className="w-8 h-8 rounded-full border-2 border-gray-300"
                                        />
                                   </div>
                                   <div>
                                        <p className="text-white text-sm font-bold mb-1 pl-2">Akshat Contracter</p>
                                        <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full border border-black">
                                             Verified Purchase
                                        </span>
                                   </div>
                              </div>
                              <div>
                                   <h4 className="text-lg lg:text-xl font-semibold text-purple-200 mb-2 mt-[1.8rem]">Outstanding Customer Service</h4>
                                   <p className="text-purple-200 text-sm opacity-80">
                                        “I had a few questions about the NFC technology before placing my order, and the customer service team at Cardwave was incredibly helpful. They guided me through the process with patience and expertise.”
                                   </p>
                              </div>
                         </div>

                         {/* div3 */}
                         <div className="p-7  bg-white rounded-2xl shadow-lg text-black col-span-1 row-span-2">
                              <div className="flex items-center mb-4">
                                   <div className="mr-4">
                                        <img
                                             src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg"
                                             alt="Iswear Trada"
                                             className="w-8 h-8 rounded-full border-2 border-gray-300"
                                        />
                                   </div>
                                   <div>
                                        <p className="text-gray-500 text-sm font-bold mb-1 pl-2">Iswear Trada</p>
                                        <span className="bg-black/20 text-black text-xs px-2 py-1 rounded-full border border-black font-bold">
                                             Verified Purchase
                                        </span>
                                   </div>
                              </div>
                              <div>
                                   <h4 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2 mt-[1.7rem]">Eco-Friendly Solution for Modern Professionals</h4>
                                   <p className="text-gray-800 text-sm mt-4">
                                        “As someone who is passionate about sustainability, finding eco-friendly solutions for everyday tasks is important to me. When I discovered Cardwave’s NFC cards made from recyclable materials, it felt like a perfect match for my values as a marketing consultant focused on green initiatives. By switching from traditional paper business cards to these digital alternatives, I’ve minimized waste while still maintaining professional connections effortlessly through technology. My clients appreciate this commitment to sustainability as well; it’s become part of our conversations about responsible marketing practices.Thanks to Cardwave, I’ve elevated my brand image significantly!”
                                   </p>
                              </div>
                         </div>

                         {/* div4 */}
                         <div className="p-7 bg-white rounded-2xl shadow-lg text-black col-span-1 row-span-1">
                              <div className="flex items-center mb-4">
                                   <div className="mr-4">
                                        <img
                                             src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg"
                                             alt="Test user"
                                             className="w-8 h-8 rounded-full border-2 border-gray-300"
                                        />
                                   </div>
                                   <div>
                                        <p className="text-gray-500 text-sm font-bold mb-1 pl-2">Test User</p>
                                        <span className="bg-black/20 text-black text-xs px-2 py-1 rounded-full border border-black font-bold">
                                             Verified Purchase
                                        </span>
                                   </div>
                              </div>
                              <div>
                                   <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-[2rem]">Innovative Technology Integration</h4>
                                   <strong> <p className="text-gray-800 text-sm mt-[1rem]">
                                        “The NFC cards from Cardwave have transformed how I connect with customers. The seamless integration with my digital marketing strategy has boosted engagement significantly!”
                                   </p></strong>
                              </div>
                         </div>

                         {/* div5 */}
                         <div className="p-7 bg-[#040506] rounded-2xl shadow-lg text-white col-span-2 row-span-1">
                              <div className="flex items-center mb-4">
                                   <div className="mr-4">
                                        <img
                                             src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg"
                                             alt="Sahil Vagasiya"
                                             className="w-8 h-8 rounded-full border-2 border-gray-300"
                                        />
                                   </div>
                                   <div>
                                        <p className="text-white text-sm font-bold mb-1 pl-2">Sahil Vagasiya</p>
                                        <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full border border-black">
                                             Verified Purchase
                                        </span>
                                   </div>
                              </div>
                              <div>
                                   <h4 className="text-lg lg:text-xl font-semibold text-purple-200 mb-2 mt-[2rem]">Affordable Solution with Impressive Results</h4>
                                   <p className="text-purple-200 text-sm opacity-80 mt-4">
                                        “When we decided to invest in NFC technology for our startup’s promotional materials, we were worried about costs versus benefits. However, after working with Cardwave, we found their pricing structure very reasonable given the high-quality product we received! Not only did we save money compared to traditional printing methods over time due to reduced waste (no more outdated business cards), but we’ve also seen an uptick in engagement from potential clients who appreciate the convenience of tapping our cards for information. Cardwave has proven that innovation doesn’t have to come with a hefty price tag.”
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Insights;
