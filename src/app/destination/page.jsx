import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div>
        <div className='bg-[url("/cta_section.jpg")] bg-cover bg-center bg-no-repeat relative pt-32 '>
          <h2 className="font-black text-center pb-28 text-white text-7xl uppercase">
            Destination
          </h2>
        </div>

        {/* secound section */}
        <div className="px-20 pt-32 pb-7">
          <div className="text-center">
            <h2 className="font-bold text-3xl p-1">
              Our top Destination is here!
            </h2>
            <p className="text-gray-500 text-center">
              "The Most Visible Place" is not just a visual feast; it is a hub
              of activity and connection. The ground floor hosts an array of
              upscale boutiques, offering an indulgent shopping experience for
              discerning individuals. The upper levels house a collection of
              fine dining restaurants, where culinary masterpieces are created
              by world-renowned chefs.
            </p>
          </div>
        </div>
        <div className=" grid lg:grid-cols-3 gap-5 px-20 py-14 mb-6">
          <div className='bg-[url("/img1.jpg")] bg-center h-96 w-50 bg-no-repeat rounded-3xl'>
            <div className="mt-56 text-left bg-slate-50 py-0 px-4 mx-1 rounded-2xl">
              <h3 className="uppercase text-sm px-1 text-sky-400 cursor-pointer pt-2">
                Italy
              </h3>
              <h2 className="uppercase text-2xl cursor-pointer font-bold text-[#223645]">
                san miguel
              </h2>
              <p className="pt-2 pb-2 text-gray-500 ">
                A captivating blend of rich history, breathtaking landscapes,
                exquisite cuisine, and artistic masterpieces
              </p>
            </div>
          </div>
          <div className='bg-[url("/img2.jpg")] bg-center h-96 w-50 bg-no-repeat rounded-3xl'>
            <div className="mt-56 text-left bg-slate-50 py-0 px-4 mx-1 rounded-2xl">
              <h3 className="uppercase text-sm px-1 text-sky-400 cursor-pointer pt-2">
                Dubai
              </h3>
              <h2 className="uppercase text-2xl cursor-pointer font-bold text-[#223645]">
                Burj Khalfia
              </h2>
              <p className="pt-2 pb-2 text-gray-500 ">
                A captivating blend of rich history, breathtaking landscapes,
                exquisite cuisine, and artistic masterpieces
              </p>
            </div>
          </div>
          <div className='bg-[url("/img3.jpg")] bg-center h-96 w-50 bg-no-repeat rounded-3xl'>
            <div className="mt-56 text-left bg-slate-50 py-0 px-4 mx-1 rounded-2xl">
              <h3 className="uppercase text-sm px-1 text-sky-400 cursor-pointer pt-2">
                Japan
              </h3>
              <h2 className="uppercase text-2xl cursor-pointer font-bold text-[#223645]">
                Kyoto Temple
              </h2>
              <p className="pt-2 pb-2 text-gray-500 ">
                A captivating blend of rich history, breathtaking landscapes,
                exquisite cuisine, and artistic masterpieces
              </p>
            </div>
          </div>
        </div>

        {/* spritual destination */}
        <div className="mb-20">
          <div className="relative bg-cover bg-center pb-10 bg-[url('/spritual.jpeg')] w-full pt-40 h-96">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative text-white text-center pt-8">
              <h1 className=" text-center text-6xl">Spritual Destination</h1>
            </div>
          </div>

          {/* spritual sec start */}
          <div className="grid lg:grid-cols-3 gap-5 m-16 md:grid-cols-2">
            <div className="relative bg-cover bg-center pb-10 bg-[url('/sip1.jpeg')] w-96 pt-40 rounded-xl h-full">
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
              <div className="relative text-white text-center pt-8">
                <h2 className="text-4xl font-bold mb-4">Varanasi</h2>
                <p className="text-lg text-gray-300">
                  One of the oldest living inhabitations of the world, the
                  sacred city of Varanasi or Benaras, nestled on the banks of
                  the holy Ganges river, has been attracting pilgrims for
                  centuries.
                </p>
                <button className="bg-sky-500 py-4 px-8 rounded-full mt-2 hover:bg-sky-700">
                  Learn more
                </button>
              </div>
            </div>
            <div className="relative bg-cover bg-center pb-10 bg-[url('/sip2.jpeg')] w-96 pt-40 rounded-xl h-full">
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
              <div className="relative text-white text-center pt-8">
                <h2 className="text-4xl font-bold mb-4">Tirupati</h2>
                <p className="text-lg text-gray-300">
                  Among the most popular global pilgrimage places, Tirupati, in
                  Andhra Pradesh, is a stopover for those seeking spirituality
                  and sanctity. Situated at the foot of Tirumala Hills,
                </p>
                <button className="bg-sky-500 py-4 px-8 rounded-full mt-2 hover:bg-sky-700">
                  Learn more
                </button>
              </div>
            </div>
            <div className="relative bg-cover bg-center pb-10 bg-[url('/sip3.jpeg')] w-96 pt-40 rounded-xl h-full">
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
              <div className="relative text-white text-center pt-8">
                <h2 className="text-4xl font-bold mb-4">Haridwar</h2>
                <p className="text-lg text-gray-300">
                  Bustling with devotees, its air filled with the sweet smell of
                  incense sticks and clanging of temple bells, the city of
                  Haridwar at the foothills of the Himalayas, is one of Hinduism
                  holiest destinations.
                </p>
                <button className="bg-sky-500 py-4 px-8 rounded-full mt-2 hover:bg-sky-700">
                  Learn more
                </button>
              </div>
            </div>
            <div className="relative bg-cover bg-center pb-10 bg-[url('/sip4.jpeg')] w-96 pt-40 rounded-xl h-full">
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
              <div className="relative text-white text-center pt-8">
                <h2 className="text-4xl font-bold mb-4">Rishikesh</h2>
                <p className="text-lg text-gray-300">
                  Explore Rishikesh city and its best places to visit Nestled in
                  the Himalayan foothills, Rishikesh is one of the most sacred
                  cities in northern India. Located in the state of Uttarakhand,
                  Rishikesh is the hub of sages
                </p>
                <button className="bg-sky-500 py-4 px-8 rounded-full mt-2 hover:bg-sky-700">
                  Learn more
                </button>
              </div>
            </div>
            <div className="relative bg-cover bg-center pb-10 bg-[url('/sip5.jpeg')] w-96 pt-40 rounded-xl h-full">
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
              <div className="relative text-white text-center pt-8">
                <h2 className="text-4xl font-bold mb-4">Kedarnath</h2>
                <p className="text-lg text-gray-300">
                  Ensconced in the snow-capped Garhwal Himalayas, surrounded by
                  a lush cover of alpine meadows and brushed by the pristine and
                  holy Mandakini river
                </p>
                <button className="bg-sky-500 py-4 px-8 rounded-full mt-2 hover:bg-sky-700">
                  Learn more
                </button>
              </div>
            </div>
            <div className="relative bg-cover bg-center pb-10 bg-[url('/sip7.jpeg')] w-96 pt-40 rounded-xl h-full">
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
              <div className="relative text-white text-center pt-8">
                <h2 className="text-4xl font-bold mb-4">Badrinath</h2>
                <p className="text-lg text-gray-300">
                  A perfect blend of divinity and serenity, the picturesque town
                  of Badrinath in Uttarakhand's Chamoli district, prides itself
                  as one of the most visited tourist destinations of India
                </p>
                <button className="bg-sky-500 py-4 px-8 rounded-full mt-2 hover:bg-sky-700">
                  Learn more
                </button>
              </div>
            </div>
            <div className="relative bg-cover bg-center pb-10 bg-[url('/sip6.jpeg')] w-96 pt-40 rounded-xl h-full">
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
              <div className="relative text-white text-center pt-8">
                <h2 className="text-4xl font-bold mb-4">Amritsar</h2>
                <p className="text-lg text-gray-300">
                  A bustling city with an indomitable spirit, Amritsar holds one
                  of the holiest of Sikh ethos at its heart - the Golden Temple.
                  Covered in 400 kg of gold and surrounded by a serene sarovar
                  (pond)
                </p>
                <button className="bg-sky-500 py-4 px-8 rounded-full mt-2 hover:bg-sky-700">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
