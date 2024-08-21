import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import WhySection from "../components/Whysection";
import KeyFeatures from "../components/Keyfeatures";
import NFCProducts from "../components/ProductDemo";
import TestimonialsGrid from "../components/Insights";
import HowItWorks from "../components/HowItWorks";
import Hship from "../components/HowWeShip";
import Cardwave from "../components/Cardwave";
import Insights from "../components/Insights";
import Testimon from "../components/Testimon";
import FAQSection from "../components/FaqSection";
import ContactForm from "../components/ContactUs";
import Footer from "../components/MainFooter";


const LandingPage = () => {
     const location = useLocation();

     useEffect(() => {
          if (location.hash) {
               const element = document.getElementById(location.hash.substring(1));
               if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
               }
          }
     }, [location]);
     return (
          <>
               <div>
                    <div className="flex flex-row justify-evenly mt-[80px]">

                         <div className="inline-block relative">
                              <img src="./src/assets/landing.svg" className="h-[300px] w-[200] mt-[50px]" />
                              <img src="./src/assets/idea.png" className="h-[100px] ml-[7.85rem] mt-[-19.4rem] xl:bg-transparent" />
                              <Link to="/signup">
                                   <button className="w-[169px] h-[53px] bg-black text-[beige] rounded-[50px] m-1 mt-[250px] ml-[80px]">
                                        Join for free
                                   </button>
                              </Link>
                              <Link to="#working">
                              <button className="w-[200px] h-[53px] bg-[black] text-[beige] rounded-[50px] m-1">See how it Works</button>
                              </Link>
                         </div>
                         <span><img src="./src/assets/landing.png" className="h-[500px] w-[400] ml-[80px]" /></span>
                    </div>

               </div>
               <div><WhySection /></div>
               <div><KeyFeatures /></div>
               <div><NFCProducts /></div>
               <div><Insights /></div>
               <div><Testimon /></div>
               <div id="working"><HowItWorks /></div>
               <div><Hship /></div>
               <div className="mt-16"><Cardwave /></div>
               <div id="faq"><FAQSection /></div>
               <div><ContactForm /></div>
               <div><Footer /></div>

          </>
     );
};

export default LandingPage;
