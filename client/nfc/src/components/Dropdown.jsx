const Dropdown = () => {
     return (
          <>
               <div className="w-[130px] p-4 mt-6 mr-4 border-l-[3px] bg-transparent rounded-b-lg border-r-[3px] border-b-[3px] ml-[100px] border-t-[3px] border-[#6ca0fc]">
                    <div className="w-[97px] h-[169px] p-2.5 text-center bg-transperant">
                         <a href="#yearly"><p className="text-[#6ca0fc] drop-shadow-lg mt-1"><strong>Yearly</strong></p></a>
                         <a href="#Monthly"><p className="text-[#6ca0fc] drop-shadow-lg mt-4"><strong>Monthly</strong></p></a>
                         <a href="#Weekly"><p className="text-[#6ca0fc] drop-shadow-lg mt-4"><strong>Weekly</strong></p></a>
                         <a href="#Daily"><p className="text-[#6ca0fc] drop-shadow-lg mt-4"><strong>Daily</strong></p></a>
                    </div>
               </div>
          </>
     );
};

export default Dropdown;