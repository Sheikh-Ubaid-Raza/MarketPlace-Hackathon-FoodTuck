import Error from "@/components/Error/Error";
import ErrorHero from "@/components/MainHero/ErrorHero";
import Navbar from "@/components/Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div>
            {/* 404 Error */}
            <Navbar />
            <ErrorHero />
            <Error />
        </div>
    )
};

export default ErrorPage;
