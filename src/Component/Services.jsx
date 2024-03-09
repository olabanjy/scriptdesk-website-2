import Ai from "../assets/AI Technology.svg";
import Data from "../assets/Data.svg";
import Software from "../assets/Software.svg";
import Automation from "../assets/Automation.svg";

const Services = () => {
  return (
    <div
      className="  max-w-5xl  md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[40px]"
      id="services"
    >
      <p className=" text-[#333333] text-[14px] lg:text-[15px] mb-[22px]">
        OUR SERVICES
      </p>
      <p className=" font-[500] text-[18px] lg:text-[20px] text-[#333333]">
        WHAT WE DO
      </p>

      <div className=" mt-[26px] flex flex-col gap-[20px] lg:grid lg:grid-cols-4 items-center">
        <div className=" h-[354px] rounded-[10px]">
          <img src={Software} alt="" className=" bg-cover" />
        </div>
        <div className=" h-[354px] rounded-[10px]">
          <img src={Ai} alt="" className=" bg-cover" />
        </div>
        <div className=" h-[354px] rounded-[10px]">
          <img src={Automation} alt="" className=" bg-cover" />
        </div>
        <div className=" h-[354px] rounded-[10px]">
          <img src={Data} alt="" className=" bg-cover" />
        </div>
      </div>
    </div>
  );
};

export default Services;
