import Dessert from "@/components/Dessert/Dessert";
import Drink from "@/components/Drinks/Drinks";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/HeroSection/Hero";
import Navbar from "@/components/Navbar/Navbar";
import MainCours from "@/components/MainCours/MainCourse";
import StarterMenu from "@/components/Menu/StartMenu";
import PartnersAndClients from "@/components/pattnerClient/pattnerClient";

const MenuPage = () => {
  return (
  <div>
  {/* Menu Page */}
       <Navbar />
       <Hero />
       <StarterMenu />
       <MainCours/>
       <Experience/>
       <Dessert/>
       <Drink/>	
       <PartnersAndClients/>
  </div>
)};

export default MenuPage;
