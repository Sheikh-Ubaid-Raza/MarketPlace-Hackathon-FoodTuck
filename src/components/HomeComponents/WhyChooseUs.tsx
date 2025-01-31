import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse gap-10 lg:flex-nowrap items-center justify-between mx-auto py-20 px-10 bg-black">
      {/* Left Images Section */}
      <div className="grid grid-cols-2 gap-6 px-8 w-full lg:w-1/2">
        {/* Image 1 */}
        <div className="relative w-full h-[250px]">
          <Image
            src="/aboutus.png"
            fill
            style={{ objectFit: "cover" }}
            alt="About Us"
            className='rounded-lg'
          />
        </div>
        {/* Image 2 */}
        <div className="relative w-full h-[250px]">
          <Image
            src="/about3.png" // Replace with actual image
            alt="Food 2"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        {/* Image 3 */}
        <div className="relative col-span-2 w-full h-[250px]">
          <Image
            src="/about4.png" // Replace with actual image
            alt="Food 3"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
        {/* Heading */}
        <h3 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes">Why Choose us</h3>
        <h1 className="text-white lg:text-start text-center text-3xl md:text-4xl font-bold mt-4">
          <span className='text-[#ff9f0d]'>Ex</span>ta ordinary taste
          And Experienced
        </h1>
        <p className="text-gray-100 py-4 lg:text-start text-center text-sm md:text-base mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          vitae mus risus. Lacus nisi, et ac dapibus sit
        </p>


        <div className="flex lg:justify-start justify-center items-center gap-8 mt-6">

          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={"/Hamburger.png"} alt='burger' width={80} height={80} className='bg-[#FF9F0D] p-3 rounded' />
            <p className='text-lg text-white'>Fast Food</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={"/Cookie.png"} alt='burger' width={80} height={80} className='bg-[#FF9F0D] p-3 rounded' />
            <p className='text-lg text-white'>Lunch</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={"/Wine.png"} alt='burger' width={80} height={80} className='bg-[#FF9F0D] p-3 rounded' />
            <p className='text-lg text-white'>Dinner</p>
          </div>

        </div>

        <div className='flex lg:justify-start justify-center'>
          <div className='bg-white text-[#1E1E1E] mt-6 px-6 py-3 items-center rounded border-l-[10px] border-[#ff9f0d] justify-evenly lg:w-[374px] w-[250px] flex'>
            <h2 className='lg:text-5xl md:text-4xl text-3xl text-bold Headings text-[#FF9F0D]'>30+</h2>
            <div className=''>
              <p>Years of</p>
              <h3 className='text-bold Headings text-2xl'>Experience</h3>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default WhyChooseUs;