
import Navbar from "@/components/Navbar/Navbar";
import Experience from "@/components/HomeComponents/Experience";
import Hero from "@/components/MainHero/MenuHero";
import MainCours from "@/components/MenuComponents/MainCourse";
import Dessert from "@/components/MenuComponents/Dessert";
import Drink from "@/components/MenuComponents/Drinks";
import PartnersAndClients from "@/components/MenuComponents/pattnerClient";
import StartMenu from "@/components/MenuComponents/StartMenu";

const MenuPage = () => {
  return (
  <div>
  {/* Menu Page */}
       <Navbar />
       <Hero />
       <StartMenu />
       <MainCours />
       <Experience/>
       <Dessert/>
       <Drink/>	
       <PartnersAndClients />
  </div>
)};

export default MenuPage;
