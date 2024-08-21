import { Link } from "react-router-dom";
const Footer = () => {
     return (
          <>
               <div>
                    <div className="h-[200px] bg-black text-white font-sans">
                         <div className="flex justify-between items-center p-5">
                              {/* Get in */}
                              <div className="flex flex-col items-start ml-4">
                                   <h3 className="text-lg font-semibold">Get in</h3>
                                   <div className="flex mt-4">
                                        <a href="mailto:info@nfccard.com">
                                             <i className='bx bxs-envelope mr-2 text-2xl'></i>
                                        </a>
                                        <a href="tel:+1234567890">
                                             <i className='bx bxs-phone bx-flip-horizontal mr-2 text-2xl'></i>
                                        </a>
                                        <a href="https://goo.gl/maps/example">
                                             <i className='bx bxs-map mr-2 text-2xl'></i>
                                        </a>
                                   </div>
                              </div>

                              {/* Support Center */}
                              <div>
                                   <h3 className="text-lg font-semibold">Support Center</h3>
                                   <ul className="list-none p-0">
                                        <li className="mb-1 mt-4">
                                             <Link to="#faq" className="text-[#6a6a6a] font-sem[#6a6a6a]">FAQs</Link>
                                        </li>
                                        <li className="mb-1">
                                             <a href="#customer-support" className="text-[#6a6a6a] font-semibold ">Customer Support</a>
                                        </li>
                                   </ul>
                              </div>

                              {/* Connect with us */}
                              <div>
                                   <h3 className="text-lg font-semibold">Connect with us</h3>
                                   <ul className="list-none p-0">
                                        <li className="mb-1 mt-4">
                                             <a href="#privacy-standards" className="text-[#6a6a6a] font-semibold ">Privacy Standards</a>
                                        </li>
                                        <li className="mb-1">
                                             <a href="#site-navigation" className="text-[#6a6a6a] font-semibold ">Site Navigation</a>
                                        </li>
                                   </ul>
                              </div>

                              {/* Reach out to us */}
                              <div>
                                   <h3 className="text-lg font-semibold">Reach out to us</h3>
                                   <ul className="list-none p-0">
                                        <li className="mb-1 mt-4">
                                             <a href="mailto:info@nfccard.com" className="text-[#6a6a6a] font-semibold  underline">info@nfccard.com</a>
                                        </li>
                                        <li className="mb-1 text-[#6a6a6a] font-semibold ">+123 456 7890</li>
                                   </ul>
                              </div>

                              {/* Subscribe Form */}
                              <div className="flex gap-2">
                                   <input
                                        type="email"
                                        placeholder="Enter your e-mail"
                                        className="px-6 py-1 rounded-full mr-4 border-none font-semibold"
                                   />
                                   <button
                                        type="submit"
                                        className="px-2 py-2 rounded-full bg-white text-black cursor-pointer font-semibold w-[120px]"
                                   >
                                        SUBSCRIBE
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Footer;
