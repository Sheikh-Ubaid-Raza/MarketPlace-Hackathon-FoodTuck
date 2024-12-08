import Checkout from "@/components/Checkout/Checkout";
import Dessert from "@/components/Dessert/Dessert";
import Drink from "@/components/Drinks/Drinks";
import Error from "@/components/Error/Error";
import Experience from "@/components/Experience/Experience";
import Faq from "@/components/Faq/Faq";
import Hero from "@/components/HeroSection/Hero";
import MainCours from "@/components/MainCours/MainCourse";
import StarterMenu from "@/components/Menu/StartMenu";
import PartnersAndClients from "@/components/pattnerClient/pattnerClient";
import Signin from "@/components/Signin/Signin";
import Signup from "@/components/Signup/Signup";
import AboutUs from "@/components/Aboutus";
import FoodCategory from "@/components/FoodCategory";
import HeroExperience from "@/components/HeroExperience";
import HeroMenu from "@/components/HeroMenu";
import Landing from "@/components/Landing/Landing";
import MeetChef from "@/components/MeetChef";
import Navbar from "@/components/Navbar/Navbar";
export default function Home() {
  return (
    <>
    {/* Home Page */}
       <Landing />
       <AboutUs />
       <FoodCategory />
       <HeroMenu />
       <MeetChef />
       <HeroExperience />

      {/* Menu Page */}
       <Navbar />
       <Hero/>
       <StarterMenu/>
       <MainCours/>
       <Experience/>
       <Dessert/>
       <Drink/>	
       <PartnersAndClients/>

       {/* FAQ */}
       <Faq />

       {/* Checkout */}
       <Checkout />

       {/* Sign up */}
       <Signup />

       {/* Sign in */}
       <Signin />

       {/* 404 Error */}
       <Error />

    </>
  );
}
