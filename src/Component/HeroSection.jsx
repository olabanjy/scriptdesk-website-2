import Arrow from "../assets/arrowright.svg";
import Dot from "../assets/dot.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

const HeroSection = ({ toggleModal }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="overflow-hidden">
      <div className=" bg-HeroImage w-full bg-cover bg-center ">
        <div className=" max-w-5xl  md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[70px]">
          <div className=" max-w-[800px] grid gap-[50px]">
            <p
              className=" text-white text-[20px] lg:text-[40px] font-[500] "
              data-aos="fade-left"
            >
              Helping you navigate the technology landscape, one solution at a
              time.
            </p>
            <p
              className=" text-[#BDBDBD] text-[14px] lg:text-[20px]"
              data-aos="fade-right"
            >
              Transforming your business with Awesome IT Solutions, Cool Tech,
              and A+++ Service, through revolutionary technology
            </p>
            <div className=" cursor-pointer" data-aos="fade-up">
              <p
                className=" rounded-[10px] inline-flex items-center gap-[8px] text-[#292D33] text-[16px] lg:text-[18px] py-[13px] px-[50px] lg:px-[60px] bg-[#ffffff] font-[500]"
                onClick={toggleModal}
              >
                Work with us{" "}
                <span>
                  {" "}
                  <img src={Arrow} alt="" />
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className=" pb-[33px]">
          <div className=" flex flex-col items-center gap-[20px] py-[20px] bg-[#FFFFFF] bg-opacity-10 ">
            <p
              className=" text-[#E3E3E3] text-[10px] lg:text-[12px] font-[400] text-center"
              data-aos="fade-down"
            >
              BUILDING CUTTTING EDGE SOLUTIONS FOR VARIOUS INDUSTRIES ACROSS THE
              WORLD
            </p>
            <marquee direction="left">
              <div className=" flex items-center gap-[33px] text-[#E3E3E3] text-[14px]">
                <p>Healthcare</p>
                <img src={Dot} alt="" />
                <p>Finance</p>
                <img src={Dot} alt="" />
                <p>Government</p>
                <img src={Dot} alt="" />
                <p>News & Media</p>
                <img src={Dot} alt="" />
                <p>Telecomms</p>
                <img src={Dot} alt="" />
                <p>Agriculture</p>
                <img src={Dot} alt="" />
                <p>Legal</p>
                <img src={Dot} alt="" />
                <p>Edutech</p>
                <img src={Dot} alt="" />
                <p>Management</p>
              </div>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
export default HeroSection;
