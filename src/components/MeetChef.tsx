import React from "react";
import Image from "next/image";

function MeetChef() {
  return (
    <section className="bg-black md:px-[135px] py-[50px]">

      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center text-center mb-[50px]">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes">
          Chefs
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-[50px]">
        <Image 
          src="/chef1.jpeg" 
          alt="Chef 1" 
          width={300} 
          height={300} 
          className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer rounded-xl"
        />
        <Image 
          src="/chef2.jpeg" 
          alt="Chef 2" 
          width={300} 
          height={300} 
          className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer rounded-xl" 
        />
        <Image 
          src="/chef3.jpeg" 
          alt="Chef 3" 
          width={300} 
          height={300} 
          className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer rounded-xl" 
        />
        <Image 
          src="/chef4.jpeg" 
          alt="Chef 4" 
          width={300} 
          height={300} 
          className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer rounded-xl" 
        />
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-[32px]">
        <button className="bg-transparent border-2 border-orange-500 text-white w-[140px] h-[50px] md:w-[190px] md:h-[60px] rounded-[40px] hover:bg-[#FF9F0D] hover:text-black transition duration-300">
          See More
        </button>
      </div>
    </section>
  );
}

export default MeetChef;
