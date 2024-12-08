import React from 'react'
import Image from 'next/image'

const FoodCategory = () => {
  // Items array containing food details
  const items = [
    { id: 1, img: "/fc1.png", label: "Save 50% on Fast Food" },
    { id: 2, img: "/fc2.png", label: "Delicious Burgers" },
    { id: 3, img: "/fc3.png", label: "Healthy Salads" },
    { id: 4, img: "/fc4.png", label: "Desserts" },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes">
          Food Category
        </h1>
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 mt-5">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Item
        </h2>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative">
              {/* Image of the food item */}
              <Image
                src={item.img}
                alt={item.label}
                width={500}
                height={500}
                className="object-cover rounded-lg w-full h-full"
              />
              {/* Label or Description for the food item */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-xl font-semibold p-4 rounded-b-lg">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoodCategory
