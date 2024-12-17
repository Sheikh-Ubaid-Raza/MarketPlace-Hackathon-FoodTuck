import HeroNavbar from "@/components/Landing/Landing";
import AboutUs from "@/components/Aboutus";
import FoodCategory from "@/components/FoodCategory";
import HeroMenu from "@/components/HeroMenu";
import MeetChef from "@/components/MeetChef";
import PartnersAndClients from "@/components/pattnerClient/pattnerClient";
import Experience from "@/components/Experience/Experience";

export default function Home() {
  return (
    <>
      {/* Home Page */}
      <HeroNavbar />
      <AboutUs />
      <FoodCategory />
      <HeroMenu />
      <MeetChef />
      <Experience />
      <PartnersAndClients />
    </>
  );
}
