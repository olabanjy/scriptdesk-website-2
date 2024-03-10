import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="  max-w-5xl  md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[40px]"
      id="about"
      data-aos="fade-down"
    >
      <p className=" text-[#333333] text-[15px] mb-[22px]">OUR STORY</p>
      <p className=" font-[500] text-[20px] text-[#333333]">ABOUT US</p>
      <p className=" text-[#333333] text-[26px] font-[600] mt-[26px]">
        Whether it’s for today, tomorrow or several years into the future, our
        aim is to build solutions that matter
      </p>
      <div className=" mt-[26px]">
        <p className=" mt-[26px] text-[18px] text-[#616161]">
          Lorem ipsum dolor sit amet consectetur. Diam eget pellentesque eu et.
          Enim congue malesuada tellus ut. Dictumst tortor adipiscing vitae
          ornare faucibus iaculis purus. Tristique Lorem ipsum dolor sit amet
          consectetur. Diam eget pellentesque eu et. Enim congue malesuada
          tellus ut. Dictumst tortor adipiscing vitae ornare faucibus iaculis
          purus. Tristique{" "}
        </p>
        <p className=" py-[22px] text-[18px] text-[#616161]">
          Lorem ipsum dolor sit amet consectetur. Diam eget pellentesque eu et.
          Enim congue malesuada tellus ut. Dictumst tortor adipiscing vitae
          ornare faucibus iaculis purus. Tristique Lorem ipsum dolor sit amet
          consectetur.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
