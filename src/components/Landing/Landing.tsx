"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 w-full">
      {/* Logo */}
      <div className="text-2xl font-bold flex justify-center items-center">
        <span className="text-[#FF9F0D]">Food</span>tuck
      </div>

      <section className="flex items-center justify-between px-4 md:px-[135px]">
        {/* Hamburger Icon for Mobile */}
        <div
          className="text-[#FF9F0D] md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
        </div>

        {/* Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex items-center space-y-4 md:space-y-0 md:space-x-6 text-sm transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-[#FF9F0D] cursor-pointer px-4 md:px-0"
              onClick={() => setMenuOpen(false)} // Close the menu on click
            >
              {item}
             
            </li>
          ))}
        </ul>

        {/* Search Box and Cart Icon */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-black border border-[#FF9F0D] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-500"
            />
            <span className="absolute top-2.5 right-3">
              <CiSearch />
            </span>
          </div>
          <IoBagHandle className="w-[24px] h-[24px]" />
        </div>
      </section>

      {/* Hero Section */}
      <div className="w-full h-auto mt-16 md:mt-[45px]">
        <section className="bg-black text-white px-8 py-16 flex flex-col md:flex-row items-center">

          {/* Left Side - Text */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <p className="text-[#FF9F0D] font-great-vibes text-4xl font-normal leading-10 decoration-none decoration-position-from-font">
              Its Quick & Amusing!
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="text-[#FF9F0D]">Th</span>e Art of Speed <br /> Food Quality
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
              pharetra dictum neque massa congue.
            </p>
            <button className="w-[190px] h-[60px] rounded-[30px] bg-[#FF9F0D]">
              See Menu
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
            <Image
            width={300}
            height={300}
              src="/Hero-Image.png"
              alt="Food"
              className="w-full max-w-md object-cover"
            />
          </div>

        </section>
      </div>
    </nav>
  );
}
