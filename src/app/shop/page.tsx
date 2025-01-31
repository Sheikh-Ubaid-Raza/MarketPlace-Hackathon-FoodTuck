"use client";

import ShopHero from '@/components/MainHero/ShopHero'


import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { IoSearch } from "react-icons/io5";
import { urlFor } from "@/sanity/lib/image";
import Navbar from '@/components/Navbar/Navbar';

type Product = {
  name: string;
  price: number;
  slug: string;
  category: string;
  image: string;
  originalPrice: number;
};


const ShopPage = () => {

  const [dataAll, setDataAll] = useState<Product[]>([]); // State for all products
    const [filteredData, setFilteredData] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const query = `*[_type == "food"]{
    _id,
    name,
    category,
    price,
    originalPrice,
    tags,
    description,
    image,
    "slug":slug.current,
    available,
  }`;
  
          const data = await client.fetch(query);
          setDataAll(data);
          setFilteredData(data);
        } catch (error) {
          setError("Items Not Found ❗");
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData(); // Call the fetch function
    }, []);
  
const filterData = useCallback(() => {
  let filteredData = dataAll;

  // Apply search filter
  if (searchQuery) {
    filteredData = filteredData.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply category filter
  if (selectedCategories.length > 0) {
    filteredData = filteredData.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }

  setFilteredData(filteredData);
}, [searchQuery, selectedCategories, dataAll]);

useEffect(() => {
  filterData();
}, [filterData]); 


    const handleCategoryChange = (category: string) => {
      if (selectedCategories.includes(category)) {
        setSelectedCategories(
          selectedCategories.filter((cat) => cat !== category)
        );
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
    };

  return (
    <div>
        <Navbar />
        <ShopHero />

        <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black border-solid"></div>
        </div>
      ) : error ? (
        <div className="text-5xl text-red-500 h-64 flex justify-center items-center">
          <h2>Opps Items Not Found❗</h2>
        </div>
      ) : (
        <div className="sm:py-16 py-8 md:px-10 px-6 max-w-[1320px] flex lg:flex-row flex-col-reverse gap-4 mx-auto sm:mt-10 mt-5">
          <div className="max-w-[872px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredData.length === 0 ? (
                <div className="text-center text-4xl text-black ">
                  Product Not Found
                </div>
              ) : (
                filteredData.map((value, id: number) => (
                  <div key={id}>
                    <div>
                      <Link href={`/shop/${value.slug}`}>
                        <div className="flex-1 max-w-[312px] max-h-[267px] overflow-hidden ">
                          <Image
                            src={urlFor(value.image).url()}
                            alt={value.name}
                            layout="responsive"
                            width={2000}
                            height={2000}
                            loading='lazy'
                            className="w-full h-full object-cover hover:scale-110 transition duration-300"
                          />
                        </div>
                      </Link>
                      <div className="p-4">
                        <h3 className="text-gray-800 font-bold text-lg">
                          {value.name}
                        </h3>
                        <div className="flex gap-2">
                          <p className="text-[#ff9f0d]">${value.price}.00</p>
                          <p className="text-gray-600 line-through">
                            ${value.originalPrice}.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="lg:max-w-[312px] w-full border-gray-200 lg:border-[0.3px] lg:p-8 p-2">
            {/* Search Box */}

            <div className="flex lg:block flex-col items-center">
              <div className="flex border-gray-300 border-[0.3px]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Products"
                  className="w-full px-3 bg-[#fff5e7] text-[#333333] py-3 placeholder:text-gray-400 placeholder:text-base"
                />
                <div className="bg-[#ff9f0d] py-3 px-5">
                  <IoSearch className="" size={25} />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mt-5">
                <h2 className="text-[#333333] text-xl lg:text-start text-center font-semibold">
                  Category
                </h2>
                <div className="text-[#333333] lg:mt-5 mt-2 gap-x-2 lg:block grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 ">
                  {["Sandwich", "Burger", "Chicken ", "Drink", "Pizza"].map(
                    (category, index) => (
                      <div
                        className="flex items-center gap-2 lg:py-2 py-1"
                        key={index}
                      >
                        <input
                          id={category}
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                        />
                        <label htmlFor={category}>{category}</label>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="mt-5 lg:block hidden">
              <h1 className="text-[#333333] text-xl Headings mb-4">
                Latest Products
              </h1>

              <div className="flex gap-3 py-2 items-center ">
                <div className="w-[80px]">
                  <Image
                    src={"/cart1.png"}
                    alt=""
                    height={1000}
                    width={1000}
                    className=""
                  />
                </div>
                <div className="py-2">
                  <h2 className="text-gray-600 text-base">Burger</h2>
                  <div className="flex text-yellow-400 items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                  </div>
                  <div className="text-gray-500 text-sm">323$</div>
                </div>
              </div>

              <div className="flex gap-3 py-2 items-center ">
                <div className="w-[80px]">
                  <Image
                    src={"/about4.png"}
                    alt=""
                    height={1000}
                    width={1000}
                    className=""
                  />
                </div>
                <div className="py-2">
                  <h2 className="text-gray-600 text-base">Pizza</h2>
                  <div className="flex text-yellow-400 items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                  </div>
                  <div className="text-gray-500 text-sm">323$</div>
                </div>
              </div>

              <div className="flex gap-3 py-2 items-center ">
                <div className="w-[80px]">
                  <Image
                    src={"/about3.png"}
                    alt=""
                    height={1000}
                    width={1000}
                    className=""
                  />
                </div>
                <div className="py-2">
                  <h2 className="text-gray-600 text-base">Burger</h2>
                  <div className="flex text-yellow-400 items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                  </div>
                  <div className="text-gray-500 text-sm">323$</div>
                </div>
              </div>

              <div className="flex gap-3 py-2 items-center ">
                <div className="w-[80px]">
                  <Image
                    src={"/cart4.png"}
                    alt=""
                    height={1000}
                    width={1000}
                    className=""
                  />
                </div>
                <div className="py-2">
                  <h2 className="text-gray-600 text-base">Burger</h2>
                  <div className="flex text-yellow-400 items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                  </div>
                  <div className="text-gray-500 text-sm">323$</div>
                </div>
              </div>
            </div>

            <div className="mt-5 lg:block hidden">
              <h1 className="text-[#333333] text-xl Headings mb-4">
                Product Tags
              </h1>

              <div className="flex justify-evenly text-gray-500 transition duration-150">
                <p className="text-lg border-b-2 border-gray-100 transition cursor-pointer duration-200 hover:text-[#ff9f0d] hover:border-[#ff9f0d]">
                  Services
                </p>
                <p className="text-lg border-b-2 border-gray-100 transition cursor-pointer duration-200 hover:text-[#ff9f0d] hover:border-[#ff9f0d]">
                  Our Menu
                </p>
                <p className="text-lg border-b-2 border-gray-100 transition cursor-pointer duration-200 hover:text-[#ff9f0d] hover:border-[#ff9f0d]">
                  Pizza
                </p>
              </div>

              <div className="flex justify-evenly py-2 text-gray-500 transition duration-150">
                <p className="text-lg border-b-2 border-gray-100 transition cursor-pointer duration-200 hover:text-[#ff9f0d] hover:border-[#ff9f0d]">
                  Burger
                </p>
                <p className="text-lg border-b-2 border-gray-100 transition cursor-pointer duration-200 hover:text-[#ff9f0d] hover:border-[#ff9f0d]">
                  Cookies
                </p>
                <p className="text-lg border-b-2 border-gray-100 transition cursor-pointer duration-200 hover:text-[#ff9f0d] hover:border-[#ff9f0d]">
                  Our Shop
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
        
    </div>
  )
}

export default ShopPage