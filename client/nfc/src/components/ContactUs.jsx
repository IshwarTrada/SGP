function ContactForm() {
     return (
          <div className="flex justify-center min-h-screen flex-col p-24 bg-gray-100 overflow-hidden">
               <h1 className="text-gray-800 mb-5 text-4xl font-bold">Get in Touch</h1>
               <form required>
                    <div className="flex mb-5">
                         <div className="flex flex-col w-1/2 mr-5">
                              <input type="text"
                                   id="name"
                                   name="name"
                                   placeholder="Name"
                                   required
                                   className="w-full p-4 rounded-md" />
                         </div>
                         <div className="flex flex-col w-1/2">
                              <input
                                   type="email"
                                   id="email"
                                   name="email"
                                   placeholder="Email"
                                   required
                                   className="w-full p-4 rounded-md"
                              />
                         </div>
                    </div>

                    <div className="flex mb-5">
                         <div className="flex flex-col w-1/2 mr-5">
                              <input
                                   type="text"
                                   id="phone"
                                   name="phone"
                                   placeholder="Phone Number"
                                   className="w-full p-4 rounded-md"
                              />
                         </div>
                         <div className="flex flex-col w-1/2">
                              <input
                                   type="text"
                                   id="topic"
                                   name="topic"
                                   placeholder="Topic"
                                   className="w-full p-4 rounded-md"
                              />
                         </div>
                    </div>

                    <div className="flex flex-col mb-5">
                         <textarea
                              id="description"
                              name="description"
                              placeholder="Description"
                              required
                              className="w-full p-4 mb-2 rounded-2xl h-40 box-border leading-tight"
                         ></textarea>
                    </div>

                    <div className="flex justify-center">
                         <button type="submit" className="bg-black text-white py-3 px-[5.25rem] rounded-2xl cursor-pointer w-54 h-14 text-xl">S U B M I T</button>
                    </div>
               </form>
          </div>
     );
}

export default ContactForm;
