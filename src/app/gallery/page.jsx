import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className='bg-[url("/cta_section.jpg")] bg-cover bg-center bg-no-repeat relative pt-32 '>
        <h2 className="text-center pb-28 text-white text-7xl uppercase">
          Gallery
        </h2>
      </div>

    
    {/* Gallery section start */}
      <div className="grid px-20 py-14 gap-5 grid-cols-3 mx-10 mt-24">
        <div>
          <Image src={"/img1.jpg"} height={900} width={500} className=" rounded-xl"/>
        </div>
        <div>
          <Image src={"/img2.jpg"} height={900} width={500} className=" rounded-xl brightness-75"/>
        </div>
        <div>
          <Image src={"/img3.jpg"} height={900} width={500} className=" rounded-xl"/>
        </div>
        <div>
          <Image src={"/img12.jpg"} height={900} width={500} className=" rounded-xl"/>
        </div>
        <div>
          <Image src={"/img11.jpg"} height={900} width={500} className=" rounded-xl"/>
        </div>
        <div>
          <Image src={"/img10.jpg"} height={900} width={500} className=" rounded-xl"/>
        </div>
      </div>
    </>
  );
};

export default page;
