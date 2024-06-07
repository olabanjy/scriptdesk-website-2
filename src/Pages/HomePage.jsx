import { useEffect, useState } from "react";
import AboutUs from "../Component/AboutUs";
import Clients from "../Component/Clients";
import FaqPage from "../Component/FaqPage";
import Footer from "../Component/Footer";
import HeroSection from "../Component/HeroSection";
import Navbar from "../Component/Navbar";
import Services from "../Component/Services";
import Team from "../Component/Team";
import Testimonials from "../Component/Testimonials";
import { RiArrowUpDoubleLine } from "react-icons/ri";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Clients />
      <Team />
      <Testimonials />
      <FaqPage />
      <Footer />

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#0079FF] text-[#ffffff] px-4 py-4 rounded-full shadow-lg  transition-all duration-300 animate-bounce hover:animate-none"
        >
          <RiArrowUpDoubleLine className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default HomePage;
