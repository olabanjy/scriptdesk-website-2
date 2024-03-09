import Navbar from "./Navbar";
import Arrow from "../assets/arrowright.svg";
import Dot from "../assets/dot.svg";
const HeroSection = () => {
  return (
    <div className=" ">
      <div className=" bg-HeroImage w-full bg-cover bg-center ">
        <Navbar />

        <div className=" max-w-5xl  md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[70px]">
          <div className=" max-w-[800px] grid gap-[50px]">
            <p className=" text-white text-[20px] lg:text-[40px] font-[500] ">
              Your Bridge To Digital Transformation; Catalyzing Growth through
              Cutting-Edge IT Solutions
            </p>
            <p className=" text-[#BDBDBD] text-[14px] lg:text-[20px]">
              Lorem ipsum dolor sit amet consectetur. Diam eget pellentesque eu
              et. Enim congue malesuada tellus ut. Dictumst tortor adipiscing
              vitae ornare faucibus iaculis purus. Tristique{" "}
            </p>
            <div className="">
              <p className=" rounded-[10px] inline-flex items-center gap-[8px] text-[#292D33] text-[16px] lg:text-[18px] py-[13px] px-[50px] lg:px-[60px] bg-[#ffffff] font-[500]">
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
            <p className=" text-[#E3E3E3] text-[10px] lg:text-[12px] font-[400] text-center">
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

export default HeroSection;
