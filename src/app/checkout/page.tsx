import Checkout from "@/components/Checkout/Checkout";
import CheckoutPageHero from "@/components/MainHero/CheckoutHero";
import Navbar from "@/components/Navbar/Navbar";

const CheckoutPage = () => {
    return (
        <div>
            <Navbar />
            <CheckoutPageHero />
            <Checkout />
        </div>
    )
};

export default CheckoutPage;