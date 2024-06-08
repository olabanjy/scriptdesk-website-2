import mobile from "../assets/9mobile.jpg";
import Airtel from "../assets/airtel.svg";
import Mtn from "../assets/mtn.svg";
import Evolution from "../assets/21stEvolution.jpg";
import LogoPreffered from "../assets/LogoPreffered.png";
import MagicCarpetlogo from "../assets/MagicCarpetlogo.png";
import logob from "../assets/logob.png";
import BrandCo from "../assets/BrandCo-site-logo.png";
import HML from "../assets/HML.jpg";
import blacktree from "../assets/blacktree.png";
import CloudIntegrated from "../assets/CloudIntegrated.svg";

const Clients = () => {
  return (
    <div
      className="  max-w-5xl  md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[40px]"
      id="clients"
    >
      <p className=" text-[#333333] text-[14px] lg:text-[15px] mb-[22px]">
        OUR CLIENTS
      </p>
      <p className=" font-[500] text-[16px] lg:text-[20px] text-[#333333]">
        SOME OF THE BRANDS & STARTUPS WE’VE WORKED WITH OVER THE YEARS
      </p>

      <div className=" mt-[26px] grid grid-cols-2 gap-[60px]  lg:grid-cols-5 items-center justify-center place-items-center">
        <img src={Airtel} alt="" className=" bg-cover" />
        <img src={Mtn} alt="" className=" bg-cover" />
        <img src={Evolution} alt="" className=" bg-cover" />
        <img src={LogoPreffered} alt="" className=" bg-cover" />
        <img src={blacktree} alt="" className=" bg-cover" />
        <img src={MagicCarpetlogo} alt="" className=" bg-cover " />
        <img src={logob} alt="" className=" bg-cover" />
        <img src={BrandCo} alt="" className=" bg-cover" />
        <img src={HML} alt="" className=" bg-cover" />
        <img src={mobile} alt="" className=" bg-cover" />
        <img src={CloudIntegrated} alt="" className=" bg-cover" />
      </div>
    </div>
  );
};

export default Clients;
