import Image from "next/image";
import { IoLogoGithub, IoSearch } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Blogs = [
  {
    id: 1,
    title: "10 Reasons To Do A Digital Detox Challenge",
    img: "/blog1.png",
  },
  {
    id: 2,
    title: "Traditional Soft Pretzels with Sweet Beer Cheese",
    img: "/blog2.png",
  },
  {
    id: 3,
    title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
    img: "/blog3.png",
  },
  {
    id: 4,
    title: "My Favorite Easy Black Pizza Toast Recipe",
    img: "/blog4.png",
  },
];

const Blog = () => {
  return (
    <div className="max-w-[1320px] mx-auto flex gap-4 py-20 lg:px-10 md:px-24 sm:px-14 px-8 ">
      <div className="max-w-[872px] mx-auto">
        {Blogs.map((blog) => (
          <div key={blog.id}>
            <div className="w-full max-h-[520px] overflow-hidden">
              <Image
                src={blog.img}
                width={2000}
                alt={blog.title}
                height={2000}
              />
            </div>
            <h2 className="Headings lg:text-start text-center text-[#333333] text-2xl py-5 border-b-[0.3px] border-gray-300">
              {blog.title}
            </h2>
            <p className=" lg:text-start lg:w-[75%] text-center text-[#4F4F4F] text-base py-5 ">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat
            </p>

            <div className=" mb-12 mt-3 flex lg:justify-start justify-center  ">
              <Link
                className="border-[#FF9F0D] hover:bg-[#ff9f0d] hover:text-white ease duration-100 border-2 text-[#ff9f0d] py-3 px-9"
                href={""}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-[424px] lg:block hidden">
        <div className="flex border-gray-300 border-[0.3px]">
          <input
            type="text"
            placeholder="Search Your Keyword"
            className=" w-full px-3  py-3 placeholder:text-gray-500 placeholder:text-sm"
          />
          <div className="py-3 px-5 bg-[#FF9F0D]">
            <IoSearch className="cursor-pointer text-white" />
          </div>
        </div>

        <div className="border-gray-300 border-[0.3px] mt-5 py-8 px-12">
          <div className="flex justify-center items-center flex-col">
            <div className="max-w-[115px]">
              <Image
                src={"/blogProfile.png"}
                alt="profile"
                height={1000}
                width={1000}
                className="rounded-full"
              />
            </div>
            <h2 className="text-2xl font-bold  mb-4 mt-7 text-[#333333]">
              Prince Miyako
            </h2>
            <p className="text-[#828282] text-base">Blogger/Photographer</p>
            <div className="flex items-center gap-2 text-yellow-500">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
              </div>
              <span className="text-gray-400">
                {"(1"} Reviews{")"}
              </span>
            </div>
            <p className="text-[#828282] text-base text-center mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium id iusto provident fuga, vero esse rem
            </p>
            <div className="text-black flex gap-4 mt-4">
              <FaFacebookF size={22} />
              <FaTwitter size={22} />
              <FaInstagram size={22} />
              <FaLinkedinIn size={22} />
            </div>
          </div>
        </div>

        <div className="border-gray-300 border-[0.3px] mt-5 py-8 px-12">
          <h1 className='text-2xl font-bold  mb-4  text-[#333333]'>Recent Post</h1>

          <div className="flex gap-2 py-4 border-b-[0.3px] border-gray-300">
            <div className="w-[100px]">
              <Image
                src={"/cart1.png"}
                alt=""
                height={2000}
                width={2000}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-[#828282] text-sm">June 22, 2020</h2>
              <p className="text-[#4F4F4F] text-base mt-2">
                Lorem ipsum dolor sit cing elit, sed do.
              </p>
            </div>
          </div>

          <div className="flex gap-2 py-4 border-b-[0.3px] border-gray-300">
            <div className="w-[100px]">
              <Image
                src={"/cart2.png"}
                alt=""
                height={2000}
                width={2000}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-[#828282] text-sm">June 22, 2020</h2>
              <p className="text-[#4F4F4F] text-base mt-2">
                Lorem ipsum dolor sit cing elit, sed do.
              </p>
            </div>
          </div>

          <div className="flex gap-2 py-4 border-b-[0.3px] border-gray-300">
            <div className="w-[100px]">
              <Image
                src={"/cart3.png"}
                alt=""
                height={2000}
                width={2000}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-[#828282] text-sm">June 22, 2020</h2>
              <p className="text-[#4F4F4F] text-base mt-2">
                Lorem ipsum dolor sit cing elit, sed do.
              </p>
            </div>
          </div>

          <div className="flex gap-2 py-4 border-b-[0.3px] border-gray-300">
            <div className="w-[100px]">
              <Image
                src={"/cart4.png"}
                alt=""
                height={2000}
                width={2000}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-[#828282] text-sm">June 22, 2020</h2>
              <p className="text-[#4F4F4F] text-base mt-2">
                Lorem ipsum dolor sit cing elit, sed do.
              </p>
            </div>
          </div>
        </div>

        <div className="border-gray-300 border-[0.3px] mt-5 py-8 px-12">
          <h1 className='text-2xl font-bold  mb-4 text-[#333333]'>
            Filter By Menu
          </h1>

          <div className="flex items-center justify-between gap-2 py-2">
            <div className="flex items-center gap-3">
              <div className="w-[80px]">
                <Image
                  src={"/fbm1.png"}
                  alt=""
                  height={2000}
                  width={2000}
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="text-[#333333] Headings text-base">Chiken Fry</p>
              </div>
            </div>
            <div className="text-[#333333]">26</div>
          </div>

          <div className="flex items-center justify-between gap-2 py-2">
            <div className="flex items-center gap-3">
              <div className="w-[80px]">
                <Image
                  src={"/fbm2.png"}
                  alt=""
                  height={2000}
                  width={2000}
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="text-[#333333] Headings text-base">
                  Burger Foods
                </p>
              </div>
            </div>
            <div className="text-[#333333]">46</div>
          </div>

          <div className="flex items-center justify-between gap-2 py-2">
            <div className="flex items-center gap-3">
              <div className="w-[80px]">
                <Image
                  src={"/fbm3.png"}
                  alt=""
                  height={2000}
                  width={2000}
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="text-[#333333] Headings text-base">pizza</p>
              </div>
            </div>
            <div className="text-[#333333]">16</div>
          </div>

          <div className="flex items-center justify-between gap-2 py-2">
            <div className="flex items-center gap-3">
              <div className="w-[80px]">
                <Image
                  src={"/fbm4.png"}
                  alt=""
                  height={2000}
                  width={2000}
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="text-[#333333] Headings text-base">
                  Fresh Fruits
                </p>
              </div>
            </div>
            <div className="text-[#333333]">36</div>
          </div>

          <div className="flex items-center justify-between gap-2 py-2">
            <div className="flex items-center gap-3">
              <div className="w-[80px]">
                <Image
                  src={"/fbm5.png"}
                  alt=""
                  height={2000}
                  width={2000}
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="text-[#333333] Headings text-base">Vegetables</p>
              </div>
            </div>
            <div className="text-[#333333]">16</div>
          </div>
        </div>
        <div className="border-[1px] border-gray-400 mt-10 px-6 py-4 max-w-[400px] mx-auto">
        <h1 className='text-2xl font-bold  mb-4 text-[#333333]'>Popular Tags</h1>
           <div className='flex flex-wrap gap-3 text-[#333333]'>
           
           <h1 className='border border-gray-400 py-2 px-[13px] hover:text-[#ff9f0d]'>Resturant</h1>
            <h1 className='border border-gray-400 py-2 px-[13px] hover:text-[#ff9f0d]'>Sandwitch</h1>
            <h1 className='border border-gray-400 py-2 px-[13px] hover:text-[#ff9f0d]'>Tikka</h1>
            <h1 className='border border-gray-400 py-2 px-[13px] hover:text-[#ff9f0d]'>Bbq</h1>
            <h1 className='border border-gray-400 py-2 px-[13px] hover:text-[#ff9f0d]'>Pizza</h1>
            <h1 className='border border-gray-400 py-2 px-[13px] hover:text-[#ff9f0d]'>Health</h1>
            <h1 className='border border-gray-400 py-2 px-[13px] hover:text-[#ff9f0d]'>FastFood</h1>
            <h1 className='border border-gray-400 py-2 px-[13px] hover:text-[#ff9f0d]'>Food</h1>
            <h1 className='border border-gray-400 py-2 px-[13px] hover:text-[#ff9f0d]'>Chicken Shawrma</h1>
            <h1 className='border border-gray-400 py-2 px-[13px] hover:text-[#ff9f0d]'>Burger</h1>
            <h1 className='border border-gray-400 py-2 px-[13px] hover:text-[#ff9f0d]'>Chicken</h1>
           </div>
        </div>     
        <div className="border-[1px] border-gray-400 mt-10 px-[22px] py-4 max-w-[400px] mx-auto">
         <h1 className='text-2xl font-bold  mb-4 text-[#333333]'>Photo Gallery</h1>   
        <div className='flex gap-1 flex-wrap'>
        
        <Image
      src="/fbm5.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <Image
      src="/fbm3.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <Image
      src="/fbm1.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <Image
      src="/fbm2.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <Image
      src="/fbm4.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <Image
      src="/cart3.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
        </div>
        </div>
        <div className="border-[1px] border-gray-400 mt-10 px-[22px] py-4 max-w-[400px] mx-auto">
        <h1 className='text-2xl font-bold  mb-4 text-[#333333]'>Follow us</h1>
        <div className='flex gap-4 justify-center text-xl text-blackkk mt-1 text-[#333333]'>
                <a href="https://www.linkedin.com/in/ubaid-raza-8764332b9?trk=contact-info"> <FaLinkedin /></a>
                <a href="https://github.com/Sheikh-Ubaid-Raza/"><IoLogoGithub /></a>
                <a href="https://www.instagram.com/accounts/login/?next=%2Fsheikhubaid.raza%2F&source=omni_redirect">< FaInstagram/></a>
                <a href="https://www.facebook.com/profile.php?id=100084381450122"><FaFacebook /></a>
                <a href="https://www.youtube.com/@SheikhUbaidRaza"><FaYoutube /></a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blog;