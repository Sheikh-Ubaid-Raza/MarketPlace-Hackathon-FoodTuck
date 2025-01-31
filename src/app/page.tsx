import AbountUs from "@/components/HomeComponents/Aboutus";
import ActiveProcess from "@/components/HomeComponents/ActiveProcess";
import BlogHome from "@/components/HomeComponents/BlogHome";
import Experience from "@/components/HomeComponents/Experience";
import FoodCategory from "@/components/HomeComponents/FoodCategory";
import HeroMenu from "@/components/HomeComponents/HeroMenu";
import HeroNavbar from "@/components/HomeComponents/Landing";
import MeetChef from "@/components/HomeComponents/MeetChef";
import TestimonialHome from "@/components/HomeComponents/TestimonialHome";
import WhyChooseUs from "@/components/HomeComponents/WhyChooseUs";

export default function Home() {
  return (
    <>
      {/* Home Page */}
      <HeroNavbar />
      <AbountUs />
      <FoodCategory />
      <WhyChooseUs />
      <Experience />      
      <HeroMenu />
      <MeetChef />
      <TestimonialHome />
      <ActiveProcess />
      <BlogHome />
    </>
  );
}
