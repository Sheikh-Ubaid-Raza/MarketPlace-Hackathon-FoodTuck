import Image from "next/image";
import Link from "next/link";
import { CiShare2 } from "react-icons/ci";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";

const blog = [
  {
    id: 1,
    date: "10 February 2022",
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    img: "/blog1.png",
  },
  {
    id: 2,
    date: "10 February 2022",
    title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    img: "/blog2.png",
  },
  {
    id: 3,
    date: "10 February 2022",
    title: "Curabitur rutrum velit ac congue malesuada",
    img: "/blog3.png",
  },
];

function BlogHome() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto py-7 bg-black">
      <div className="max-w-[1330px] text-center px-8">
        <h1 className="Headdesign lg:text-3xl text-2xl font-400 mt-16 mb-2 text-[#FF9F0D]">Blog Post</h1><h1 className="text-[20px] text-white md:text-[50px] font-bold">
          <span className="text-[#FF9F0D]">La</span>test News & Blog
        </h1>
        <div className="flex flex-row mt-[50px]">
          <div className=" flex lg:flex-row flex-col lg:gap-5 gap-12">
            {blog.map((item) => {
              return (
                <div key={item.id} className=" border-[0.5px] max-w-[424px] border-gray-400  hover:scale-105 transition duration-300">
                  <div className="w-full ">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={2000}
                      height={2000}
                    />
                  </div>
                  <div className="text-start py-6 px-8 ">
                    <h3 className="font-[400] text-base mb-4 text-[#FF9F0D]">10 February 2022</h3>
                    <p className="Headings text-2xl mb-7 text-white">{item.title}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-white"><Link href={"/blog"} className="hover:text-[#ff9f0d] text-base font-[400]">Learn More</Link></div>
                      <div className=" flex items-center gap-2 cursor-pointer">
                        <HiOutlineHandThumbUp className="w-5 text-white hover:text-[#FF9F0D] active:text-[#FF9F0D]"/><HiOutlineChatBubbleLeftEllipsis className="w-5 text-[#FF9F0D] hover:text-[#FF9F0D]"/><CiShare2 className="w-5 text-white hover:text-[#FF9F0D] active:text-[#FF9F0D]"/>
                        </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mt-[32px]">
        <button className="bg-transparent border-2 border-[#ff9f0d] text-white w-[140px] h-[50px] md:w-[190px] md:h-[60px] rounded-[40px] hover:bg-[#FF9F0D] hover:text-black transition duration-300">
        <Link href="/blog">View More</Link>
        </button>
      </div>
      </div>
    </div>
  );
}

export default BlogHome;