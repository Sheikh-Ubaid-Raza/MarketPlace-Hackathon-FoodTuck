import Faq from "@/components/Faq/Faq";
import FaqHero from "@/components/MainHero/FAQHero";
import Navbar from "@/components/Navbar/Navbar";

const FAQPage = () => {
    return (
        <div>
            {/* FAQ */}
            <Navbar />
            <FaqHero />
            <Faq />
        </div>
    )
};

export default FAQPage;