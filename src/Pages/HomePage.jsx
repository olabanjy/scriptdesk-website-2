import AboutUs from "../Component/AboutUs";
import Clients from "../Component/Clients";
import FAQ from "../Component/FAQ";
import Footer from "../Component/Footer";
import HeroSection from "../Component/HeroSection";
import Services from "../Component/Services";
import Team from "../Component/Team";
import Testimonials from "../Component/Testimonials";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <Clients />
      <Team />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
