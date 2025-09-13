import React from "react";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
       className="py-5 bg-amber-50"
      >
        <div className=" mx-auto px-8 justify-items-center">
          <h2 className="text-8xl bg-gradient-to-br from-amber-900 to bg-amber-800/30 text-transparent bg-clip-text mb-5">Contact Me</h2>
          <form
            className=" bg-amber-800/10 px-4 py-4 shadow-xl w-full rounded-xl
            md:w-[46rem] lg:w-[85rem] "
          >
            <div className="p-4">
              <div
                className="flex flex-col text-gray-600 
                md:flex-row md:gap-6"
              >
                <div className="flex flex-col mb-6 md:w-full">
                  <span className="mb-2">Your Name</span>
                  <input
                    type="text"
                    placeholder="Quennie Cano"
                    className="border rounded-md px-4 py-2 focus:ring-offset-2 focus:border-amber-100 focus:outline focus:outline-amber-500/10 focus:ring-2 focus:ring-amber-200/10 focus:shadow-xl hover:shadow-md"
                  />
                </div>
                <div className="flex flex-col mb-6 md:w-full">
                  <span className="mb-2">Email Address</span>
                  <input
                    type="text"
                    placeholder="queenie25@example.com"
                    className="border rounded-md px-4 py-2 focus:ring-offset-2 focus:border-amber-100 focus:outline focus:outline-amber-500/10 focus:ring-2 focus:ring-amber-200/10 focus:shadow-xl hover:shadow-md"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6 text-gray-600">
                <span className="mb-2">Subject</span>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="border rounded-md px-4 py-2 focus:ring-offset-2 focus:border-amber-100 focus:outline focus:outline-amber-500/10 focus:ring-2 focus:ring-amber-200/10 focus:shadow-xl hover:shadow-md"
                />
              </div>
              <div
                className="flex flex-col mb-6 text-gray-600
                xl:mb-8"
              >
                <span className="mb-2">Your Message</span>
                <textarea
                  name=""
                  id=""
                  placeholder="What is your Message?"
                  className="border rounded-md px-4 pt-2 pb-14 focus:ring-offset-2 focus:border-amber-100 focus:outline focus:outline-tertiary focus:ring-2 focus:ring-amber-200/10 focus:shadow-xl hover:shadow-md"
                ></textarea>
              </div>
              <button className="cursor-pointer border-amber-800/10 rounded-full py-2 px-6 inline-block mt-5 font-bold text-gray-700 ml-5 hover:bg-amber-800/30 shadow-xl">
                Send Message
              </button> 
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;