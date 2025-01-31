import ChefHero from "@/components/MainHero/ChefHero";
import Navbar from "@/components/Navbar/Navbar";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

type Chefs = {
  name: string;
  position: string;
  image: string;
};

const getData = async () => {
  const query = `*[_type == "chef"]{
  name,
    position,
  "image": image.asset->url
}`;
  const chefs: Chefs[] = await client.fetch(query);
  return chefs;
};

const ChefGrid = async () => {
  const chefs = await getData();
  return (
    <>
    <Navbar />
    <ChefHero />
    <div className="py-20 px-10 max-w-[1320px] mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl 
              border-4 border-transparent"
          >
            {/* Chef Image */}
            <div className="flex-1">
              <Image
                src={chef.image}
                alt={chef.name}
                width={1000}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ChefGrid;
