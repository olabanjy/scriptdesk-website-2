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
import ContactFormModal from "../Component/ContactFormModal";
import { Toaster, toast } from 'sonner';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const showMessage = (e) => {
    switch (e?.status) {
      case "success":
        toast.success(e.message)
        break;

      case "error":
        toast.error(e.message)
        break;

      default:
        break;
    }
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
      <Toaster richColors position="top-right" />
      <Navbar />
      <HeroSection toggleModal={toggleModal} />
      <AboutUs />
      <Services />
      <Clients />
      <Team />
      <Testimonials />
      <FaqPage />
      <Footer toggleModal={toggleModal} />
      <ContactFormModal toastMessage={(e) => showMessage(e)} isModalOpen={isModalOpen} toggleModal={toggleModal} />

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
