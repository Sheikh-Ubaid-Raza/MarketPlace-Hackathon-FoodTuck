import Image from 'next/image';
import React from 'react';

// Sample data for the chefs
const chefs = [
  { name: 'Tahmina Rumi', src: '/cheef1.png' },
  { name: 'Jorina Begum', src: '/cheef2.png' },
  { name: 'M. Mohammad', src: '/cheef8.png' },
  { name: 'Munna Kathy', src: '/cheef4.png' },
  { name: 'Tahmina Rumi', src: '/cheef5.png' },
  { name: 'Bisnu Devgon', src: '/cheef6.png' },
  { name: 'Motin Molladsf', src: '/cheef7.png' },
  { name: 'William Rumi', src: '/cheef3.png' },
  { name: 'Kets William Roy', src: '/cheef9.png' },
  { name: 'Mahmud Khotli', src: '/cheef10.png' },
  { name: 'Ataur Rahman', src: '/cheef11.png' },
  { name: 'Monalisa Holly', src: '/cheef12.png' },
];

export default function ChefGallery() {
  return (
    <section className="w-full py-10 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Chefs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <Image
                src={chef.src}
                alt={chef.name}
                width={200}
                height={200}
                className="w-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{chef.name}</h3>
              <p className="text-gray-500">Chef</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
