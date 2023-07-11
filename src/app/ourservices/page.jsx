import React from "react";

const page = () => {
  return (
    <>
      <section>
        <div className='bg-[url("/cta_section.jpg")] bg-cover bg-center bg-no-repeat relative pt-32 mb-10'>
          <h2 className="font-black text-center pb-28 text-white text-7xl uppercase">
            Our Service
          </h2>
        </div>
        {/* service section */}
        <div className="grid grid-cols-3 m-20 gap-4">
          <div className="bg-cover bg-center  bg-[url('/img1.jpg')] w-96 h-full pt-40 rounded-xl relative">
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative text-white text-center pt-7">
              <h2 className="text-4xl font-bold mb-4">TRAVEL INSURANCE</h2>
              <p className="text-lg text-gray-300">
                Donec temporibus consectetuer, repudiandae integer pellentesque
                aliquet justo at sequi, atque quasi
              </p>
              <button className="bg-sky-500 py-4 px-8 rounded-full mt-2 hover:bg-sky-700">
                Learn more
              </button>
            </div>
          </div>
          <div className="relative bg-cover bg-center pb-10 bg-[url('/img2.jpg')] w-96 h-full pt-40 rounded-xl">
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative text-white text-center pt-8">
              <h2 className="text-4xl font-bold mb-4">BEST HOTELS</h2>
              <p className="text-lg text-gray-300">
                Donec temporibus consectetuer, repudiandae integer pellentesque
                aliquet justo at sequi, atque quasin
              </p>
              <button className="bg-sky-500 py-4 px-8 rounded-full mt-2 hover:bg-sky-700">
                Learn more
              </button>
            </div>
          </div>
          <div className="relative bg-cover bg-center pb-10 bg-[url('/img3.jpg')] w-96 h-full pt-40 rounded-xl">
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative text-white text-center pt-8">
              <h2 className="text-4xl font-bold mb-4">ACCESSIBILITY</h2>
              <p className="text-lg text-gray-300">
                Donec temporibus consectetuer, repudiandae integer pellentesque
                aliquet justo at sequi, atque quasi
              </p>
              <button className="bg-sky-500 py-4 px-8 rounded-full hover:bg-sky-700">
                Learn more
              </button>
            </div>
          </div>
          <div className="relative bg-cover bg-center pb-10 bg-[url('/img9.jpg')] w-96 pt-40 rounded-xl h-full">
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative text-white text-center pt-8">
              <h2 className="text-4xl font-bold mb-4">ONLINE BOOKING</h2>
              <p className="text-lg text-gray-300">
                Donec temporibus consectetuer, repudiandae integer pellentesque
                aliquet justo at sequi, atque quasi
              </p>
              <button className="bg-sky-500 py-4 px-8 rounded-full mt-2 hover:bg-sky-700">
                Learn more
              </button>
            </div>
          </div>
          <div className="relative bg-cover bg-center pb-10 bg-[url('/img11.jpg')] w-96 pt-40 rounded-xl h-full">
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative text-white text-center pt-8">
              <h2 className="text-4xl font-bold mb-4">BEST TOUR</h2>
              <p className="text-lg text-gray-300">
                Donec temporibus consectetuer, repudiandae integer pellentesque
                aliquet justo at sequi, atque quasi
              </p>
              <button className="bg-sky-500 py-4 px-8 rounded-full mt-2 hover:bg-sky-700">

                Learn more
              </button>
            </div>
          </div>
          <div className="relative bg-cover bg-center pb-10 bg-[url('/img13.jpg')] w-96 pt-40 rounded-xl h-full">
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative text-white text-center pt-8">
              <h2 className="text-4xl font-bold mb-4">24*7 SUPPORT</h2>
              <p className="text-lg text-gray-300">
                Donec temporibus consectetuer, repudiandae integer pellentesque
                aliquet justo at sequi, atque quasi
              </p>
              <button className="bg-sky-500 py-4 px-8 rounded-full mt-2 hover:bg-sky-700">
                Learn more
              </button>
            </div>
          </div>
        </div>


        {/* why you should us */}


      </section>
    </>
  );
};

export default page;
