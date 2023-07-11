// itemContainer
import Link from "next/link";

const itemContainer = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:gap-48 sm:grid-cols-3 lg:grid-cols-4 , sm:px-6 px-12 py-16 ">
        <div className="pl-6 gap-8">
          <h2 className="uppercase text-4xl text-sky-400 font-semibold">
            IVidhanTravels
          </h2>
          <p className="p-1 text-zinc-300">Ready to Go!</p>
        </div>
        <div>
          <h2 className="uppercase text-white p-2 text-lg">Services</h2>
          <ul className="p-2 text-gray-400 cursor-pointer">
            <li className="hover:text-sky-400 ease-out p-1">Tour Service</li>
            <li className="hover:text-sky-400 ease-out p-1">Blog</li>
            <li className="hover:text-sky-400 ease-out p-1">Testimonial</li>
            <li className="hover:text-sky-400 ease-out p-1">Career</li>
            <li className="hover:text-sky-400 ease-out p-1">Packages</li>
          </ul>
        </div>
        <div>
          <h2 className="uppercase text-white p-2 text-lg ">Packages</h2>
          <ul className="p-2 text-gray-400 cursor-pointer">
            <li className="hover:text-sky-400 ease-out p-1">Family Package</li>
            <li className="hover:text-sky-400 ease-out p-1">Package Offer</li>
            <li className="hover:text-sky-400 ease-out p-1">Package Detail</li>
            <li className="hover:text-sky-400 ease-out p-1">Booking page</li>
            <li className="hover:text-sky-400 ease-out p-1">Confirmation</li>
          </ul>
        </div>
        <div>
          <h2 className="uppercase text-white p-2 text-lg">Quick Links</h2>
          <ul className="p-2 text-gray-400 cursor-pointer">
            <li className="hover:text-sky-400 ease-out p-1">Distane Chart</li>
            <li className="hover:text-sky-400 ease-out p-1">Weather Update</li>
            <li className="hover:text-sky-400 ease-out p-1">
              Currency Converter
            </li>
            <li className="hover:text-sky-400 ease-out p-1">
              Airlines Timetable
            </li>
            <li className="hover:text-sky-400 ease-out p-1">
              Wellness and Spas
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#223645] px-9 py-6">
        <h2 className="text-gray-300 text-center">Copyright © 2023 IVidhanTravels. All rights reserved.</h2>
      </div>
    </>
  );
};

export default itemContainer;
