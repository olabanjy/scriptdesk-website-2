import Ai from "../assets/AI2.png";
import Data from "../assets/DATA2.svg";
import Software from "../assets/Software2.svg";
import Automation from "../assets/AutoMationRounded.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="overflow-hidden  max-w-5xl  md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[40px]"
      id="services"
    >
      <p className=" text-[#333333] text-[14px] lg:text-[15px] mb-[22px]">
        OUR SERVICES
      </p>
      <p className=" font-[500] text-[18px] lg:text-[20px] text-[#333333]">
        WHAT WE DO
      </p>

      <div className=" mt-[26px] flex flex-col gap-[20px] lg:grid lg:grid-cols-4 items-center">
        <div
          className=" max-h-[360px]  max-w-[287px] relative overflow-hidden"
          data-aos="fade-down"
        >
          <img
            src={Software}
            alt=""
            className="  bg-cover h-full transition-transform duration-1000 transform scale-100 hover:scale-110"
          />
          <div className=" py-[30px] text-center font-[500] w-full rounded-b-[10px] absolute bottom-0 bg-[#000000] bg-opacity-45 border border-white border-opacity-45">
            <p className=" text-[16px] text-white">Software Development</p>
          </div>
        </div>
        <div
          className=" max-h-[360px] max-w-[287px] relative overflow-hidden "
          data-aos="fade-right"
        >
          <img
            src={Ai}
            alt=""
            className="  bg-cover h-full transition-transform duration-1000 transform scale-100 hover:scale-110"
          />
          <div className=" py-[30px] text-center font-[500] w-full rounded-b-[10px] absolute bottom-0 bg-[#000000] bg-opacity-45 border border-white border-opacity-45">
            <p className=" text-[16px] text-white">AI Technology</p>
          </div>
        </div>
        <div
          className=" max-h-[360px] max-w-[287px] relative overflow-hidden "
          data-aos="fade-up"
        >
          <img
            src={Automation}
            alt=""
            className="  bg-cover h-full transition-transform duration-1000 transform scale-100 hover:scale-110"
          />
          <div className=" py-[30px] text-center font-[500] w-full rounded-b-[10px] absolute bottom-0 bg-[#000000] bg-opacity-45 border border-white border-opacity-45">
            <p className=" text-[16px] text-white">Automation Tools</p>
          </div>
        </div>
        <div
          className=" max-h-[360px] max-w-[287px] relative group overflow-hidden"
          data-aos="fade-left"
        >
          <img
            src={Data}
            alt=""
            className=" bg-cover h-full transition-transform duration-1000 transform scale-100 hover:scale-110"
          />
          <div className="  py-[30px] text-center font-[500] w-full rounded-b-[10px] absolute bottom-0 bg-[#000000] bg-opacity-45 border border-white border-opacity-45">
            <p className=" text-[16px] text-white">Data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
