import React from 'react';
import Image from "next/image";

const menuItems = [
  { name: 'Lettuce Leaf', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu1.png' },
  { name: 'Fresh Breakfast', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/menu2.png' },
  { name: 'Mild Butter', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu3.png' },
  { name: 'Fresh Bread', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu4.png' },
  { name: 'Glow Cheese', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu5.png' },
  { name: 'Italian Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/menu6.png' },
  { name: 'Slice Beef', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu7.png' },
  { name: 'Mushroom Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu8.png' },
];

const HeroMenu = () => {
  return (
    <section className='bg-black px-8 sm:px-16 lg:px-[135px] text-white py-12'>
      <div className="container mx-auto">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes flex justify-center">
          Choose & Pic
        </h1>
        <h1 className="text-3xl font-bold text-center mb-8 mt-5"><span className="text-[#FF9F0D]">Fr</span>om Our Menu</h1>

        <div className="flex justify-center mb-8">
          <ul className="flex flex-wrap justify-evenly space-x-4 sm:space-x-4 gap-10">
            <li className="cursor-pointer hover:text-yellow-500">Breakfast</li>
            <li className="cursor-pointer hover:text-yellow-500">Lunch</li>
            <li className="cursor-pointer hover:text-yellow-500">Dinner</li>
            <li className="cursor-pointer hover:text-yellow-500">Dessert</li>
            <li className="cursor-pointer hover:text-yellow-500">Drink</li>
            <li className="cursor-pointer hover:text-yellow-500">Snack</li>
            <li className="cursor-pointer hover:text-yellow-500">Soups</li>
          </ul>
        </div>

        <div className='flex flex-col lg:flex-row mt-5'>
          {/* Left Section: Decorative Image */}
          <div className="hidden lg:block w-1/6 md:w-[30%]">
            <Image src="/main-menu.png" alt="Menu Decor" width={100} height={100} className="object-cover"/>
          </div>

          {/* Right Section: Menu Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 flex-grow">
            {menuItems.map((item, index) => (
              <div key={index} className="flex rounded-lg overflow-hidden shadow-lg border border-gray-700">
                <div className="w-1/3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 w-2/3">
                  <h1 className="text-lg font-semibold">{item.name}</h1>
                  <p className="text-sm text-gray-400 mb-1">{item.description}</p>
                  <h2 className="text-yellow-400 font-bold">{item.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMenu;
