import Link from 'next/link'
import React from 'react'
import Testimonial from '../Testimonial/Testimonial'
import Image from 'next/image'
import { CiPlay1 } from "react-icons/ci";

const AboutBody = () => {
  return (
    <>
    <section className="flex  flex-wrap lg:flex-nowrap items-center justify-between max-w-[1200px] mx-auto py-20 px-14">
        {/* Left Images Section */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2 overflow-hidden">
          {/* Image 1 */}
          <div className="relative w-full h-[250px]">
            <Image
              src="/aboutus.png" // Replace with actual image
              alt="Food 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Image 2 */}
          <div className="relative w-full h-[250px] ">
            <Image
              src="/about3.png" // Replace with actual image
              alt="Food 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Image 3 */}
          <div className="relative col-span-2 w-full h-[250px]">
            <Image
              src="/about4.png" // Replace with actual image
              alt="Food 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
          {/* Heading */}
          <h3 className="text-[#FF9F0D] Headdesign text-2xl font-semibold">
            About us ____
          </h3>
          <h1 className="text-black Headings text-3xl md:text-5xl font-bold mt-4">
            Food is an important part Of a balanced Diet
          </h1>
          <p className="text-black text-sm md:text-base mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
            velit in consequat.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            {/* Show More Button */}
            <button className="bg-[#FF9F0D] text-white py-2 px-6 rounded-lg text-sm md:text-base font-semibold hover:bg-[#e58907]">
              Show more
            </button>
            {/* Watch Video Button */}
            <button className="flex items-center gap-2 text-[#FF9F0D] font-semibold">
              <span className="p-2 bg-[#FF9F0D] text-xl font-bold text-white rounded-full">
              <CiPlay1 />
              </span>
              Watch video
            </button>
          </div>
        </div>
      </section>

      <section className="px-5">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-[35px] md:text-[50px] font-bold text-black whitespace-nowrap md:whitespace-normal mt-1">
            Why Choose Us
          </h2>
          <p className="max-w-[500px] text-black mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            aliquid tenetur commodi obcaecati minima rem
          </p>
        </div>

        <div className="w-full mx-auto">
          <Image
            src={"/whychoose.png"}
            width={1000}
            height={1000}
            alt="Bg"
            className="mx-auto mt-10"
          />
        </div>
      </section>


      <section className="my-20">
        <div className="max-w-[1320px] mx-auto text-black">
          <div className="flex justify-between md:flex-row gap-7 flex-col items-center px-24">

            <div className="w-[360px]  flex justify-center items-center flex-col">
              <Image src={"/Student.png"} alt="coffee" width={70} height={70}/>
              <h2 className="font-bold text-[#333333]">120 Items food</h2>
              <p className="text-center text-[#4F4F4F]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore perspiciatis accusantium in quaerat</p>
            </div>

            <div className="w-[360px]  flex justify-center items-center flex-col">
              <Image src={"/Coffee.png"} alt="coffee" width={70} height={70}/>
              <h2 className="font-bold text-[#333333]">120 Items food</h2>
              <p className="text-center text-[#4F4F4F]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore perspiciatis accusantium in quaerat</p>
            </div>

            <div className="w-[360px]  flex justify-center items-center flex-col">
              <Image src={"/Person.png"} alt="coffee" width={70} height={70}/>
              <h2 className="font-bold text-[#333333]">120 Items food</h2>
              <p className="text-center text-[#4F4F4F]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore perspiciatis accusantium in quaerat</p>
            </div>

          </div>
        </div>
      </section>




      <section className=" px-4 md:px-[135px] max-w-[1320px] mx-auto py-[50px]">
        {/* Heading Section */}

        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-[35px] md:text-[50px] font-bold text-black whitespace-nowrap md:whitespace-normal mt-1">
            Team Member
          </h2>
          <p className="max-w-[500px] text-black mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            aliquid tenetur commodi obcaecati minima rem
          </p>
        </div>

        {/* <Image src={"/Bg.png"} width={1000} height={500} alt="bg image"/> */}

        {/* Images Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-[50px] justify-items-center ">
          {/* Chef 1 */}
          <div className="flex flex-col items-center shadow cursor-pointer transition-transform hover:scale-[1.05]  w-[200px] sm:w-[250px] lg:max-w-[312px] md:max-h-[398px]  ">
            <Image
              src={"/cheef5.png"}
              alt="Chef 1"
              className=" md:h-[310px] object-cover rounded-lg "
              height={1000}
              width={1000}
            />

            <div className="py-2 text-black flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold Headings">Mark Henry</h1>
              <p className="text-[#828282] text-base Headings font-[400]">
                Owner
              </p>
            </div>
          </div>

          {/* Chef 2 */}
          <div className="flex flex-col items-center shadow cursor-pointer transition-transform hover:scale-[1.05]  w-[200px] sm:w-[250px] md:max-w-[312px] md:max-h-[398px]  ">
            <Image
              src={"/cheef5.png"}
              alt="Chef 1"
              className=" md:h-[310px] sm:w-[312px] object-cover rounded-lg "
              height={1000}
              width={1000}
            />

            <div className="py-2 text-black flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold Headings">Mark Henry</h1>
              <p className="text-[#828282] text-base Headings font-[400]">
                Owner
              </p>
            </div>
          </div>

          {/* Chef 3 */}
          <div className="flex flex-col items-center shadow cursor-pointer transition-transform hover:scale-[1.05]  w-[200px] sm:w-[250px] md:max-w-[312px] md:max-h-[398px]  ">
            <Image
              src={"/cheef5.png"}
              alt="Chef 1"
              className=" md:h-[310px] sm:w-[312px] object-cover rounded-lg "
              height={1000}
              width={1000}
            />

            <div className="py-2 text-black flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold Headings">Mark Henry</h1>
              <p className="text-[#828282] text-base Headings font-[400]">
                Owner
              </p>
            </div>
          </div>

          {/* Chef 4 */}
          <div className="flex flex-col items-center shadow cursor-pointer transition-transform hover:scale-[1.05]  w-[200px] sm:w-[250px] md:max-w-[312px] md:max-h-[398px]  ">
            <Image
              src={"/cheef5.png"}
              alt="Chef 1"
              className=" md:h-[310px] sm:w-[312px] object-cover rounded-lg "
              height={1000}
              width={1000}
            />

            <div className="py-2 text-black flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold Headings">Mark Henry</h1>
              <p className="text-[#828282] text-base Headings font-[400]">
                Owner
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial */}

      <Testimonial />

      {/* Menu Section */}

      <div className="container mx-auto pb-40 px-4 text-[#333333]">
        <div className="space-y-4 w-fit mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold Headings">
            <span className="text-[#ff9f0d]">Fr</span>om Our Menu
          </h2>
          <p className="text-[#4F4F4F] Headdesign text-center max-w-[450px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            dolorem sapiente, tempore nemo sed incidunt et sit{" "}
          </p>
          <div className="w-fit mx-auto">
            <div className="bg-accent h-[5px] w-[70px] mt-10"></div>
          </div>
        </div>

        <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 w-fit  mx-auto">
          <li className=" text-[#ff9f0d] p-1">Breakfast</li>
          <li id="icon" className="hover:cursor-pointer">
            Dinner
          </li>
          <li id="icon" className="hover:cursor-pointer">
            Desert
          </li>
          <li id="icon" className="hover:cursor-pointer">
            Drinks
          </li>
          <li id="icon" className="hover:cursor-pointer">
            Snack
          </li>
          <li id="icon" className="hover:cursor-pointer">
            Soup
          </li>
        </ul>

        <div className="max-w-[1320px] mx-auto min-h-[523px] mt-2 pt-6 border-t-[1px] border-gray-300">
          <div className="grid lg:grid-cols-2 grid-cols-1 ">
            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="text-[#ff9f0d] transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="font-bold md:text-2xl text-xl text-[#FF9F0D]">
                32$
              </div>
            </div>

            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="hover:text-[#ff9f0d] transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="font-bold md:text-2xl text-xl text-[#FF9F0D]">
                32$
              </div>
            </div>

            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="hover:text-[#ff9f0d] transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="font-bold md:text-2xl text-xl text-[#FF9F0D]">
                32$
              </div>
            </div>

            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="hover:text-[#ff9f0d] transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="font-bold md:text-2xl text-xl text-[#FF9F0D]">
                32$
              </div>
            </div>

            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="hover:text-[#ff9f0d] transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="font-bold md:text-2xl text-xl text-[#FF9F0D]">
                32$
              </div>
            </div>

            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="hover:text-[#ff9f0d] transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="font-bold md:text-2xl text-xl text-[#FF9F0D]">
                32$
              </div>
            </div>

            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="hover:text-text transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="font-bold md:text-2xl text-xl text-[#FF9F0D]">
                32$
              </div>
            </div>

            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="hover:text-[#ff9f0d] transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="font-bold md:text-2xl text-xl text-[#FF9F0D]">
                32$
              </div>
            </div>
          </div>
          {/* Button Section */}
      <div className="flex justify-center mt-[32px]">
        <button className="bg-transparent border-2 border-orange-400 text-[#FF9f0d] w-[140px] h-[30px] md:w-[190px] md:h-[60px] hover:bg-[#FF9F0D] hover:text-black transition duration-300">
        <Link href="/menu">View Menu</Link>
        </button>
      </div>
        </div>
      </div>
    </>
  )
}

export default AboutBody