import AboutUs from "../Component/AboutUs";
import Clients from "../Component/Clients";
// import FAQ from "../Component/FAQ";
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
      {/* <FAQ /> */}
    </div>
  );
};

export default HomePage;
