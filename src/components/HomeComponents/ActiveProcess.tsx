import Image from 'next/image';
import React from 'react';
import img from "../../../public/idk.png";
import Link from 'next/link';

const ActiveProcess = () => {
  return (
    <div className="relative bg-black">
      <div className="relative">
        <Image src={img} alt="background image" className="w-full object-cover"/>
      </div>
      <div className="absolute top-0 left-0 flex flex-col justify-end items-end text-end w-full py-[20px] md:py-[30px] px-[20px] md:px-[60px] lg:px-[130px] text-white">
        <h1 className="md:text-[32px] text-[21px] font-normal text-[#FF9F0D] font-greatVibes">
          Restaurant Active Process
        </h1>
        <h1 className="font-helvetica font-bold text-[20px] md:text-[28px] lg:text-[40px] leading-[25px] md:leading-[38px] lg:leading-[45px] md:w-[500px] lg:w-[700px]">
          <span className="text-[#FF9F0D]">We</span> Document Every Food
          Bean Process until it is saved
        </h1>
        <p className="font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] lg:leading-6 mt-4 md:w-[400px] lg:w-[600px] lg:block hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        {/* Buttons */}
        <div className="flex  md:flex-row justify-center mt-1 md:mt-8 space-y-4 md:space-y-0 md:space-x-6">
          <button className="bg-[#FF9F0D] lg:block hidden text-black font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] shadow-md hover:bg-[#FF9F0D] hover:text-black">
          <Link href={"/about"}> Read More </Link>
          </button>
          <button className="bg-transparent border  lg:block hidden border-[#FF9F0D] text-[#FF9F0D] font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] shadow-md hover:bg-[#FF9F0D] hover:text-black">
            Play Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveProcess;