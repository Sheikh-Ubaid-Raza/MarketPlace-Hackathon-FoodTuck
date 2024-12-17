import Cheef from "@/components/Chef";
import ChefHero from "@/components/MainHero/ChefHero";
import Navbar from "@/components/Navbar/Navbar";

const ChefPage = () => {
    return (
        <div>
            {/* 404 Error */}
            <Navbar />
            <ChefHero />
            <Cheef />
        </div>
    )
};

export default ChefPage;