import React from "react";
import Link from "next/link";
import ItemContainer from "./ItemContainer";
 
const Footer = () => {
  return (
    <footer className="bg-custom-blue text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1 className="lg:text-4xl text-4xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-sky-700">Subscribe</span>
         our newsletter for more update & news !!
        </h1>
        <div className="">
          <input
            type="email"
            name="Email"
            placeholder="Enter your Email"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-teal-400 hover:bg-teal-600 duration-300 px-5 py-2.5 font-[poppins] uppercase rounded-2xl md:w-auto w-full">
            Subscribe
          </button>
        </div>
      </div>     
      <ItemContainer />
    </footer>
  );
};

export default Footer;
